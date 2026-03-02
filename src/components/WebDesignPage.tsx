import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, CheckCircle2, Zap, X, Plus, ShoppingCart, Users, Database, ArrowRight } from 'lucide-react';

const faqs = [
    { q: "建置期間可以修改多少次？", a: "我們每年提供 2 次免費的小幅修改，確保成品符合您的期望！超過次數則視複雜度另行報價。" },
    { q: "如果我沒有文案和圖片怎麼辦？", a: "不用擔心，我們可以提供圖庫素材，並運用 AI 輔助生成專業的行銷文案，讓網站快速上線。" },
    { q: "未來的維護費包含什麼？不續約會怎樣？", a: "維護費包含主機續約、網域更新與安全性防護。如果您選擇不續約，我們可以提供原始碼包裝供您自行搬遷（適用買斷制方案）。" },
];

interface WebDesignPageProps {
}

export function WebDesignPage({ }: WebDesignPageProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow pt-8 pb-16">


                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center md:text-left mb-20"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        打造會賺錢的 <br className="md:hidden" />
                        <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">數位房地產</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
                        這不只是一個網站，更是您量身打造的自動化獲利引擎。我們以最新技術為基底，結合 AI 工具，助您在競爭中脫穎而出。
                    </p>
                </motion.div>


                {/* 產品陣列 (Pricing & Plans) */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>產品線與專屬方案</h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto">為您設計了最符合商業效益的三大維度。</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Plan 1: 經典復刻網站 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col items-center text-center shadow-2xl group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative">
                                <img src="/images/plan_classic.png" alt="Classic Template" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="mb-6 flex-grow">
                                <h3 className="text-xl font-bold text-white mb-1">經典復刻網站</h3>
                                <p className="text-zinc-500 text-sm mb-4">預算導向、極速上線。</p>
                                <div className="text-3xl font-bold text-amber-500 mb-1">$35,000<span className="text-sm font-normal text-zinc-500 ml-1">起</span></div>
                                <div className="text-zinc-400 text-xs font-bold mb-6 flex items-center gap-1 justify-center">
                                    <Globe className="w-3 h-3" /> 年度服務費 $6,000 起
                                </div>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 經典網站架構復刻</li>
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 包含一頁式或多頁形象官網</li>
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 約 3-4 工作天極速交付</li>
                                </ul>
                            </div>
                            <button onClick={() => setActiveModal('template')} className="w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors border border-zinc-700 flex items-center justify-center gap-2 group">
                                查看方案規格 <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Plan 2: 半客製網站 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900 rounded-3xl p-8 border border-amber-500/30 flex flex-col items-center text-center shadow-2xl group relative overflow-visible"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold rounded-full shadow-lg z-20 whitespace-nowrap">
                                🔥 最受歡迎 / 彈性最高
                            </div>

                            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative">
                                <img src="/images/plan_lego.png" alt="Semi-Custom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="mb-6 flex-grow relative z-10 w-full">
                                <h3 className="text-xl font-bold text-white mb-1">半客製網站</h3>
                                <p className="text-zinc-500 text-sm mb-4">買好底盤，彈性加購電商或後台。</p>
                                <div className="text-3xl font-bold text-amber-500 mb-1">$50,000<span className="text-sm font-normal text-zinc-500 ml-1">起</span></div>
                                <div className="text-zinc-400 text-xs font-bold mb-6 flex items-center gap-1 justify-center">
                                    <Globe className="w-3 h-3" /> 年度服務費 $12,000 起
                                </div>
                                <div className="text-zinc-500 text-xs font-bold text-center mb-3 text-opacity-80 uppercase tracking-widest">基本版包含：</div>
                                <ul className="space-y-3 w-full text-left">
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 全站圖文、Logo 與配色更換</li>
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 最多 2 個區塊的佈局修改</li>
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 最多 1 個頁面的獨立新增</li>
                                </ul>
                            </div>
                            <button onClick={() => setActiveModal('semi-custom')} className="w-full py-3 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group relative z-10">
                                開啟選配加購選單 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Plan 3: 全客製化網站 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col items-center text-center shadow-2xl group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative">
                                <img src="/images/plan_custom.png" alt="Custom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="mb-6 flex-grow">
                                <h3 className="text-xl font-bold text-white mb-1">全客製化網站</h3>
                                <p className="text-zinc-500 text-sm mb-4">企業級 UI/UX 從零打造。</p>
                                <div className="text-3xl font-bold text-amber-500 mb-1">依需求估價</div>
                                <div className="text-zinc-400 text-xs font-bold mb-6 flex items-center gap-1 justify-center">
                                    <Globe className="w-3 h-3" /> 年度服務費 $24,000 起
                                </div>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 深度需求訪談與流程規劃</li>
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 獨立視覺識別與專屬互動特效</li>
                                    <li className="flex items-start gap-2 text-zinc-400 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 適合複雜系統、ERP 串接或大型電商</li>
                                </ul>
                            </div>
                            <button onClick={() => setActiveModal('full-custom')} className="w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors border border-zinc-700 flex items-center justify-center gap-2 group">
                                了解客製化流程 <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* FAQ 區塊 */}
                <div className="mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>常見問題與解答</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <div className="px-6 py-5 flex justify-between items-center">
                                    <h4 className="font-bold text-zinc-200 text-lg">{faq.q}</h4>
                                    <ArrowRight className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`} />
                                </div>
                                <AnimatePresence initial={false}>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div className="px-6 pb-5 text-zinc-400">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Modal 互動彈窗 (移植自 intellibrand 並調整配色) */}
                <AnimatePresence>
                    {activeModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setActiveModal(null)}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-zinc-900 w-full max-w-4xl rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh] border border-zinc-800"
                            >
                                {/* Modal Header */}
                                <div className="flex justify-between items-start p-6 md:p-8 border-b border-zinc-800 bg-zinc-900/50">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {activeModal === 'template' && '經典復刻網站 - 方案細節'}
                                            {activeModal === 'semi-custom' && '半客製網站 - 選配加購單'}
                                            {activeModal === 'full-custom' && '全客製化網站 - 打造專屬平台'}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Modal Body (Scrollable) */}
                                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-zinc-300">
                                    {/* 內容簡單移植，保持核心資訊 */}
                                    {activeModal === 'template' && (
                                        <div className="space-y-6">
                                            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
                                                <h4 className="text-xl font-bold text-amber-500 mb-4">方案內容</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 經典網站架構復刻</li>
                                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 包含單頁或多頁基礎架構</li>
                                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Vercel 極速部署上線</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === 'semi-custom' && (
                                        <div className="space-y-6">
                                            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
                                                <h4 className="text-xl font-bold text-amber-500 mb-4">加購項目</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800"><ShoppingCart className="inline mr-2 text-amber-500" /> 輕量電商模組 (+ $50,000起)</div>
                                                    <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800"><Database className="inline mr-2 text-amber-500" /> 基礎 CMS 後台 (+ $25,000起)</div>
                                                    <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800"><Users className="inline mr-2 text-amber-500" /> 會員系統模型 (+ $22,000起)</div>
                                                    <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800"><Plus className="inline mr-2 text-amber-500" /> 額外客製分頁 (+ $8,000起/區塊)</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === 'full-custom' && (
                                        <div className="space-y-6">
                                            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
                                                <h4 className="text-xl font-bold text-amber-500 mb-4">全客製開發流程</h4>
                                                <p>從規格訪談、UI/UX 設計到敏捷開發，提供企業級的專屬解決方案。報價依需求詳細估算。</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
