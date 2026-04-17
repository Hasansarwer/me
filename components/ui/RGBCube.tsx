import styles from "./RGBCube.module.css";

const S = 160;

const faces = [
  // front  (z+, Blue=1): TL=Cyan, TR=White, BL=Blue, BR=Magenta
  { id: "front",  tf: `translateZ(${S / 2}px)`,                 tl: "#00ffff", tr: "#ffffff", bl: "#0000ff", br: "#ff00ff" },
  // back   (z−, Blue=0): X is mirrored after rotateY(180)
  { id: "back",   tf: `rotateY(180deg) translateZ(${S / 2}px)`, tl: "#ffff00", tr: "#00ff00", bl: "#ff0000", br: "#000000" },
  // left   (x−, Red=0)
  { id: "left",   tf: `rotateY(-90deg) translateZ(${S / 2}px)`, tl: "#00ff00", tr: "#00ffff", bl: "#000000", br: "#0000ff" },
  // right  (x+, Red=1)
  { id: "right",  tf: `rotateY(90deg) translateZ(${S / 2}px)`,  tl: "#ffffff", tr: "#ffff00", bl: "#ff00ff", br: "#ff0000" },
  // top    (y−, Green=1)
  { id: "top",    tf: `rotateX(90deg) translateZ(${S / 2}px)`,  tl: "#00ff00", tr: "#ffff00", bl: "#00ffff", br: "#ffffff" },
  // bottom (y+, Green=0)
  { id: "bottom", tf: `rotateX(-90deg) translateZ(${S / 2}px)`, tl: "#000000", tr: "#ff0000", bl: "#0000ff", br: "#ff00ff" },
] as const;

function gradient(tl: string, tr: string, bl: string, br: string) {
  return [
    `linear-gradient(to bottom right, ${tl} 0%, transparent 70%)`,
    `linear-gradient(to bottom left,  ${tr} 0%, transparent 70%)`,
    `linear-gradient(to top right,    ${bl} 0%, transparent 70%)`,
    `linear-gradient(to top left,     ${br} 0%, transparent 70%)`,
  ].join(", ");
}

export function RGBCube({ className }: { className?: string }) {
  return (
    <div className={`${styles.wrapper} ${className ?? ""}`} aria-hidden="true">
      <div className={styles.scene}>
        <div className={styles.cube}>
          {faces.map((f) => (
            <div
              key={f.id}
              className={styles.face}
              style={{
                transform: f.tf,
                backgroundImage: gradient(f.tl, f.tr, f.bl, f.br),
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.shadow} />
    </div>
  );
}
