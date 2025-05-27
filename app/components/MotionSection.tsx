'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type MotionSectionProps = PropsWithChildren<{
  /** delay in seconds – handy when you stack sections */
  delay?: number;
}>;

/**
 * Fade-in & slide-up once the element enters the viewport.
 * Re-usable: just wrap any markup you already have.
 */
export default function MotionSection({
  children,
  delay = 0,
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
