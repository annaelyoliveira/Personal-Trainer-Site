import { whatsappLink } from "../data/site.js";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Conversar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.28a9.9 9.9 0 0 0 4.72 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.1c-.25.7-1.24 1.28-2.03 1.44-.55.11-1.26.2-3.65-.78-3.06-1.27-5.03-4.36-5.19-4.57-.15-.2-1.24-1.65-1.24-3.15s.78-2.23 1.06-2.54c.28-.3.6-.38.8-.38h.58c.19 0 .44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.28.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.75-.17 1.44Z" />
      </svg>

      <style>{`
        .wa-fab {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          color: #0e0f13;
          box-shadow: 0 6px 20px rgba(0,0,0,0.35);
          transition: transform 0.15s ease;
        }
        .wa-fab:hover { transform: translateY(-2px) scale(1.04); }
      `}</style>
    </a>
  );
}
