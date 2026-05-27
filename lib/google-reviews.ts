import "server-only";

import { curatedGoogleReviews } from "@/data/google-reviews.curated";
import type { GoogleReviewItem, GoogleReviewsSummary } from "@/types/google-reviews";

type PlacesV1Review = {
  name?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type PlacesV1Response = {
  displayName?: { text?: string; languageCode?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesV1Review[];
  error?: { code?: number; message?: string; status?: string };
};

/** Cache successful API responses 24h to keep Places API cost negligible on a portfolio site. */
const PLACES_API_REVALIDATE_SECONDS = 60 * 60 * 24;

function getGoogleApiKey() {
  return (
    process.env.GOOGLE_API_KEY?.trim() ||
    process.env.GOOGLE_PLACES_API_KEY?.trim() ||
    process.env.GOOGLE_MAPS_API_KEY?.trim() ||
    ""
  );
}

/**
 * Google Place Details (New) path is `GET .../v1/places/{placeId}` where `{placeId}` is
 * the bare id (e.g. `ChIJ...`). If you paste the full resource name `places/ChIJ...`,
 * strip the prefix or the API returns 404.
 */
function getGooglePlaceId(): string {
  const raw =
    process.env.GOOGLE_PLACE_ID?.trim() || process.env.GOOGLE_REVIEWS_PLACE_ID?.trim() || "";
  if (!raw) return "";
  return raw.startsWith("places/") ? raw.slice("places/".length) : raw;
}

function usePlacesApi(): boolean {
  const mode = process.env.GOOGLE_REVIEWS_SOURCE?.trim().toLowerCase();
  if (mode === "curated" || mode === "static") return false;
  if (mode === "api") return true;
  // Default: curated file only (no billing). Opt in with GOOGLE_REVIEWS_USE_API=true or SOURCE=api.
  return process.env.GOOGLE_REVIEWS_USE_API?.trim().toLowerCase() === "true";
}

function normalizeReview(review: PlacesV1Review, index: number): GoogleReviewItem {
  const reviewText = review.text?.text?.trim() || review.originalText?.text?.trim() || "";
  const author = review.authorAttribution;

  return {
    id: `${review.publishTime ?? index}-${author?.displayName ?? "review"}`,
    authorName: author?.displayName?.trim() || "Google reviewer",
    rating: Math.min(5, Math.max(1, Number(review.rating ?? 5))),
    text: reviewText,
    relativeTimeDescription: review.relativePublishTimeDescription?.trim() || null,
    authorUrl: author?.uri?.trim() || null,
    profilePhotoUrl: author?.photoUri?.trim() || null,
  };
}

function getCuratedReviews(limit: number): GoogleReviewsSummary {
  const reviews = curatedGoogleReviews.reviews
    .filter((r) => r.text.trim().length > 0)
    .slice(0, Math.max(1, Math.min(limit, 12)));

  return {
    ...curatedGoogleReviews,
    reviews,
  };
}

function hasDisplayableReviews(summary: GoogleReviewsSummary): boolean {
  return summary.reviews.some((r) => r.text.trim().length > 0);
}

async function fetchFromPlacesApi(limit: number): Promise<GoogleReviewsSummary | null> {
  const placeId = getGooglePlaceId();
  const apiKey = getGoogleApiKey();
  if (!placeId || !apiKey) {
    return null;
  }

  const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;

  const response = await fetch(endpoint, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "displayName,rating,userRatingCount,googleMapsUri,reviews",
    },
    next: { revalidate: PLACES_API_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.warn(
      `[Google Reviews] Places API request failed (${response.status}); using curated reviews if available. ` +
        `Common causes: billing disabled, Places API (New) not enabled, or API key restrictions. ` +
        `Body: ${body.slice(0, 300)}`,
    );
    return null;
  }

  const payload = (await response.json()) as PlacesV1Response;

  if (payload.error) {
    console.warn(
      `[Google Reviews] API error: ${payload.error.message ?? payload.error.status}`,
    );
    return null;
  }

  const reviews = (payload.reviews ?? [])
    .filter((r) => {
      const t = r.text?.text?.trim() || r.originalText?.text?.trim() || "";
      return t.length > 0;
    })
    .slice(0, Math.max(1, Math.min(limit, 12)))
    .map((review, index) => normalizeReview(review, index));

  return {
    placeName: payload.displayName?.text?.trim() || "Google reviews",
    placeUrl: payload.googleMapsUri?.trim() || null,
    rating:
      typeof payload.rating === "number"
        ? Math.min(5, Math.max(1, payload.rating))
        : null,
    userRatingsTotal:
      typeof payload.userRatingCount === "number"
        ? Math.max(0, payload.userRatingCount)
        : null,
    reviews,
  };
}

/**
 * Returns Google reviews for the testimonials section.
 *
 * - **Default:** `data/google-reviews.curated.ts` (no API, no billing).
 * - **Live API (opt-in):** `GOOGLE_REVIEWS_SOURCE=api` plus `GOOGLE_API_KEY` + `GOOGLE_PLACE_ID`.
 */
export async function getGoogleReviews(limit = 6): Promise<GoogleReviewsSummary | null> {
  const curated = getCuratedReviews(limit);

  if (usePlacesApi() && getGooglePlaceId() && getGoogleApiKey()) {
    const fromApi = await fetchFromPlacesApi(limit);
    if (fromApi && hasDisplayableReviews(fromApi)) {
      return fromApi;
    }
  }

  if (hasDisplayableReviews(curated)) {
    return curated;
  }

  if (curated.placeUrl || curated.rating != null) {
    return curated;
  }

  return null;
}
