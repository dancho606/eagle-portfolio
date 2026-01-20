import { motion } from 'framer-motion';
import { portfolio } from '../data/content';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
    return (
        <section className="space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">精選案例</h2>
                <p className="text-gray-400">Featured Work</p>
            </div>

            <div className="space-y-8">
                {/* Video Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl shadow-black/50"
                >
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        {/* Overlay if needed */}
                    </div>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${portfolio.video.items[0].id}?rel=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </motion.div>

                {/* More Portfolio Link */}
                <div className="flex justify-center">
                    <a
                        href={portfolio.design.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-navy-800 hover:bg-navy-700 text-white border border-white/10 hover:border-gold-500/50 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                    >
                        <ExternalLink size={20} className="text-gold-400" />
                        <span>查看更多設案例 (Facebook)</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
