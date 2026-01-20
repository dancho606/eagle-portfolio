import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ventures } from '../data/content';

export function Ventures() {
    return (
        <section className="space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">關係企業</h2>
                <p className="text-gray-400">Affiliated Ventures</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {ventures.map((venture, index) => {
                    const Icon = venture.icon;
                    return (
                        <motion.a
                            key={venture.title}
                            href={venture.link}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl p-6 md:p-8 flex items-start justify-between gap-4"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${venture.bg} opacity-20 group-hover:opacity-30 transition-opacity`} />
                            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors" />

                            <div className="relative z-10 space-y-3">
                                <div className="flex items-center gap-3 text-gold-400">
                                    <Icon size={24} />
                                    <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                                        {venture.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-300 max-w-sm">
                                    {venture.description}
                                </p>
                            </div>

                            <div className="relative z-10 p-2 rounded-full bg-white/10 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                <ArrowUpRight size={20} />
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}
