"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "../ui/texteffect";

const Example = () => {
  return (
    <div className="rounded-t-3xl">
      <HorizontalScrollCarousel />
    </div>
  );
};

const words = `These projects highlight our expertise in web design, development, and branding. Each one is a testament to our dedication to quality and creativity
`;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] rounded-t-3xl border-t-2 border-neutral-600">
          <h1 className="font-heading text-6xl sm:text-8xl md:text-10xl tracking-tighter text-neutral-900 pl-10 pt-20 md:pl-24  ">Featured Works</h1>
          <TextGenerateEffect words={words} className="pt-20 md:pl-24 pl-10"/>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-200 rounded-[20px] border-neutral-500 border"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute z-10 grid bottom-0 ">
        <p className=" p-8 text-md font-black uppercase text-neutral-500 ">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "savive.png",
    title: "Logo Design : Savive",
    id: 1,
  },
  {
    url: "/mj.png",
    title: "Logo Design : Manraj",
    id: 2,
  },
  {
    url: "/anant.png",
    title: "Logo Design : Anant Marketing",
    id: 3,
  },
  {
    url: "/rglogo.png",
    title: "Logo Design : RG Enterprises",
    id: 4,
  },
  {
    url: "/indiana.png",
    title: "Logo Design : Indiana Drives",
    id: 5,
  },
  {
    url: "/solsn.png",
    title: "Logo Design : Solsn Technologies",
    id: 6,
  },
  {
    url: "/qencode.png",
    title: "Logo Design : QENCODE SOLUTIONS",
    id: 7,
  },
];

