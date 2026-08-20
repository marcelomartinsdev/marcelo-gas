import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Clock3,
  ExternalLink,
  Flame,
  MapPin,
  MessageCircle,
  Navigation,
} from "lucide-react";
import FAQList from "@/components/FAQList";
import Logo from "@/components/ui/Logo";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { site, siteUrl, whatsappMessages } from "@/data/site";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phoneTel,
  url: siteUrl,
  image: `${siteUrl}/images/og-marcelo-gas.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: "BR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: site.hours.days,
    opens: site.hours.opens,
    closes: site.hours.closes,
  },
};

export default function Home() {
  return (
    <>
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-kicker"><i /> MARCELO GÁS <span>POÇÕES / BA</span></p>
            <h1>
              Precisou<br />
              de <em>gás?</em><br />
              Chama o Marcelo.
            </h1>
            <p className="hero-lead">
              Peça seu gás direto pelo WhatsApp, todos os dias, das 7h às 21h, e consulte o atendimento para o seu endereço em Poções.
            </p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-primary" ctaLocation="hero">
                <MessageCircle size={21} /> Pedir meu gás <ArrowRight size={20} />
              </WhatsAppLink>
              <a className="hero-secondary" href="#gas-do-povo">
                Consultar Gás do Povo <ArrowDownRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-photo-wrap">
              <Image
                src="/images/entregador.webp"
                alt="Entregador do Marcelo Gás junto à motocicleta e aos botijões"
                fill
                preload
                fetchPriority="high"
                className="hero-photo"
                sizes="(max-width: 760px) 92vw, 48vw"
              />
            </div>
            <div className="hero-stamp"><span>pedido direto</span><strong>77</strong><small>WHATSAPP</small></div>
            <div className="hero-flame" aria-hidden="true"><i /><i /></div>
          </div>

          <div className="hero-route" aria-hidden="true">
            <svg viewBox="0 0 1200 160" preserveAspectRatio="none"><path d="M-40 115C214 9 335 142 545 72S878 37 1245 95" /></svg>
          </div>
        </section>

        <section className="trust-rail" aria-label="Diferenciais confirmados">
          <div><MessageCircle size={20} /><span>Contato direto</span><strong>pelo WhatsApp</strong></div>
          <div><MapPin size={20} /><span>Atendimento local</span><strong>em Poções</strong></div>
          <div><Clock3 size={20} /><span>Aberto todos os dias</span><strong>das 7h às 21h</strong></div>
          <div><Flame size={20} /><span>Atendimento pelo</span><strong>Gás do Povo</strong></div>
        </section>

        <section className="order-flow section-shell" id="como-pedir">
          <div className="section-index">01 — PEDIDO</div>
          <div className="flow-title">
            <p>SEM VOLTA. SEM FORMULÁRIO.</p>
            <h2>Seu gás.<br />Um pedido.<br /><em>Direto.</em></h2>
          </div>
          <figure className="flow-proof">
            <Image
              src="/images/patio4.webp"
              alt="Profissional conferindo botijões no pátio do Marcelo Gás"
              fill
              sizes="(max-width: 760px) calc(100vw - 36px), 40vw"
            />
            <figcaption><span>OPERAÇÃO REAL</span><strong>Seu pedido parte daqui.</strong></figcaption>
          </figure>
          <div className="flow-steps">
            <div><span>01</span><strong>Chame</strong><p>Abra o WhatsApp em qualquer botão do site.</p></div>
            <div><span>02</span><strong>Envie seu endereço</strong><p>Informe onde você está em Poções.</p></div>
            <div><span>03</span><strong>Confirme</strong><p>A equipe responde com as informações do atendimento.</p></div>
          </div>
          <WhatsAppLink className="button button-dark flow-cta" ctaLocation="hero">
            Começar pedido <ArrowRight size={20} />
          </WhatsAppLink>
        </section>

        <section className="people-gas" id="gas-do-povo">
          <div className="people-gas-band" aria-hidden="true">PROGRAMA SOCIAL • CONSULTA DIRETA • PROGRAMA SOCIAL • CONSULTA DIRETA</div>
          <div className="people-gas-inner section-shell">
            <div className="people-gas-wordmark">
              <small>ATENDIMENTO PELO PROGRAMA</small>
              <strong>GÁS DO<br />POVO</strong>
              <span>IDENTIFICAÇÃO OFICIAL EM VERSÃO ELEITORAL MONOCROMÁTICA</span>
            </div>
            <div className="people-gas-copy">
              <span className="section-index light">02 — GÁS DO POVO</span>
              <h2>Marcelo Gás também atende pelo programa.</h2>
              <p>
                O programa disponibiliza a gratuidade da recarga do botijão de 13 kg para famílias que atendem aos critérios oficiais. O uso do benefício acontece em revendas credenciadas.
              </p>
              <p className="people-gas-note">
                Consulte seu atendimento diretamente com o Marcelo Gás. Elegibilidade e regras são definidas pelo Governo Federal.
              </p>
              <div className="people-gas-actions">
                <WhatsAppLink
                  className="button button-primary"
                  ctaLocation="gas_do_povo"
                  campaign="gas_do_povo"
                  message={whatsappMessages.peopleGas}
                  eventName="gas_do_povo_click"
                >
                  Consultar pelo WhatsApp <ArrowRight size={20} />
                </WhatsAppLink>
                <a href={site.gasDoPovoOfficialUrl} target="_blank" rel="noopener noreferrer">
                  Ver página oficial <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="operation section-shell" id="operacao">
          <div className="operation-heading">
            <span className="section-index">03 — PRESENÇA LOCAL</span>
            <h2>Gás de verdade.<br /><em>Gente de verdade.</em></h2>
            <p>Um recorte real da operação do Marcelo Gás em Poções.</p>
          </div>
          <div className="photo-editorial">
            <figure className="photo-a"><Image src="/images/patio.webp" alt="Botijões organizados no pátio do Marcelo Gás" fill sizes="(max-width: 760px) 92vw, 38vw" /><figcaption>Pátio • Poções/BA</figcaption></figure>
            <figure className="photo-b"><Image src="/images/proprietario.webp" alt="Profissional do Marcelo Gás com botijões" fill sizes="(max-width: 760px) 76vw, 27vw" /><figcaption>Atendimento local</figcaption></figure>
            <figure className="photo-c"><Image src="/images/patio2.webp" alt="Estoque de botijões do Marcelo Gás" fill sizes="(max-width: 760px) 65vw, 24vw" /><figcaption>Operação real</figcaption></figure>
            <div className="photo-caption-block"><strong>POÇÕES</strong><p>Atendimento com endereço, telefone e operação identificados.</p></div>
          </div>
        </section>

        <section className="route-story">
          <div className="route-story-grid section-shell">
            <div className="route-copy">
              <span className="section-index light">04 — ROTA</span>
              <h2>Do pedido no WhatsApp<br /><em>à sua casa.</em></h2>
              <p>Você envia o endereço. A equipe confirma as informações da entrega diretamente na conversa.</p>
            </div>
            <div className="route-map" aria-label="Ilustração da rota entre o Marcelo Gás e a casa do cliente">
              <svg viewBox="0 0 900 420" role="img" aria-label="Rota ilustrada entre o Marcelo Gás e a casa do cliente">
                <title>Rota ilustrada entre o Marcelo Gás e a casa do cliente</title>
                <path className="route-shadow" d="M45 325C176 337 180 92 340 128s214 246 365 150 78-239 163-235" />
                <path className="route-line" d="M45 325C176 337 180 92 340 128s214 246 365 150 78-239 163-235" />
              </svg>
              <div className="route-point route-origin"><i /><span>Marcelo Gás</span><small>Rua Um, 121</small></div>
              <div className="route-bike"><BikeMini /></div>
              <div className="route-point route-destination"><i /><span>Sua casa</span><small>Endereço a confirmar</small></div>
            </div>
          </div>
        </section>

        <section className="flame-section section-shell">
          <div className="flame-art" aria-hidden="true"><span className="flame-orange" /><span className="flame-teal" /></div>
          <div className="flame-copy">
            <span className="section-index">05 — SEM COMPLICAÇÃO</span>
            <p className="flame-overline">A duas cores, uma só direção.</p>
            <h2>Quando faltar gás,<br /><em>você já sabe quem chamar.</em></h2>
            <ul>
              <li><Check size={18} /> WhatsApp direto com a equipe</li>
              <li><Check size={18} /> Endereço físico em Poções</li>
              <li><Check size={18} /> Consulta de entrega para seu endereço</li>
            </ul>
          </div>
          <div className="flame-photo"><Image src="/images/patio3.webp" alt="Botijões no pátio do Marcelo Gás" fill sizes="(max-width: 760px) 86vw, 30vw" /></div>
        </section>

        <section className="location" id="localizacao">
          <div className="location-panel section-shell">
            <div className="location-copy">
              <span className="section-index light">06 — LOCALIZAÇÃO</span>
              <p className="location-city">POÇÕES / BAHIA</p>
              <h2>Tem endereço.<br />Tem contato.<br /><em>Tem Marcelo.</em></h2>
              <address>
                Rua Um, 121<br />Bairro São Paulo<br />Poções - BA<br />CEP 45264-304
              </address>
              <div className="location-hours">
                <Clock3 size={21} aria-hidden="true" />
                <span><strong>Horário de funcionamento</strong>{site.hours.display}<small>{site.hours.detail}</small></span>
              </div>
              <div className="location-actions">
                <a className="button button-white" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation size={19} /> Abrir no Google Maps
                </a>
                <WhatsAppLink
                  className="location-link"
                  ctaLocation="location"
                  campaign="localizacao"
                  message={whatsappMessages.delivery}
                  eventName="location_click"
                >
                  Consultar entrega <ArrowRight size={18} />
                </WhatsAppLink>
              </div>
            </div>
            <div className="map-wrap">
              <div className="map-label"><MapPin size={17} /> Rua Um, 121</div>
              <iframe src={site.mapsEmbed} title="Mapa da Rua Um, 121, Bairro São Paulo, Poções - BA" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Se o mapa não carregar, abrir no Google Maps</a>
            </div>
          </div>
        </section>

        <section className="faq section-shell" id="duvidas">
          <div className="faq-heading"><span className="section-index">07 — DÚVIDAS</span><h2>Antes de<br /><em>chamar.</em></h2></div>
          <FAQList />
        </section>

        <section className="final-cta">
          <div className="final-glow" aria-hidden="true" />
          <div className="final-logo"><Logo /></div>
          <div className="final-copy">
            <span>POÇÕES / BA</span>
            <h2>Faltou gás?<br /><em>Resolve pelo WhatsApp.</em></h2>
            <p>Fale direto com o Marcelo Gás e envie seu endereço.</p>
            <WhatsAppLink className="button button-primary" ctaLocation="final" campaign="cta_final" eventName="final_cta_click">
              <MessageCircle size={21} /> Pedir agora <ArrowRight size={20} />
            </WhatsAppLink>
            <WhatsAppLink className="final-people-link" ctaLocation="final" campaign="gas_do_povo" message={whatsappMessages.peopleGas} eventName="gas_do_povo_click">
              Consultar Gás do Povo
            </WhatsAppLink>
          </div>
          <div className="final-photo"><Image src="/images/entregador.webp" alt="Entregador do Marcelo Gás" fill sizes="(max-width: 760px) 90vw, 34vw" /></div>
        </section>
      </main>

      <footer className="site-footer">
        <Logo className="footer-logo" />
        <div><strong>Marcelo Gás</strong><p>{site.address.display}</p></div>
        <div className="footer-contact"><strong>WhatsApp</strong><a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a><p>{site.hours.display}</p><small>{site.hours.detail}</small></div>
        <p className="government-note">Marcelo Gás é uma revenda privada participante do programa Gás do Povo e não é um órgão público. Regras e elegibilidade são definidas pelo Governo Federal.</p>
        <span>© {new Date().getFullYear()} Marcelo Gás</span>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
    </>
  );
}

function BikeMini() {
  return (
    <svg viewBox="0 0 110 58" aria-hidden="true">
      <circle cx="25" cy="45" r="12" /><circle cx="84" cy="45" r="12" />
      <path d="M25 45h23l14-20h14l8 20M48 45l-8-24h22" />
      <path className="bike-mini-body" d="m43 40 11-22h22l10 21-22 5Z" />
      <path d="M61 20c1-11 8-17 18-15 9 2 14 9 13 18-13 4-23 3-31-3Z" />
    </svg>
  );
}
