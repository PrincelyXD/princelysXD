import React, { ReactNode, useRef } from "react";
type CardProps = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

type CardProps2 = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

const GlowCard = ({
  card,
  children,
  index,
}: {
  card: CardProps | CardProps2 ;
  children: ReactNode;
  index: number;
}) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360;
      card.style.setProperty("--start", `${angle + 60}`);
    };

    
  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border  timeline-card rounded-xl
      break-inside-avoid-column
      sm:p-10 p-7   mb-5"
    >
      <div className="glow" />
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src="/images/star.png"
            alt="star"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-[13px] sm:text-base">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
