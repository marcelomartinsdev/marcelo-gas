"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  whatsappHref,
  whatsappMessages,
  type WhatsAppCampaign,
} from "@/data/site";
import type { SiteEvent } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  message?: string;
  campaign?: WhatsAppCampaign;
  eventName?: SiteEvent;
  ctaLocation: "header" | "hero" | "gas_do_povo" | "location" | "sticky_mobile" | "final" | "footer";
};

export default function WhatsAppLink({
  children,
  message = whatsappMessages.order,
  campaign = "pedido_gas",
  eventName = "gas_order_click",
  ctaLocation,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: Props) {
  return (
    <a
      href={whatsappHref(message, campaign)}
      target={target}
      rel={rel}
      data-cta-location={ctaLocation}
      data-track-event={eventName}
      data-utm-source="site"
      data-utm-medium="cta"
      data-utm-campaign={campaign}
      {...props}
    >
      {children}
    </a>
  );
}
