import { formatBRL } from "../data/site.js";

export default function PricingTable({ planos }) {
  return (
    <div className="pricing">
      <table>
        <thead>
          <tr>
            <th>Plano</th>
            <th>Valor total</th>
            <th>Equivalente mensal</th>
          </tr>
        </thead>
        <tbody>
          {planos.map((p) => (
            <tr key={p.plano} className={p.plano === "Anual" ? "is-best" : undefined}>
              <td data-label="Plano">
                {p.plano}
                {p.plano === "Anual" && <span className="pricing__tag">melhor custo</span>}
              </td>
              <td data-label="Valor total" className="mono">{formatBRL(p.total)}</td>
              <td data-label="Equivalente mensal" className="mono">{formatBRL(p.mensal)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .pricing table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .pricing th:nth-child(1), .pricing td:nth-child(1) { width: 34%; }
        .pricing th:nth-child(2), .pricing td:nth-child(2) { width: 33%; }
        .pricing th:nth-child(3), .pricing td:nth-child(3) { width: 33%; }
        .pricing thead th {
          text-align: left;
          font-family: var(--font-display);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: var(--muted-dark);
          padding: 12px 12px;
          border-bottom: 1px solid var(--line-dark);
          overflow-wrap: break-word;
        }
        .pricing tbody td {
          padding: 14px 12px;
          border-bottom: 1px solid var(--line-dark);
          overflow-wrap: break-word;
        }
        .pricing tbody tr.is-best {
          background: rgba(47, 111, 237, 0.07);
        }
        .pricing .mono {
          font-family: var(--font-mono);
          white-space: nowrap;
        }
        .pricing__tag {
          display: inline-block;
          margin-left: 10px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          color: #fff;
          background: var(--accent);
          padding: 3px 8px;
          border-radius: 999px;
        }

        @media (max-width: 460px) {
          .pricing table { font-size: 0.8rem; }
          .pricing thead th {
            font-size: 0.6rem;
            padding: 8px 6px;
            letter-spacing: 0.03em;
          }
          .pricing tbody td {
            padding: 10px 6px;
          }
          .pricing .mono { font-size: 0.78rem; }
          .pricing__tag {
            display: block;
            margin: 6px 0 0;
            width: fit-content;
          }
        }
      `}</style>
    </div>
  );
}
