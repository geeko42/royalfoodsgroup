'use client';

import { LayoutProps, motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const animations = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
};

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const AnimatedPage = ({ children, ...props }: Props) => {
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
