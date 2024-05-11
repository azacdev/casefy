"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    // <AuroraBackground className="">
    <main className="h-screen flex items-center justify-center flex-col">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Deen Guide
        </div>
        <div className="font-extralight text-base md:text-2xl text-neutral-200 py-4 max-w-[700px] text-center">
          Your personalized Islamic AI assistant that can answer your questions
          about Islam based on the Qur'an, hadiths, and scholarly texts.
        </div>
        <Link
          href={"/login"}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign In
        </Link>
      </motion.div>
    </main>
    // </AuroraBackground>
  );
}
