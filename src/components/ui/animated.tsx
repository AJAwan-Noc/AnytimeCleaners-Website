import { motion, useInView, useSpring, useTransform, type HTMLMotionProps } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Shared viewport options for all animations to ensure consistency
const viewportOptions = { once: true, amount: 0.2 };

// Default spring transition for smooth, natural movement
const springTransition = {
  type: 'spring',
  damping: 30,
  stiffness: 100,
  mass: 1,
};

interface AnimatedProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeUp({ children, className, delay = 0, duration = 0.6, ...props }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOptions}
      transition={{ ...springTransition, duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, delay = 0, duration = 0.6, ...props }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOptions}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, className, delay = 0, duration = 0.6, direction = 'left', ...props }: AnimatedProps & { direction?: 'left' | 'right' | 'top' | 'bottom' }) {
  const getAxis = () => {
    switch (direction) {
      case 'left': return { x: -50, y: 0 };
      case 'right': return { x: 50, y: 0 };
      case 'top': return { x: 0, y: -50 };
      case 'bottom': return { x: 0, y: 50 };
    }
  };

  const initialAxis = getAxis();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialAxis }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOptions}
      transition={{ ...springTransition, duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0, duration = 0.6, ...props }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOptions}
      transition={{ ...springTransition, duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container & Item
export function StaggerContainer({ children, className, staggerDelay = 0.1, delayChildren = 0, ...props }: AnimatedProps & { staggerDelay?: number, delayChildren?: number }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOptions}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: AnimatedProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: springTransition },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// Smooth Counter Component
interface CounterProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function Counter({ value, className, prefix = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  // Spring config for smooth numbers
  const springValue = useSpring(0, {
    damping: 40,
    stiffness: 40,
    mass: 1,
  });

  const displayValue = useTransform(springValue, (current) => {
    return Math.floor(current).toString();
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  return (
    <span ref={ref} className={cn("inline-flex items-center", className)}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
