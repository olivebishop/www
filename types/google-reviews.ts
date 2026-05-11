export type GoogleReviewItem = {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  relativeTimeDescription: string | null;
  authorUrl: string | null;
  profilePhotoUrl: string | null;
};

export type GoogleReviewsSummary = {
  placeName: string;
  placeUrl: string | null;
  rating: number | null;
  userRatingsTotal: number | null;
  reviews: GoogleReviewItem[];
};