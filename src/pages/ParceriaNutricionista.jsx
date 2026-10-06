import { nutricionistaParceiro, whatsappLink } from "../data/site.js";

function InstagramIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.28a9.9 9.9 0 0 0 4.72 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.1c-.25.7-1.24 1.28-2.03 1.44-.55.11-1.26.2-3.65-.78-3.06-1.27-5.03-4.36-5.19-4.57-.15-.2-1.24-1.65-1.24-3.15s.78-2.23 1.06-2.54c.28-.3.6-.38.8-.38h.58c.19 0 .44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.28.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.75-.17 1.44Z" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function ParceriaNutricionista() {
  const nutri = nutricionistaParceiro;
  const nutriWhatsapp = nutri.contato.whatsappNumero
    ? whatsappLink(
        `Olá, ${nutri.nome}! Sou aluno(a) do Patrick e quero saber mais sobre a consultoria com o desconto de aluno.`,
        nutri.contato.whatsappNumero
      )
    : null;
  const nutriInstagram = nutri.contato.instagram
    ? `https://instagram.com/${nutri.contato.instagram.replace("@", "")}`
    : null;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Serviço</p>
          <h1>Parceria com Nutricionista Esportivo</h1>
          <p className="muted page-hero__lead">
            Treino e nutrição andando juntos. Em parceria com um nutricionista
            esportivo, alinho seu treinamento à sua estratégia alimentar para que
            nenhuma das duas partes trave o seu resultado.
          </p>
          <a
            href={
              nutriWhatsapp ||
              whatsappLink(
                "Olá, Patrick! Quero saber mais sobre a parceria com nutricionista."
              )
            }
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Quero saber mais
          </a>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid nutri__grid">
            <div className="card">
              <h3>Por que treino e nutrição juntos?</h3>
              <p className="muted">
                De nada adianta um treino bem estruturado se a alimentação não
                acompanha o objetivo — e vice-versa. Por isso, meus alunos têm acesso a
                uma parceria direta com um nutricionista esportivo, garantindo que o
                plano alimentar converse com a periodização do treino em cada fase.
              </p>
            </div>

            <div className="card nutri-card">
              <p className="eyebrow">Nutricionista parceiro</p>

              <div className="nutri-card__profile">
                <div className="nutri-card__avatar">
                  <img
                    src={nutri.foto}
                    alt={nutri.nome}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  <span className="nutri-card__avatar-fallback">
                    <UserIcon />
                  </span>
                </div>
                <div>
                  <h3 className="nutri-card__name">{nutri.nome}</h3>
                  <p className="muted nutri-card__formacao">{nutri.formacao}</p>
                </div>
              </div>

              <div className="nutri-card__discount">
                <span className="nutri-card__discount-dot" />
                {nutri.descontoTexto}
              </div>

              <div className="nutri-card__social">
                {nutriInstagram ? (
                  <a
                    href={nutriInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram de ${nutri.nome}`}
                    className="nutri-card__icon-link"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                ) : (
                  <span className="nutri-card__icon-link nutri-card__icon-link--disabled">
                    <InstagramIcon />
                    <span>a definir</span>
                  </span>
                )}

                {nutriWhatsapp ? (
                  <a
                    href={nutriWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar com ${nutri.nome} no WhatsApp`}
                    className="nutri-card__icon-link"
                  >
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </a>
                ) : (
                  <span className="nutri-card__icon-link nutri-card__icon-link--disabled">
                    <WhatsAppIcon />
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
        .nutri__grid {
          grid-template-columns: 1fr;
        }

        .nutri-card__profile {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 10px;
        }
        .nutri-card__avatar {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: var(--surface);
          border: 2px solid var(--accent);
        }
        .nutri-card__avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .nutri-card__avatar-fallback {
          display: none;
          align-items: center;
          justify-content: center;
          position: absolute;
          inset: 0;
          background: rgba(47, 111, 237, 0.08);
          color: var(--accent);
        }
        .nutri-card__name {
          margin: 0;
        }
        .nutri-card__formacao {
          margin: 2px 0 0;
        }

        .nutri-card__discount {
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
        .nutri-card__discount-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .nutri-card__crn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-top: 1px solid var(--line-dark);
          border-bottom: 1px solid var(--line-dark);
          font-size: 0.9rem;
        }
        .nutri-card__crn span {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nutri-card__social {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }
        .nutri-card__icon-link {
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
        .nutri-card__icon-link:hover {
          border-color: var(--accent);
          background: rgba(47, 111, 237, 0.06);
        }
        .nutri-card__icon-link--disabled {
          color: var(--muted-dark);
          cursor: default;
        }
        .nutri-card__icon-link--disabled:hover {
          border-color: var(--line-dark);
          background: none;
        }

        @media (min-width: 900px) {
          .nutri__grid { grid-template-columns: 1fr 1fr; align-items: start; }
        }
      `}</style>
    </>
  );
}
