"use client";

import Image from "next/image";
import  { useRef } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }

    result[index].push(array[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  return <div 
  ref={columnRef} 
  className={cn("animate-marquee space-y-8 py-4", className)} 
  style={{`--marquee-duration`: duration} as React.CSSProperties}}>

  </div>;
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isnview = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);
  const columns1 = columns[0];
  const columns2 = columns[1];
  const columns3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[-49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isnview}
    </div>
  );
}

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt="what-people-are-buying"
      />
    </MaxWidthWrapper>
  );
};

export default Reviews;
