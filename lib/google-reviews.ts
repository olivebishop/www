import "server-only";

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

function getGoogleApiKey() {
  return (
    process.env.GOOGLE_API_KEY?.trim() ||
    process.env.GOOGLE_PLACES_API_KEY?.trim() ||
    process.env.GOOGLE_MAPS_API_KEY?.trim() ||
    ""
  );
}

function getGooglePlaceId() {
  return process.env.GOOGLE_PLACE_ID?.trim() || process.env.GOOGLE_REVIEWS_PLACE_ID?.trim() || "";
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

export async function getGoogleReviews(limit = 6): Promise<GoogleReviewsSummary | null> {
  const placeId = getGooglePlaceId();
  const apiKey = getGoogleApiKey();
  if (!placeId || !apiKey) {
    return null;
  }

  const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;

  const response = await fetch(endpoint, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "displayName,rating,userRatingCount,googleMapsUri,reviews",
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.error(`[Google Reviews] fetch failed (${response.status}): ${body}`);
    return null;
  }

  const payload = (await response.json()) as PlacesV1Response;

  if (payload.error) {
    console.error(
      `[Google Reviews] API error: ${payload.error.message ?? payload.error.status}`,
    );
    return null;
  }

  const reviews = (payload.reviews ?? [])
    .filter((r) => {
      const text = r.text?.text?.trim() || r.originalText?.text?.trim();
      return typeof text === "string" && text.length > 0;
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
