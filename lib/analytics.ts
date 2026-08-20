export type SiteEvent =
  | "page_view"
  | "gas_order_click"
  | "gas_do_povo_click"
  | "location_click"
  | "sticky_whatsapp_click"
  | "final_cta_click"
  | "faq_open";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: SiteEvent,
  parameters: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
  window.gtag?.("event", event, parameters);
  window.fbq?.("trackCustom", event, parameters);
}
