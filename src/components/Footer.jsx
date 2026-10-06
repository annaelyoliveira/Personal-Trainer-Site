import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/images/logo-light.png" alt="Logo Patrick Lira" width="40" height="48" />
          <div>
            <strong>{site.nome}</strong>
            <span className="muted"> · {site.cargo}</span>
          </div>
        </div>

        <div className="footer__meta">
          <span className="muted">{site.cidade}</span>
          <span className="footer__dot" />
          <span className="muted">{site.cref}</span>
        </div>

        <div className="footer__copy muted">
          © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--line);
          padding: 40px 0;
          background: var(--bg);
        }
        .footer__inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }
        .footer__brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .footer__meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .footer__dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--muted);
        }
        .footer__copy {
          font-size: 0.8rem;
        }
        @media (min-width: 700px) {
          .footer__inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </footer>
  );
}
