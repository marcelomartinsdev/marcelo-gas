import { Plus } from "lucide-react";

const faqs = [
  [
    "Como faço um pedido?",
    "Clique em qualquer botão de WhatsApp do site e envie sua solicitação diretamente para o Marcelo Gás.",
  ],
  [
    "Onde fica o Marcelo Gás?",
    "Rua Um, 121, Bairro São Paulo, Poções - BA, CEP 45264-304.",
  ],
  [
    "Qual é o horário de funcionamento?",
    "O Marcelo Gás funciona todos os dias, das 7h às 21h, de segunda a segunda, inclusive aos finais de semana.",
  ],
  [
    "O Marcelo Gás atende pelo Gás do Povo?",
    "Sim. Use o botão de consulta do Gás do Povo para falar diretamente pelo WhatsApp e conferir as informações do seu atendimento.",
  ],
  [
    "Posso consultar entrega para o meu endereço?",
    "Sim. Envie seu endereço pelo WhatsApp para consultar o atendimento. A disponibilidade é confirmada pela equipe.",
  ],
] as const;

export default function FAQList() {
  return (
    <div className="faq-list">
      {faqs.map(([question, answer], index) => (
        <details key={question}>
          <summary
            data-track-event="faq_open"
            data-question={question}
            data-faq-index={index + 1}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {question}
            <Plus aria-hidden="true" />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
