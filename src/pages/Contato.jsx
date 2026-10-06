import { site, whatsappLink } from "../data/site.js";

export default function Contato() {
  return (
    <section className="section contato">
      <div className="container">
        <p className="eyebrow">Fale comigo</p>
        <h1>Contato</h1>
        <p className="muted contato__lead">
          Está com alguma dúvida, quer agendar sua consultoria ou apenas bater um papo
          sobre treinos? Entre em contato pelos canais abaixo.
        </p>

        <div className="grid contato__grid">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="card contato__item"
          >
            <span className="eyebrow">WhatsApp</span>
            <strong>Conversar agora</strong>
            <span className="muted">Resposta rápida, direto no seu celular.</span>
          </a>

          <a href={`mailto:${site.contato.email}`} className="card contato__item">
            <span className="eyebrow">E-mail</span>
            <strong>{site.contato.email}</strong>
            <span className="muted">Para propostas e assuntos mais formais.</span>
          </a>

          <a
            href={`https://instagram.com/${site.contato.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card contato__item"
          >
            <span className="eyebrow">Instagram</span>
            <strong>{site.contato.instagram}</strong>
            <span className="muted">Bastidores dos treinos e resultados.</span>
          </a>
        </div>

        <p className="muted contato__footer">Estou sempre por aqui e responderei o mais rápido possível.</p>
      </div>

      <style>{`
        .contato__lead { max-width: 560px; margin: 16px 0 40px; }
        .contato__grid { grid-template-columns: 1fr; }
        .contato__item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .contato__item:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .contato__item strong { font-size: 1.1rem; }
        .contato__footer { margin-top: 32px; font-size: 0.9rem; }
        @media (min-width: 760px) {
          .contato__grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
