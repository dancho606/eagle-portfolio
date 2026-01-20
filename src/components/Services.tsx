import { motion } from 'framer-motion';
import { services } from '../data/content';

export function Services() {
    return (
        <section className="space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">專業服務</h2>
                <p className="text-gray-400">Services</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-6 rounded-2xl bg-navy-900/40 border border-white/5 hover:border-gold-500/30 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10 space-y-4">
                                <div className={`p-3 rounded-lg bg-navy-950 inline-block ring-1 ring-white/10 ${service.color}`}>
                                    <Icon size={24} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-gold-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
