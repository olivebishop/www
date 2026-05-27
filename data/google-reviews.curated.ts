import type { GoogleReviewsSummary } from "@/types/google-reviews";

/**
 * Free alternative to the Places API: copy your public Google reviews here.
 * Google does not offer a no-billing API for custom review UIs — this file is
 * the zero-cost option. Re-sync when you get new reviews on your Business Profile.
 *
 * Maps link: https://www.google.com/maps/search/?api=1&query_place_id=YOUR_PLACE_ID
 */
export const curatedGoogleReviews: GoogleReviewsSummary = {
  placeName: "Olive Bishop",
  placeUrl:
    "https://www.google.com/maps/search/?api=1&query_place_id=ChIJC3ifDWbeoacRxE2W8alFokw",
  rating: 5,
  userRatingsTotal: 3,
  reviews: [
    {
      id: "erick-muturi",
      authorName: "Erick Muturi",
      rating: 5,
      text: "Best platform as far as hosting and ticketing of events is concerned. I highly recommend.",
      relativeTimeDescription: "2 weeks ago",
      authorUrl: null,
      profilePhotoUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjXR97WVlxamvXPTK8euyynMAwqvn-QlbyjuTRdIt45p0s-B3_UU=s36-c-rp-mo-br100",
    },
    {
      id: "brian-aliero",
      authorName: "Brian Aliero",
      rating: 5,
      text: "Excellent and remarkable work.",
      relativeTimeDescription: "2 weeks ago",
      authorUrl: null,
      profilePhotoUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocLSdxcgUh_VTtHpsnbIyBYaxDqhwu6ETlo0fo7RfRUP3yYIKRU=s36-c-rp-mo-br100",
    },
    {
      id: "felix-jumason",
      authorName: "Felix Jumason",
      rating: 5,
      text: "He has mastered his craft and knows what he is doing",
      relativeTimeDescription: "2 weeks ago",
      authorUrl: null,
      profilePhotoUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjUqRVj_t6zSb8YoOm1Rir9zZS2pNnhBhBrN8GZ9jgNIN2439j7X=s36-c-rp-mo-br100",
    },
  ],
};
