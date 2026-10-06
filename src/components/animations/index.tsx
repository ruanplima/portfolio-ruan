import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

// Default refined cubic-bezier (Apple-inspired smoothness: cubic-bezier(.22,.61,.36,1))
export const DEFAULT_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.4,
        ease: DEFAULT_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: boolean;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  className = '',
  viewport = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const motionProps = viewport
    ? {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
      }
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      {...motionProps}
      transition={{
        duration,
        delay,
        ease: DEFAULT_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewport?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = '',
  viewport = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  const motionProps = viewport
    ? {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, margin: '-40px' },
      }
    : {
        initial: 'hidden',
        animate: 'show',
      };

  return (
    <motion.div
      variants={containerVariants}
      {...motionProps}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  distance = 20,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: DEFAULT_EASE,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  distance = 24,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: DEFAULT_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
