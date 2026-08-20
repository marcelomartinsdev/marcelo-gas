import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { AnalyticsScripts, GTMNoScript } from "@/components/Analytics";
import OpeningIntro from "@/components/OpeningIntro";
import Header from "@/components/layout/Header";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { site, siteUrl } from "@/data/site";
import "./globals.css";

const displayFont = localFont({
  src: "../assets/fonts/BricolageGrotesque.ttf",
  variable: "--font-display",
  display: "swap",
});

const bodyFont = localFont({
  src: "../assets/fonts/Gabarito.ttf",
  variable: "--font-body",
  display: "swap",
});

const title = "Marcelo Gás em Poções | Peça seu Gás pelo WhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: site.name,
  title: { default: title, template: "%s | Marcelo Gás" },
  description: site.description,
  keywords: [
    "gás em Poções",
    "revenda de gás em Poções",
    "gás Poções BA",
    "botijão de gás Poções",
    "Marcelo Gás Poções",
    "Gás do Povo Poções",
  ],
  alternates: { canonical: siteUrl, languages: { "pt-BR": siteUrl } },
  category: "Revenda de gás de cozinha",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: "/images/og-marcelo-gas.jpg",
        width: 1200,
        height: 630,
        alt: "Marcelo Gás em Poções — pedidos pelo WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/og-marcelo-gas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/images/icon.png", apple: "/images/icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082f38",
  colorScheme: "light dark",
};

const introScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;d.setAttribute('data-intro','play');if(reduced)d.setAttribute('data-motion','reduced');var duration=reduced?1250:2000;var done=false;var finish=function(){if(done)return;done=true;d.setAttribute('data-intro','done');d.removeAttribute('data-motion');var el=document.querySelector('.intro-overlay');if(el){el.style.display='none';el.replaceChildren();}};var timer=setTimeout(finish,duration);window.addEventListener('pagehide',function(){clearTimeout(timer)},{once:true});}catch(e){d.setAttribute('data-intro','done')}})();`;

const trackingScript = `(function(){window.dataLayer=window.dataLayer||[];function push(name,params){var payload=Object.assign({event:name},params||{});window.dataLayer.push(payload);if(window.gtag)window.gtag('event',name,params||{});if(window.fbq)window.fbq('trackCustom',name,params||{});}push('page_view',{page_path:location.pathname});document.addEventListener('click',function(event){var target=event.target;if(!target||!target.closest)return;var tracked=target.closest('[data-track-event]');if(!tracked)return;var name=tracked.getAttribute('data-track-event');if(!name)return;if(name==='faq_open'){var details=tracked.closest('details');if(details&&details.open)return;}push(name,{cta_location:tracked.getAttribute('data-cta-location')||undefined,utm_source:tracked.getAttribute('data-utm-source')||undefined,utm_medium:tracked.getAttribute('data-utm-medium')||undefined,utm_campaign:tracked.getAttribute('data-utm-campaign')||undefined,question:tracked.getAttribute('data-question')||undefined,faq_index:tracked.getAttribute('data-faq-index')||undefined});},true);})();`;
const bootstrapScript = `${trackingScript}${introScript}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: ".intro-overlay{display:none}html[data-intro=play] .intro-overlay{display:grid}" }} />
      </head>
      <body>
        <GTMNoScript />
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
        <OpeningIntro />
        <Header />
        {children}
        <MobileStickyCTA />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
