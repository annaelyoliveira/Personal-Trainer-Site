import PricingTable from "../components/PricingTable.jsx";
import { beneficiosConsultoriaOnline, planosConsultoriaOnline, whatsappLink } from "../data/site.js";

export default function ConsultoriaOnline() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Serviço</p>
          <h1>Consultoria Online</h1>
          <p className="muted page-hero__lead">
            Ótima opção para quem tem horário flexível para treinar e busca o melhor
            custo-benefício. Protocolo entregue em até <strong>72 horas</strong> após a
            confirmação de pagamento e envio das informações.
          </p>
          <a
            href={whatsappLink("Olá, Patrick! Quero começar a Consultoria Online.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Começar meu acompanhamento
          </a>
        </div>
      </section>

      <section className="section section--light">
        <div className="container two-col">
          <div>
            <p className="eyebrow">O que está incluso</p>
            <h2>Serviços e benefícios</h2>
            <ul className="check-list">
              {beneficiosConsultoriaOnline.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <p className="eyebrow">Tabela de preços</p>
            <PricingTable planos={planosConsultoriaOnline} />
            <p className="muted price-note">
              Avaliação de composição corporal presencial em Monteiro (PB): <strong>R$ 50,00</strong> por avaliação.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          padding: 64px 0 48px;
          border-bottom: 1px solid var(--line);
          background: var(--bg);
        }
        .page-hero__lead {
          max-width: 620px;
          margin: 16px 0 28px;
          font-size: 1.05rem;
        }
        .two-col {
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
        }
        .check-list {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .check-list li {
          padding-left: 28px;
          position: relative;
        }
        .check-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 6px;
          width: 14px;
          height: 14px;
          border-radius: 3px;
          background: var(--accent);
        }
        .price-note {
          margin-top: 18px;
          font-size: 0.85rem;
        }
        @media (min-width: 900px) {
          .two-col { grid-template-columns: 1fr 1.1fr; align-items: start; }
        }
      `}</style>
    </>
  );
}
