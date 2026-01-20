import { motion } from 'framer-motion';
import { Share2, Instagram, Facebook } from 'lucide-react';

export function Hero() {
    return (
        <section className="flex flex-col items-center text-center">
            {/* Profile Image with Glowing Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-8"
            >
                <div className="absolute inset-0 bg-gold-500 blur-2xl opacity-20 rounded-full scale-110"></div>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gold-500/50 p-1 relative z-10 bg-navy-950">
                    {/* Placeholder for Eagle Logo - Requesting generated image to replace later */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center overflow-hidden">
                        <span className="text-4xl">🦅</span>
                    </div>
                </div>
            </motion.div>

            {/* Title & Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 max-w-2xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium tracking-wide">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                    </span>
                    Tip Top Genius
                </div>

                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    @tip.top.tge
                </h1>

                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    擁有十年以上整合行銷經驗，累積上百件成功案例。<br className="hidden md:block" />
                    為目前網路市場最具影響力的<span className="text-gold-400 font-medium">品牌推手</span>之一。
                </p>
            </motion.div>

            {/* Social Actions */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex gap-4"
            >
                <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-gray-300 hover:text-white hover:scale-105">
                    <Instagram size={20} />
                </button>
                <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-gray-300 hover:text-white hover:scale-105">
                    <Facebook size={20} />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold transition-all hover:scale-105 shadow-lg shadow-gold-500/20">
                    <Share2 size={18} />
                    分享名片
                </button>
            </motion.div>
        </section>
    );
}
