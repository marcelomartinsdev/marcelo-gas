export const siteUrl = "https://marcelogaspocoes.site";

export const site = {
  name: "Marcelo Gás",
  description:
    "Marcelo Gás em Poções, Bahia. Faça seu pedido de gás pelo WhatsApp e consulte atendimento pelo programa Gás do Povo.",
  phoneDisplay: "(77) 98142-5682",
  phoneTel: "+5577981425682",
  whatsappNumber: "5577981425682",
  hours: {
    opens: "07:00",
    closes: "21:00",
    display: "Todos os dias, das 7h às 21h",
    detail: "Segunda a segunda, inclusive finais de semana",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  address: {
    street: "Rua Um, 121",
    neighborhood: "Bairro São Paulo",
    city: "Poções",
    state: "BA",
    postalCode: "45264-304",
    display: "Rua Um, 121, Bairro São Paulo, Poções - BA, CEP 45264-304",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Um%2C%20121%2C%20Bairro%20S%C3%A3o%20Paulo%2C%20Po%C3%A7%C3%B5es%20-%20BA%2C%2045264-304%2C%20Brasil",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua%20Um%2C%20121%2C%20Bairro%20S%C3%A3o%20Paulo%2C%20Po%C3%A7%C3%B5es%20-%20BA%2C%2045264-304%2C%20Brasil&z=17&output=embed",
  gasDoPovoOfficialUrl: "https://www.gov.br/mme/pt-br/gas-do-povo",
} as const;

export const whatsappMessages = {
  order:
    "Olá! Vim pelo site do Marcelo Gás e gostaria de pedir um botijão de gás.",
  peopleGas:
    "Olá! Vim pelo site do Marcelo Gás e gostaria de saber mais sobre o atendimento pelo Gás do Povo.",
  delivery:
    "Olá! Vim pelo site e gostaria de consultar entrega do Marcelo Gás para o meu endereço.",
  general:
    "Olá! Vim pelo site do Marcelo Gás e gostaria de tirar uma dúvida.",
} as const;

export type WhatsAppCampaign =
  | "pedido_gas"
  | "gas_do_povo"
  | "localizacao"
  | "cta_final";

export function whatsappHref(
  message: string = whatsappMessages.order,
  campaign: WhatsAppCampaign = "pedido_gas",
) {
  const url = new URL(`https://wa.me/${site.whatsappNumber}`);
  url.searchParams.set("autoload", "1");
  url.searchParams.set("app_absent", "0");
  url.searchParams.set("utm_source", "site");
  url.searchParams.set("utm_medium", "cta");
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("text", message);
  return url.toString();
}
