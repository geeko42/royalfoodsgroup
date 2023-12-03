'use client';

import { LayoutProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

const animations = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

const AnimatedPage = ({ children, ...props }: any) => {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
