import { motion } from "framer-motion";
import React, { type ReactNode } from "react";
import type { Variants } from "framer-motion";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
};

const MotionWrapper = ({
  children,
  className,
  stagger = 0.3,
  duration = 0.8,
}: MotionWrapperProps) => {
  // Parent animation controls stagger
  const parentVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  // Animation for each child
  const childVariants: Variants = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration },
    },
  };

  // Wrap every child with motion.div
  const wrappedChildren = React.Children.map(children, (child) =>
    child ? <motion.div variants={childVariants}>{child}</motion.div> : null
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={parentVariants}
    >
      {wrappedChildren}
    </motion.div>
  );
};

export default MotionWrapper;
