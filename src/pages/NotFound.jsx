import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <p className="eyebrow">Erro 404</p>
        <h1>Essa página não existe</h1>
        <p className="muted">O endereço que você tentou acessar não foi encontrado.</p>
        <Link to="/" className="btn btn--primary">
          Voltar para o início
        </Link>
      </div>
      <style>{`
        .notfound { text-align: center; padding: 140px 0; }
      `}</style>
    </section>
  );
}
