import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marcelo Gás",
    short_name: "Marcelo Gás",
    description: "Pedido de gás pelo WhatsApp em Poções, Bahia.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee4",
    theme_color: "#082f38",
    lang: "pt-BR",
    icons: [{ src: "/images/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
