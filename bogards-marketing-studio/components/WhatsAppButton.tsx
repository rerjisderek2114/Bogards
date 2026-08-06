'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5215500000000?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Bogards"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 16 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_40px_-8px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </motion.a>
  );
}
