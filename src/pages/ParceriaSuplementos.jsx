import { parceriaSuplementos, whatsappLink } from "../data/site.js";
import { IconInstagram, IconWhatsApp, IconTag } from "../components/Icons.jsx";

export default function ParceriaSuplementos() {
  const parceiro = parceriaSuplementos;
  const parceiroWhatsapp = parceiro.contato.whatsappNumero
    ? whatsappLink(
        `Olá! Sou aluno(a) do Patrick Lira e quero saber mais sobre o desconto em suplementos.`,
        parceiro.contato.whatsappNumero
      )
    : null;
  const parceiroInstagram = parceiro.contato.instagram
    ? `https://instagram.com/${parceiro.contato.instagram.replace("@", "")}`
    : null;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Serviço</p>
          <h1>Desconto em Suplementos</h1>
          <p className="muted page-hero__lead">
            Em parceria com a <strong>{parceiro.nome}</strong>, meus alunos têm
            condição especial na hora de comprar os suplementos que entram no
            protocolo de treino — whey, creatina, pré-treino e o que mais fizer
            parte da sua estratégia.
          </p>
          {parceiroInstagram && (
            <a
              href={parceiroInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Ver Instagram da {parceiro.nome}
            </a>
          )}
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid supl__grid">
            <div className="card">
              <h3>Por que comprar com um parceiro?</h3>
              <p className="muted">
                Suplementação é parte da estratégia, não um detalhe. Ter um
                fornecedor parceiro significa preço especial para quem treina
                comigo e mais confiança na procedência do que você está
                consumindo.
              </p>
            </div>

            <div className="card supl-card">
              <p className="eyebrow">Parceiro</p>

              <div className="supl-card__profile">
                <div className="supl-card__avatar">
                  <img
                    src={parceiro.foto}
                    alt={parceiro.nome}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  <span className="supl-card__avatar-fallback">
                    <IconTag />
                  </span>
                </div>
                <div>
                  <h3 className="supl-card__name">{parceiro.nome}</h3>
                  <p className="muted supl-card__sub">Suplementos esportivos</p>
                </div>
              </div>

              {parceiro.descontoTexto && (
                <div className="supl-card__discount">
                  <span className="supl-card__discount-dot" />
                  {parceiro.descontoTexto}
                </div>
              )}

              <div className="supl-card__social">
                {parceiroInstagram ? (
                  <a
                    href={parceiroInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram da ${parceiro.nome}`}
                    className="supl-card__icon-link"
                  >
                    <IconInstagram />
                    <span>Instagram</span>
                  </a>
                ) : (
                  <span className="supl-card__icon-link supl-card__icon-link--disabled">
                    <IconInstagram />
                    <span>a definir</span>
                  </span>
                )}

                {parceiroWhatsapp ? (
                  <a
                    href={parceiroWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar com ${parceiro.nome} no WhatsApp`}
                    className="supl-card__icon-link"
                  >
                    <IconWhatsApp />
                    <span>WhatsApp</span>
                  </a>
                ) : (
                  <span className="supl-card__icon-link supl-card__icon-link--disabled">
                    <IconWhatsApp />
                    <span>a definir</span>
                  </span>
                )}
              </div>
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
        .supl__grid {
          grid-template-columns: 1fr;
        }

        .supl-card__profile {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 10px;
        }
        .supl-card__avatar {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: var(--surface);
          border: 2px solid var(--accent);
        }
        .supl-card__avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .supl-card__avatar-fallback {
          display: none;
          align-items: center;
          justify-content: center;
          position: absolute;
          inset: 0;
          background: rgba(47, 111, 237, 0.08);
          color: var(--accent);
        }
        .supl-card__name {
          margin: 0;
        }
        .supl-card__sub {
          margin: 2px 0 0;
        }

        .supl-card__discount {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 20px 0;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--accent);
          background: rgba(47, 111, 237, 0.08);
          border: 1px solid rgba(47, 111, 237, 0.25);
          padding: 10px 14px;
          border-radius: var(--radius);
        }
        .supl-card__discount-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .supl-card__social {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .supl-card__icon-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: center;
          padding: 10px 12px;
          border-radius: var(--radius);
          border: 1px solid var(--line-dark);
          color: var(--accent);
          font-size: 0.82rem;
          font-weight: 500;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .supl-card__icon-link:hover {
          border-color: var(--accent);
          background: rgba(47, 111, 237, 0.06);
        }
        .supl-card__icon-link--disabled {
          color: var(--muted-dark);
          cursor: default;
        }
        .supl-card__icon-link--disabled:hover {
          border-color: var(--line-dark);
          background: none;
        }

        @media (min-width: 900px) {
          .supl__grid { grid-template-columns: 1fr 1fr; align-items: start; }
        }
      `}</style>
    </>
  );
}