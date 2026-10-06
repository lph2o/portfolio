"use client";

import { useEffect, useState } from "react";

export function Mascot() {
  const [frame, setFrame] = useState("center");
  const [reaction, setReaction] = useState(false);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      const horizontal = x < -0.18 ? "left" : x > 0.18 ? "right" : "center";
      const vertical = y < -0.18 ? "up" : y > 0.18 ? "down" : "center";
      setFrame(`${vertical}-${horizontal}`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <button
      className={`mascot ${reaction ? "is-reacting" : ""}`}
      type="button"
      aria-label="Interact with the portfolio mascot"
      onClick={() => {
        setReaction(true);
        window.setTimeout(() => setReaction(false), 900);
      }}
    >
      <span className={`mascot-sprite mascot-${frame}`} aria-hidden="true" />
      <span className="mascot-shadow" aria-hidden="true" />
      <span className="mascot-hint">say hello</span>
    </button>
  );
}
