import type { LucideIcon } from 'lucide-react';

interface GridCardProps {
    title: string;
    subtitle?: string;
    href?: string;
    icon?: LucideIcon;
    image?: string;
}

export function GridCard({ title, subtitle, href = "#", image }: GridCardProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-end p-6 aspect-square bg-zinc-900 border border-zinc-800 hover:border-amber-500 transition-all duration-500 cursor-pointer overflow-hidden rounded-2xl shadow-lg"
        >
            {/* Background Image - Always present or fallback */}
            <div className="absolute inset-0 w-full h-full">
                {image ? (
                    <img
                        src={image}
                        alt={title}
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
                    className="text-lg md:text-xl font-bold text-white mb-2 leading-snug tracking-tight drop-shadow-md whitespace-pre-wrap break-words"
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
    );
}
