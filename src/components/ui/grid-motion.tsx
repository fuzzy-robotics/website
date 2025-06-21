"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  // Memoize the chunks calculation
  const chunks = useMemo(() => {
    const chunkSize = Math.ceil(images.length / 4);
    return Array.from({ length: 4 }, (_, colIndex) => {
      const start = colIndex * chunkSize;
      return images.slice(start, start + chunkSize);
    });
  }, [images]);

  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={prefersReducedMotion ? {} : { 
                  y: colIndex % 2 === 0 ? 100 : -100 
                }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                key={`col-${colIndex}`}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={`img-${colIndex}-${imageIndex}`}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.img
                      whileHover={prefersReducedMotion ? {} : { y: -10 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="opacity-90 aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                      width={970}
                      height={700}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Simplified GridLine components with less complex CSS
const GridLineHorizontal = ({
  className,
  offset = "200px",
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 50%, transparent 0, transparent)",
        backgroundSize: "5px 1px",
        height: "1px",
        width: `calc(100% + ${offset})`,
        left: `calc(${offset} / -2)`,
      } as React.CSSProperties}
      className={cn(
        "absolute top-0 z-30",
        "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.2),rgba(255,255,255,0.2)_50%,transparent_0,transparent)]",
        className
      )}
    />
  );
};

const GridLineVertical = ({
  className,
  offset = "150px",
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 50%, transparent 0, transparent)",
        backgroundSize: "1px 5px",
        width: "1px",
        height: `calc(100% + ${offset})`,
        top: `calc(${offset} / -2)`,
      } as React.CSSProperties}
      className={cn(
        "absolute left-0 z-30",
        "dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),rgba(255,255,255,0.2)_50%,transparent_0,transparent)]",
        className
      )}
    />
  );
};