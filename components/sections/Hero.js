import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20 bg-white text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Platformsify
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Powering the future of trade, innovation, and global collaboration.
      </motion.p>
    </section>
  );
}
