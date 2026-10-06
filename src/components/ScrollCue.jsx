export default function ScrollCue({ label }) {
  return (
    <div className="scroll-cue" role="presentation">
      {label && <span className="scroll-cue__label muted">{label}</span>}
      <svg
        className="scroll-cue__arrow"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>

      <style>{`
        .scroll-cue {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .scroll-cue__label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .scroll-cue__arrow {
          color: var(--accent);
          animation: scroll-cue-bounce 1.8s ease-in-out infinite;
        }
        @keyframes scroll-cue-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
