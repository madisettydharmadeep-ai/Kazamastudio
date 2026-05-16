export default function PortfolioStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Playfair+Display:ital,wght@0,600;1,500&display=swap");
          .serif-display { font-family: "Cormorant Garamond", Georgia, serif; }
          .brand-script { font-family: "Playfair Display", Georgia, serif; font-style: italic; }
          @keyframes floaty { 0%, 100% { transform: translateY(0) rotate(-7deg); } 50% { transform: translateY(-14px) rotate(-3deg); } }
          @keyframes drift { from { background-position: 0 0, 0 0; } to { background-position: 220px 120px, -180px 80px; } }
          @keyframes pixel-place {
            0% { opacity: 0; transform: translate3d(var(--x), var(--y), 0) scale(0.65); }
            48% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
            100% { opacity: 0; transform: translate3d(0, 0, 0) scale(1.15); }
          }
          @keyframes loader-away {
            0%, 72% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
          }
          @keyframes page-rise {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -3px;
            height: 2px;
            background: currentColor;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 260ms ease;
          }
          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
          .pixel-loader { animation: loader-away 1.45s ease forwards; }
          .pixel-dot {
            animation: pixel-place 1.18s cubic-bezier(.22, 1, .36, 1) forwards;
            animation-delay: var(--delay);
          }
          .page-shell {
            animation: page-rise 560ms ease both;
            animation-delay: 980ms;
          }
        `,
      }}
    />
  );
}
