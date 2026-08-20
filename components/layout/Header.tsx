import { MapPin, MessageCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#inicio" aria-label="Marcelo Gás — início">
        <Logo priority className="header-logo" />
      </a>
      <nav aria-label="Navegação principal">
        <a href="#localizacao"><MapPin size={16} /> Localização</a>
        <a href="#gas-do-povo">Gás do Povo</a>
      </nav>
      <WhatsAppLink className="header-cta" ctaLocation="header" aria-label="Pedir gás pelo WhatsApp">
        <MessageCircle size={18} /> <span>Pedir gás</span>
      </WhatsAppLink>
    </header>
  );
}
