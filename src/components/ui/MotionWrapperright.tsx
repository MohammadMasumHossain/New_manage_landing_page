import { motion } from "framer-motion";
import React, { type ReactNode } from "react";
import type { Variants } from "framer-motion";

type MotionWrapperProps = {
  children: ReactNode;
  animateNow: boolean;
  className?: string;
  stagger?: number;
  duration?: number;
  once?: boolean;
};

const MotionWrapper = ({
  children,
  className,
  stagger = 0.3,
  duration = 1,
  animateNow,
}: MotionWrapperProps) => {
  const parentVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, x: 500 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration },
    },
  };

  const wrappedChildren = React.Children.map(children, (child, idx) =>
    child ? (
      <motion.div key={idx} variants={childVariants}>
        {child}
      </motion.div>
    ) : null
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={parentVariants}
      //   whileInView="show"
      //   viewport={{ amount: 0.5, once: true }}
      animate={animateNow ? "show" : "hidden"}
    >
      {wrappedChildren}
    </motion.div>
  );
};

export default MotionWrapper;
