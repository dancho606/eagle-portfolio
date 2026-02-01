import type { LucideIcon } from 'lucide-react';

interface GridCardProps {
    title: string;
    subtitle?: string;
    href?: string;
    icon?: LucideIcon;
    image?: string;
    lineLink?: string;
}

export function GridCard({ title, subtitle, href = "#", image, lineLink }: GridCardProps) {
    return (
        <div className="relative group">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col justify-end p-6 aspect-square bg-zinc-900 border border-zinc-800 hover:border-amber-500 transition-all duration-500 cursor-pointer overflow-hidden rounded-2xl shadow-lg block"
            >
                {/* Background Image - Always present or fallback */}
                <div className="absolute inset-0 w-full h-full">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-zinc-900 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black"></div>
                    )}

                    {/* Gradient Overlay - Tinted for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500"></div>

                    {/* Color Tint on Hover */}
                    <div className="absolute inset-0 bg-indigo-900/40 mix-blend-overlay group-hover:bg-amber-600/30 transition-all duration-500"></div>
                </div>

                {/* Decorative Border Line (Top) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                {/* Content Container */}
                <div className="relative z-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                    {/* Title */}
                    <h3
                        className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-md whitespace-pre-wrap break-words line-clamp-3"
                        style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
                    >
                        {title}
                    </h3>

                    {/* Subtitle / Icon Row */}
                    <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-0.5 w-6 bg-amber-500 rounded-full"></div>
                        {subtitle ? (
                            <p className="text-xs text-gray-200 font-medium tracking-wide">{subtitle.replace(/\n/g, ' ')}</p>
                        ) : (
                            <p className="text-xs text-amber-500 font-bold tracking-widest uppercase">EXPLORE</p>
                        )}
                    </div>
                </div>
            </a>

            {/* LINE Button Overlay */}
            {lineLink && (
                <a
                    href={lineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#06C755] hover:bg-[#05b34c] rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:scale-110 active:scale-95"
                    title="LINE 諮詢"
                >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 4.9 0 10.946c0 5.464 4.35 10.04 10.297 10.835.402.086 1.15.228 1.15.228s.229 1.402.136 2.06c0 0-.107.656-.07.8.036.143.207.243.607-.036 3.65-2.535 7.42-7.143 7.42-7.143 2.65-1.442 4.41-3.957 4.41-6.744C24 4.9 18.627 0 12 0z" />
                    </svg>
                </a>
            )}
        </div>
    );
}
