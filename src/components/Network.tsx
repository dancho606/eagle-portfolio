import { motion } from 'framer-motion';
import { kols } from '../data/content';

export function Network() {
    return (
        <section className="py-8 overflow-hidden">
            <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold text-white">合作夥伴與網紅陣容</h2>
                <p className="text-gray-400 text-sm">Influencer Network</p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-gradient-x">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950 via-transparent to-navy-950 pointer-events-none" />

                <motion.div
                    className="flex gap-8 whitespace-nowrap py-4"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...kols, ...kols, ...kols].map((kol, i) => (
                        <span
                            key={i}
                            className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white/50"
                        >
                            {kol}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
