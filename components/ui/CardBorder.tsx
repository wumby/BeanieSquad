import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { Rarity } from "@/types";

export const CardBorder = ({
  children,
  className,
  containerClassName,
  animate = true,
  rarity,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  rarity: Rarity;
}) => {
  const rarityColors: Record<Rarity, [string, string]> = {
    [Rarity.LEGEND]: ["#ff0101", "#a70e0e"],
    [Rarity.HOF]: ["#a100c8", "#c904f9"],
    [Rarity.GOLD]: ["#ffd700", "#b8860b"],
    [Rarity.SILVER]: ["#c0c0c0", "#8f8f8f"],
    [Rarity.BRONZE]: ["#8B5A2B", "#704214"],
  };

  const colors = rarityColors[rarity] || ["#121212", "#fff"];
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundImage: ` radial-gradient(circle farthest-side at 0% 100%, ${colors[0]}, transparent), 
                            radial-gradient(circle farthest-side at 100% 0%, ${colors[1]}, transparent), 
                            radial-gradient(circle farthest-side at 100% 100%, ${colors[0]}, transparent), 
                            radial-gradient(circle farthest-side at 0% 0%, ${colors[1]}, #141316)`,
          backgroundSize: animate ? "400% 400%" : "100% 100%",
          backgroundPosition: "0% 50%",
        }}
        className="absolute inset-0 rounded-3xl z-[1] transition duration-500 will-change-transform"
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundImage: `radial-gradient(circle farthest-side at 0% 100%, ${colors[0]}, transparent), 
                            radial-gradient(circle farthest-side at 100% 0%, ${colors[1]}, transparent), 
                            radial-gradient(circle farthest-side at 100% 100%, ${colors[0]}, transparent), 
                            radial-gradient(circle farthest-side at 0% 0%, ${colors[1]}, #141316)`,
          backgroundSize: animate ? "400% 400%" : "100% 100%",
          backgroundPosition: "0% 50%",
        }}
        className="absolute inset-0 rounded-3xl z-[1] will-change-transform"
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
