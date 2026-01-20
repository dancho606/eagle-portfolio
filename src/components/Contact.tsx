import { MessageCircle } from 'lucide-react';

export function Contact() {
    return (
        <footer className="text-center space-y-8 pt-12 pb-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-navy-900 to-black border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />

                <h2 className="text-3xl font-bold text-white mb-4">Ready to be Top?</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    立即預約諮詢，讓我們協助您打造最有價值的品牌影響力。
                </p>

                <a
                    href="https://lin.ee/jFkOyph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00B900] hover:bg-[#009900] text-white font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-green-900/50"
                >
                    <MessageCircle size={24} />
                    LINE 官方帳號諮詢
                </a>
            </div>

            <div className="text-gray-600 text-xs">
                &copy; {new Date().getFullYear()} Eagle Portfolio. All Reights Reserved.
            </div>
        </footer>
    );
}
