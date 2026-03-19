import { motion } from 'framer-motion';
import { Home, Briefcase } from 'lucide-react';

type Mode = 'residential' | 'commercial';

interface ModeSwitcherProps {
  activeMode: Mode;
  setActiveMode: (mode: Mode) => void;
}

export default function ModeSwitcher({ activeMode, setActiveMode }: ModeSwitcherProps) {
  const tabs: { key: Mode; label: string; emoji: string; icon: typeof Home }[] = [
    { key: 'residential', label: 'Residential', emoji: '🏠', icon: Home },
    { key: 'commercial', label: 'Commercial', emoji: '💼', icon: Briefcase },
  ];

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex gap-4 justify-center max-w-lg mx-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => setActiveMode(tab.key)}
            whileTap={{ scale: 0.97 }}
            className={`relative flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-heading font-bold text-lg transition-all duration-300 border-2 ${
              activeMode === tab.key
                ? 'bg-primary-green text-white border-primary-green shadow-lg shadow-primary-green/20'
                : 'bg-white text-brand-text border-gray-200 hover:border-primary-green/40 hover:shadow-md'
            }`}
          >
            <span className="text-xl">{tab.emoji}</span>
            {tab.label}
            {activeMode === tab.key && (
              <motion.div
                layoutId="mode-indicator"
                className="absolute inset-0 rounded-2xl bg-primary-green -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
