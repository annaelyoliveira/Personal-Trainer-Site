import { site, whatsappLink } from "../data/site.js";

export default function AcompanhamentoPresencial() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Serviço</p>
          <h1>Acompanhamento Presencial</h1>
          <p className="muted page-hero__lead">
            Personal training presencial, disponível em <strong>{site.cidade}</strong>.
            Treinos conduzidos ao vivo, com correção técnica imediata e ajustes em
            tempo real conforme sua evolução.
          </p>
          <a
            href={whatsappLink(
              "Olá, Patrick! Quero saber mais sobre o acompanhamento presencial."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Ver planos e horários disponíveis
          </a>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid presencial__grid">
            <div className="card">
              <h3>Como funciona</h3>
              <p className="muted">
                Os treinos acontecem presencialmente em {site.cidade}, com
                planejamento individual de força, potência e resistência, igual à
                consultoria online — porém com acompanhamento ao vivo em cada sessão.
              </p>
            </div>
            <div className="card">
              <h3>Planos e horários</h3>
              <p className="muted">
                Os valores variam de acordo com a frequência semanal e o horário
                escolhido. Fale comigo pelo WhatsApp para verificar disponibilidade de
                agenda e receber sua proposta.
              </p>
              <a
                href={whatsappLink(
                  "Olá, Patrick! Quero saber os planos e horários do presencial."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost presencial__link"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          padding: 64px 0 48px;
          border-bottom: 1px solid var(--line);
        }
        .page-hero__lead {
          max-width: 620px;
          margin: 16px 0 28px;
          font-size: 1.05rem;
        }
        .presencial__grid {
          grid-template-columns: 1fr;
        }
        .presencial__link { margin-top: 20px; }
        @media (min-width: 700px) {
          .presencial__grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}
