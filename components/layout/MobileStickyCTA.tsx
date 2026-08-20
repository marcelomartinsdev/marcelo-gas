"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-sticky ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <WhatsAppLink
        ctaLocation="sticky_mobile"
        eventName="sticky_whatsapp_click"
        tabIndex={visible ? 0 : -1}
      >
        <MessageCircle size={20} /> Pedir gás pelo WhatsApp
      </WhatsAppLink>
    </div>
  );
}
