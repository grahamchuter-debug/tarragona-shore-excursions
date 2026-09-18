/**
 * Server-controlled excursion catalogue for Checkout.
 * Browser-supplied excursionName / price are never authoritative.
 *
 * Empty until EUR selling prices and fulfilment are verified.
 * Do not publish fictitious prices for comingSoon products.
 */

export type CatalogueCurrency = "eur" | "usd" | "gbp";

export type ExcursionProduct = {
  id: string;
  name: string;
  bookingPath: string;
  successPath: string;
  /** Authoritative major units per guest (same face price as source catalogue) */
  pricePerGuest: number;
  /** Stripe currency code */
  currency: CatalogueCurrency;
  /** @deprecated Prefer pricePerGuest — kept for transitional callers */
  pricePerGuestEur?: number;
};

export const EXCURSION_CATALOGUE: Readonly<Record<string, ExcursionProduct>> = {} as const;

export function getExcursionProduct(excursionId: string): ExcursionProduct | null {
  const id = excursionId.trim();
  return EXCURSION_CATALOGUE[id] ?? null;
}
