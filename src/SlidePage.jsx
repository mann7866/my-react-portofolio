import { motion } from "framer-motion";

export default function SlidePage({ children, direction = "right" }) {
  const variants = {
    initial: {
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-screen min-h-screen"
    >
      {children}
    </motion.div>
  );
}
