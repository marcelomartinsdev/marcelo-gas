import Logo from "@/components/ui/Logo";

export default function OpeningIntro() {
  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-topline">
        <span>DESPACHO LOCAL</span>
        <strong>POÇÕES / BA</strong>
      </div>
      <div className="intro-city" />
      <svg className="intro-route" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <path className="intro-route-teal" d="M-120 642C230 710 386 456 676 512s418 186 672 5 330-164 454-133" />
        <path className="intro-route-orange" d="M-120 682C244 748 408 501 692 551s412 171 665 0 328-155 450-127" />
      </svg>
      <div className="intro-trail"><i /><i /><i /><i /></div>
      <div className="intro-courier"><div className="intro-suspension"><CourierSvg /></div></div>
      <div className="intro-brand"><Logo priority className="intro-logo" /><span>Seu gás, direto no WhatsApp.</span></div>
      <div className="intro-wipe intro-wipe-orange" />
      <div className="intro-wipe intro-wipe-teal" />
    </div>
  );
}

function CourierSvg() {
  return (
    <svg className="courier-svg" viewBox="0 0 680 310" role="img" aria-label="Entregador levando um botijão de gás preso à motocicleta">
      <defs>
        <linearGradient id="marcelo-bike" x1="230" x2="520" y1="120" y2="242" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14b8c5" /><stop offset=".52" stopColor="#087487" /><stop offset="1" stopColor="#063a4b" />
        </linearGradient>
        <linearGradient id="marcelo-metal" x1="92" x2="195" y1="54" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" /><stop offset=".22" stopColor="#9ca4a6" /><stop offset=".5" stopColor="#eef0ef" /><stop offset="1" stopColor="#555d60" />
        </linearGradient>
        <filter id="marcelo-shadow" x="-20%" y="-30%" width="150%" height="190%">
          <feDropShadow dx="0" dy="16" stdDeviation="10" floodColor="#00191e" floodOpacity=".58" />
        </filter>
      </defs>
      <g className="courier-speed-lines"><path d="M8 136h116"/><path d="M39 171h142"/><path d="M67 99h96"/></g>
      <g filter="url(#marcelo-shadow)">
        <ellipse cx="371" cy="267" rx="244" ry="19" fill="#00191e" opacity=".44" />
        <Wheel cx={218} /><Wheel cx={518} />
        <g className="courier-cylinder">
          <path d="M104 73c0-17 13-30 30-30h38c17 0 30 13 30 30v123c0 20-16 36-36 36h-26c-20 0-36-16-36-36V73Z" fill="url(#marcelo-metal)" stroke="#273235" strokeWidth="4" />
          <path d="M130 45V27h47v18" fill="none" stroke="#f5f7f7" strokeWidth="12" strokeLinecap="round" />
          <path d="M111 100h84M111 184h84" stroke="#394447" strokeWidth="5" opacity=".55" />
          <path d="m113 91 95 100M194 91l22 106" stroke="#f15a24" strokeWidth="9" strokeLinecap="round" opacity=".92" />
          <path d="M115 232h76" stroke="#111719" strokeWidth="10" strokeLinecap="round" />
          <path d="M154 113c-4 12-16 19-17 31-1 11 7 20 18 20 12 0 20-9 20-20 0-8-5-14-10-21 0 7-2 11-7 14 2-10-1-18-4-24Z" fill="#ff7417" />
        </g>
        <path d="M199 236h94l64-72h112l52 72" fill="none" stroke="#e7edeb" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m265 229 54-114h94l60 105-90 18Z" fill="url(#marcelo-bike)" />
        <path d="M314 120c39-18 89-17 126 3l-10 23H304Z" fill="#0a171a" />
        <path d="m460 194 38-103 45-5" fill="none" stroke="#e7edeb" strokeWidth="13" strokeLinecap="round" />
        <path d="M538 86h52" stroke="#ff7b1b" strokeWidth="10" strokeLinecap="round" />
        <path d="M479 194c37 2 68 16 89 43" fill="none" stroke="#e7edeb" strokeWidth="10" strokeLinecap="round" />
        <path d="M547 215h60" stroke="#ff7b1b" strokeWidth="11" strokeLinecap="round" />
        <g className="courier-rider">
          <path d="m381 132 70 49m-2-2 55-64" fill="none" stroke="#bd7f5e" strokeWidth="14" strokeLinecap="round" />
          <path d="m371 143-46 74-40 12m115-56 39 55h48" fill="none" stroke="#111719" strokeWidth="17" strokeLinecap="round" />
          <path d="M322 139c12-41 41-64 78-57 32 6 53 33 54 68-43 16-88 13-132-11Z" fill="#ef5a24" />
          <path d="M343 91c22-24 57-26 82-8 17 13 25 35 19 55l-39-4-62-43Z" fill="#1e2729" />
          <path d="M355 82c21-22 52-24 75-7 16 11 23 28 22 46-32 4-64-9-97-39Z" fill="#073f50" />
          <path d="M403 77c25 4 43 23 47 47l-42-4c-11-17-12-32-5-43Z" fill="#d9f3f5" />
          <path d="M352 101c23 19 54 29 93 29" fill="none" stroke="#ff9d21" strokeWidth="5" strokeLinecap="round" />
          <path d="M333 141c31 19 72 23 120 9" fill="none" stroke="#fff" strokeWidth="5" opacity=".72" />
        </g>
      </g>
    </svg>
  );
}

function Wheel({ cx }: { cx: number }) {
  return (
    <g className="courier-wheel">
      <circle cx={cx} cy="241" r="53" fill="#071012" />
      <circle cx={cx} cy="241" r="39" fill="#172326" stroke="#dce4e2" strokeWidth="7" />
      <circle cx={cx} cy="241" r="9" fill="#ff7117" />
      <path d={`M${cx} 202v78M${cx - 39} 241h78M${cx - 28} 213l56 56M${cx + 28} 213l-56 56`} stroke="#778184" strokeWidth="3" />
    </g>
  );
}
