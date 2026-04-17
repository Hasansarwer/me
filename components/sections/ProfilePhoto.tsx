import styles from "./ProfilePhoto.module.css";

export function ProfilePhoto() {
  return (
    <div className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className={styles.svg}
      >
        <defs>
          <clipPath id="photo-clip">
            <circle cx="200" cy="200" r="150" />
          </clipPath>
        </defs>

        <path
          id="motionPath"
          d="M 45,200 a 155,155 0 1,0 310,0 a 155,155 0 1,0 -310,0"
          fill="transparent"
        />

        <circle cx="200" cy="200" r="190" fill="var(--color-background)" />
         {/* Color wheel donut ring */}
        {Array.from({ length: 6 }, (_, i) => {
          const r = 175;
          const gap = 0;
          const a1 = ((i * 60 + gap) - 90) * Math.PI / 180;
          const a2 = (((i + 1) * 60 - gap) - 90) * Math.PI / 180;
          const x1 = 200 + r * Math.cos(a1);
          const y1 = 200 + r * Math.sin(a1);
          const x2 = 200 + r * Math.cos(a2);
          const y2 = 200 + r * Math.sin(a2);
          return (
            <path
              key={`donut-${i}`}
              d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
              fill="none"
              stroke={`hsl(${i * 60}, 80%, 50%)`}
              strokeWidth="25"
              strokeLinecap="round"
            />
          );
        })}


        {Array.from({ length: 40 }, (_, i) => {
          
          return (
            <circle key={i} r="10" fill={"hsl(" + (i * 9) + ", 100%, 50%)"} stroke="gold" strokeWidth="2">
              <animateMotion
                dur="10s"
                begin={`${-i * 90/360}s`}
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#motionPath" />
              </animateMotion>
            </circle>
          );
        })}

       

        <image
          href="/images/Hasan_Sarwer.webp"
          x="45"
          y="50"
          width="300"
          height="300"
          clipPath="url(#photo-clip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}
