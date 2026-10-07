import { Link } from "react-router-dom";
import { servicos, site } from "../data/site.js";
import ScrollCue from "../components/ScrollCue.jsx";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <img
            src="/images/logo-dark.png"
            alt="Logo Patrick Lira - hexágono com seta ascendente"
            className="hero__logo"
            width="120"
            height="145"
          />
          <p className="eyebrow">Preparador Físico · {site.cidade}</p>
          <h1 className="hero__title">
            Treine com estratégia.
            <br />
            Evolua com consistência.
          </h1>
          <p className="hero__lead muted">
            Sou {site.nome}, treinador, atleta e apaixonado por ajudar pessoas a
            alcançarem seus objetivos com estratégia, clareza e resultado. Este é o meu
            espaço pessoal, com tudo sobre minha consultoria e soluções pensadas para
            quem quer evoluir com consistência.
          </p>
          <div className="hero__actions">
            <Link to="/consultoria-online" className="btn btn--primary">
              Começar consultoria online
            </Link>
            <Link to="/contato" className="btn btn--ghost">
              Falar com Patrick
            </Link>
          </div>
          <div className="hero__scroll-cue">
            <ScrollCue />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section" id="servicos">
        <div className="container">
          <p className="eyebrow">O que eu ofereço</p>
          <h2>Escolha seu caminho</h2>
          <div className="grid services__grid">
            {servicos.map((s) => (
              <Link key={s.id} to={s.slug} className="card service-card">
                <h3>{s.titulo}</h3>
                <p className="muted">{s.resumo}</p>
                <span className="service-card__cta">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section section--alt" id="resultados">
        <div className="container">
          <div className="resultados__cue">
            <ScrollCue />
          </div>
          <p className="eyebrow">Resultados reais</p>
          <h2>Quem treina comigo, evolui</h2>
          <p className="muted results__intro">
            Uma amostra de resultados de alunos acompanhados na consultoria e no
            presencial.
          </p>

          {/*
            COMO ADICIONAR SUAS FOTOS:
            1. Coloque os arquivos em /public/images/resultados/
               (ex: cliente-01.jpg, cliente-02.jpg, patrick-01.jpg)
            2. Adicione um item no array abaixo com o caminho e a legenda.
          */}
          <div className="grid results__grid">
            {[
              { src: "/images/resultados/cliente-01.jpeg", legenda: "Resultado de aluno(a)" },
              { src: "/images/resultados/cliente-02.jpeg", legenda: "Resultado de aluno(a)" },
              { src: "/images/resultados/patrick-01.jpeg", legenda: site.nome },
            ].map((foto, i) => (
              <div className="result-photo" key={i}>
                <div className="result-photo__frame">
                  <img
                    src={foto.src}
                    alt={foto.legenda}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.querySelector(".result-photo__placeholder").style.display = "flex";
                    }}
                  />
                  <div className="result-photo__placeholder" style={{ display: "none" }}>
                    Adicione a foto em
                    <code>{foto.src}</code>
                  </div>
                </div>
                <p className="muted result-photo__caption">{foto.legenda}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          padding: 88px 0 96px;
          background:
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(47,111,237,0.16), transparent 60%),
            var(--bg);
          border-bottom: 1px solid var(--line);
          text-align: center;
        }
        .hero__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero__logo {
          height: 96px;
          width: auto;
          margin-bottom: 28px;
        }
        .hero__title {
          font-size: clamp(2.2rem, 6vw, 3.6rem);
          max-width: 760px;
        }
        .hero__lead {
          max-width: 560px;
          font-size: 1.05rem;
          margin-top: 16px;
        }
        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-top: 32px;
        }
        .hero__scroll-cue {
          margin-top: 56px;
        }

        .resultados__cue {
          display: flex;
          justify-content: center;
          margin-bottom: 28px;
        }

        .services__grid {
          margin-top: 40px;
          grid-template-columns: 1fr;
        }
        .service-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .service-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .service-card__cta {
          margin-top: 12px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent);
        }

        .results__intro { max-width: 520px; margin-top: 12px; }
        .results__grid {
          margin-top: 40px;
          grid-template-columns: 1fr;
        }
        .result-photo__frame {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: var(--radius);
          overflow: hidden;
          background: #1c1e27;
          border: 1px solid var(--line);
        }
        .result-photo__frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .result-photo__placeholder {
          position: absolute;
          inset: 0;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 16px;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
          background: rgba(15, 21, 30, 0.85);
          z-index: 1;
        }
        .result-photo__placeholder code {
          color: var(--accent);
          word-break: break-all;
        }
        .result-photo__caption {
          margin-top: 10px;
          font-size: 0.85rem;
        }

        @media (min-width: 700px) {
          .services__grid { grid-template-columns: repeat(2, 1fr); }
          .results__grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 1040px) {
          .services__grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </>
  );
}
