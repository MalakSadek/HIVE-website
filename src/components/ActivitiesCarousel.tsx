"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MS_PER_IMAGE = 5500;
const SLOT_RATIO = 0.22;
const CENTER_SCALE = 1.06;
const SIDE_SCALE = 0.74;

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function wrapOffset(value: number, period: number) {
  if (period <= 0) return 0;
  let wrapped = value % period;
  if (wrapped < 0) wrapped += period;
  if (wrapped > period / 2) wrapped -= period;
  return wrapped;
}

type ActivitiesCarouselProps = {
  images: string[];
};

export function ActivitiesCarousel({ images }: ActivitiesCarouselProps) {
  const imageKey = images.join("|");
  const [order, setOrder] = useState<string[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setOrder(shuffle(images));
  }, [imageKey, images]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !order || order.length === 0) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let running = false;
    let last = performance.now();
    let progress = 0;

    const layout = () => {
      const width = container.clientWidth;
      const slot = width * SLOT_RATIO;
      const period = order.length * slot;

      order.forEach((_, index) => {
        const slide = slideRefs.current[index];
        if (!slide) return;
        const image = slide.querySelector("img");

        const x = wrapOffset(index * slot - progress * slot, period);
        const distance = Math.abs(x);
        const proximity = Math.max(0, 1 - distance / slot);
        const fade =
          distance <= slot
            ? 1
            : Math.max(0, 1 - (distance - slot) / (slot * 0.55));
        const scale = SIDE_SCALE + (CENTER_SCALE - SIDE_SCALE) * proximity;

        slide.style.left = `calc(50% + ${x}px)`;
        slide.style.transform = `translate(-50%, -50%) scale(${scale})`;
        slide.style.opacity = String(fade);
        slide.style.zIndex = String(Math.round(proximity * 10) + 1);
        slide.style.filter = `grayscale(${1 - proximity})`;

        if (image) {
          image.style.opacity = String(0.5 + 0.5 * proximity);
        }
      });
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(32, now - last);
      last = now;
      progress += dt / MS_PER_IMAGE;
      if (progress >= order.length) progress -= order.length;
      layout();
      raf = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || media.matches || order.length < 2) {
        layout();
        return;
      }
      running = true;
      last = performance.now();
      raf = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(raf);
    };

    layout();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.15 }
    );
    observer.observe(container);

    const onMotionChange = () => {
      stop();
      if (media.matches) layout();
      else start();
    };
    media.addEventListener("change", onMotionChange);

    return () => {
      stop();
      observer.disconnect();
      media.removeEventListener("change", onMotionChange);
    };
  }, [order]);

  if (images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative mb-10 h-52 select-none overflow-hidden pointer-events-none sm:h-64 md:h-72"
      aria-hidden="true"
      style={{ touchAction: "none" }}
    >
      {(order ?? []).map((src, index) => (
        <div
          key={src}
          ref={(node) => {
            slideRefs.current[index] = node;
          }}
          className="absolute top-1/2 aspect-[4/3] w-[min(48%,22rem)] overflow-hidden rounded-md shadow-md will-change-transform"
          style={{
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 48vw, 22rem"
            className="object-cover"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
