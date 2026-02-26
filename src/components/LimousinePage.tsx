import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { limousineService } from '../data/content';

interface LimousinePageProps {
    onBack: () => void;
}

export function LimousinePage({ onBack }: LimousinePageProps) {
    // 動畫變數：錯落進場 (Stagger Options)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    if (!limousineService) {
        return null;
    }

    return (
        <motion.div
            key="limousine-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full flex justify-center items-center flex-col px-4 pb-24"
        >
            {/* 頂部導覽列 (只有選單內頁面才有) */}
            <div className="w-full max-w-6xl flex justify-between items-center mb-8">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-zinc-800 rounded-full border border-white/5 transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronLeft className="w-4 h-4 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">返回選單</span>
                </button>
                <div className="text-right">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        <span className="text-white">尊榮 </span>
                        <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">禮車租借</span>
                    </h2>
                </div>
            </div>

            {/* 形象大圖 Hero Banner */}
            <motion.div variants={itemVariants} className="w-full max-w-6xl mb-16 px-2">
                <div className="relative aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden rounded-[2rem] border border-zinc-800/80 shadow-2xl group">
                    <img
                        src={limousineService.heroImage}
                        alt="Limousine Hero"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 border-[2px] border-amber-900/20 rounded-[2rem] pointer-events-none z-10"></div>

                    <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 max-w-2xl">
                        <h3 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            <span className="text-white">極致奢華</span>
                            <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">尊絕體驗</span>
                        </h3>
                        <p className="text-sm md:text-base text-zinc-300/80 max-w-md hidden md:block">
                            我們提供各式頂級豪華車款與專業司機隨扈服務，滿足您商務接待、婚宴喜慶與特殊活動的所有高規格需求。
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 車輛規格列表 */}
            <div className="w-full max-w-6xl mb-12">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <span className="w-12 h-px bg-amber-500/30"></span>
                    <span className="text-xs font-bold tracking-[0.3em] text-amber-500/80">PREMIUM FLEET</span>
                    <span className="w-12 h-px bg-amber-500/30"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2">
                    {limousineService.vehicles.map((vehicle: any) => (
                        <motion.div
                            key={vehicle.id}
                            variants={itemVariants}
                            className="group relative flex flex-col bg-zinc-950/80 border border-zinc-800/80 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500"
                        >
                            {/* 車輛圖片 */}
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80"></div>
                            </div>

                            {/* 卡片內容 */}
                            <div className="relative p-6 flex flex-col flex-grow -mt-8 z-10">
                                <div className="mb-4">
                                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                                        {vehicle.name}
                                    </h4>
                                    <div className="h-0.5 w-12 bg-amber-500/50 mt-3 mb-1"></div>
                                </div>

                                {/* 報價資訊區塊 */}
                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                        <span className="text-xs text-zinc-500 font-medium tracking-wider">基本報價</span>
                                        <span className="text-lg font-bold text-amber-500">{vehicle.price}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                        <span className="text-xs text-zinc-500 font-medium tracking-wider">超時收費</span>
                                        <span className="text-sm font-medium text-zinc-300">{vehicle.overtime} <span className="text-[10px] text-zinc-600">/hr</span></span>
                                    </div>
                                    <div className="flex justify-between items-baseline pb-1">
                                        <span className="text-xs text-zinc-500 font-medium tracking-wider">服務紅包</span>
                                        <span className="text-sm font-medium text-pink-400/90">{vehicle.redEnvelope}</span>
                                    </div>
                                </div>

                                {/* LINE 預約按鈕 */}
                                <div className="mt-auto pt-2">
                                    <a
                                        href={vehicle.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-zinc-900 border border-zinc-700/50 hover:bg-green-600/10 hover:border-green-500/30 rounded-xl transition-all duration-300 group/btn relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                                        <img src="/line_logo.svg" alt="LINE" className="w-5 h-5 flex-shrink-0 group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-sm font-bold tracking-wider text-zinc-300 group-hover/btn:text-white transition-colors relative z-10">立即預約</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
