"use client";

import { useEffect, useRef } from "react";

const ROUTE_PATH = "M45 325C176 337 180 92 340 128s214 246 365 150 78-239 163-235";
const VIEWBOX_WIDTH = 900;
const VIEWBOX_HEIGHT = 420;
const RIDE_DURATION = 9000;
const STATIC_PROGRESS = 0.53;

export default function RouteJourney() {
  const mapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const bikeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = mapRef.current;
    const path = pathRef.current;
    const bike = bikeRef.current;
    if (!map || !path || !bike) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pathLength = path.getTotalLength();
    let frame = 0;
    let startedAt = performance.now();

    const placeBike = (progress: number, opacity = 1) => {
      const distance = pathLength * progress;
      const point = path.getPointAtLength(distance);
      const previous = path.getPointAtLength(Math.max(0, distance - 2));
      const next = path.getPointAtLength(Math.min(pathLength, distance + 2));
      const width = map.clientWidth;
      const height = map.clientHeight;
      const x = (point.x / VIEWBOX_WIDTH) * width;
      const y = (point.y / VIEWBOX_HEIGHT) * height;
      const deltaX = ((next.x - previous.x) / VIEWBOX_WIDTH) * width;
      const deltaY = ((next.y - previous.y) / VIEWBOX_HEIGHT) * height;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      bike.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${angle}deg)`;
      bike.style.opacity = String(opacity);
      bike.style.visibility = "visible";
    };

    const ride = (now: number) => {
      const cycle = ((now - startedAt) % RIDE_DURATION) / RIDE_DURATION;
      const progress = cycle < 0.84 ? cycle / 0.84 : 1;
      const opacity = cycle < 0.045
        ? cycle / 0.045
        : cycle > 0.94
          ? (1 - cycle) / 0.06
          : 1;

      placeBike(progress, Math.max(0, Math.min(1, opacity)));
      frame = window.requestAnimationFrame(ride);
    };

    const applyMotionPreference = () => {
      window.cancelAnimationFrame(frame);
      if (motionPreference.matches) {
        placeBike(STATIC_PROGRESS);
        return;
      }
      startedAt = performance.now();
      frame = window.requestAnimationFrame(ride);
    };

    const resizeObserver = new ResizeObserver(() => {
      if (motionPreference.matches) placeBike(STATIC_PROGRESS);
    });

    resizeObserver.observe(map);
    motionPreference.addEventListener("change", applyMotionPreference);
    applyMotionPreference();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      motionPreference.removeEventListener("change", applyMotionPreference);
    };
  }, []);

  return (
    <div ref={mapRef} className="route-map" aria-label="Ilustração da rota entre o Marcelo Gás e a casa do cliente">
      <svg viewBox="0 0 900 420" preserveAspectRatio="none" role="img" aria-label="Rota ilustrada entre o Marcelo Gás e a casa do cliente">
        <title>Rota ilustrada entre o Marcelo Gás e a casa do cliente</title>
        <path className="route-shadow" d={ROUTE_PATH} />
        <path ref={pathRef} className="route-line" d={ROUTE_PATH} />
      </svg>

      <div className="route-stop route-origin">
        <i aria-hidden="true" />
        <div className="route-point"><span>Marcelo Gás</span><small>Rua Um, 121</small></div>
      </div>

      <div ref={bikeRef} className="route-bike" aria-hidden="true"><BikeMini /></div>

      <div className="route-stop route-destination">
        <i aria-hidden="true" />
        <div className="route-point"><span>Sua casa</span><small>Endereço a confirmar</small></div>
      </div>
    </div>
  );
}

function BikeMini() {
  return (
    <svg viewBox="0 0 110 58" aria-hidden="true">
      <circle cx="25" cy="45" r="12" /><circle cx="84" cy="45" r="12" />
      <path d="M25 45h23l14-20h14l8 20M48 45l-8-24h22" />
      <path className="bike-mini-body" d="m43 40 11-22h22l10 21-22 5Z" />
      <path d="M61 20c1-11 8-17 18-15 9 2 14 9 13 18-13 4-23 3-31-3Z" />
    </svg>
  );
}
