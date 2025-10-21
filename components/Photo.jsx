"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
        }}
        className="w-[298px] h-[298px] xl:w-[494px] xl:h-[498px] mix-blend-lighten relative"
      >
        <Image
          src="/assets/_.jpeg"
          alt=""
          fill
          priority
          quality={100}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
