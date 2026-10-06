import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/consultoria-online", label: "Consultoria Online" },
  { to: "/acompanhamento-presencial", label: "Acompanhamento Presencial" },
  { to: "/parceria-nutricionista", label: "Parceria Nutricionista" },
  { to: "/parceria-suplementos", label: "Suplementos" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // fecha o menu ao trocar de página
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Página inicial - Patrick Lira">
          <img src="/images/logo-light.png" alt="" width="34" height="41" />
          <span>
            PATRICK <strong>LIRA</strong>
          </span>
        </Link>

        <nav className="navbar__links navbar__links--desktop" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="navbar__burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__links--mobile ${open ? "is-open" : ""}`}
        aria-label="Navegação mobile"
      >
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(14, 15, 19, 0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .navbar__brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 600;
          letter-spacing: 0.04em;
          font-size: 1rem;
        }
        .navbar__brand strong { color: var(--accent); }

        .navbar__links--desktop {
          display: none;
          gap: 28px;
          font-family: var(--font-display);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .navbar__links--desktop a {
          padding: 6px 0;
          border-bottom: 2px solid transparent;
          color: var(--muted);
        }
        .navbar__links--desktop a:hover,
        .navbar__links--desktop a.is-active {
          color: var(--text);
          border-bottom-color: var(--accent);
        }

        .navbar__burger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .navbar__burger span {
          width: 22px;
          height: 2px;
          background: var(--text);
        }

        .navbar__links--mobile {
          display: none;
          flex-direction: column;
          border-top: 1px solid var(--line);
          background: var(--bg);
        }
        .navbar__links--mobile.is-open {
          display: flex;
        }
        .navbar__links--mobile a {
          padding: 16px 24px;
          border-bottom: 1px solid var(--line);
          font-family: var(--font-display);
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          color: var(--muted);
        }
        .navbar__links--mobile a.is-active { color: var(--accent); }

        @media (min-width: 860px) {
          .navbar__links--desktop { display: flex; }
          .navbar__burger { display: none; }
          .navbar__links--mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
