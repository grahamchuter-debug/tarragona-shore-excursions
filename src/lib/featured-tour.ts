/**
 * Featured-tour helpers — Editor's Choice flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("tarragona-highlights-walking-tour");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "tarragona-highlights-walking-tour",
      path: "/shore-excursions/tarragona-highlights-walking-tour",
      bookingPath: "/book/tarragona-highlights-walking-tour",
      cardName: "Tarragona Highlights Walking Tour",
      fullName: "Tarragona Highlights Walking Tour",
    };
