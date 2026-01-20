import type { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
            <main className="mx-auto max-w-4xl px-4 py-8 md:py-16 space-y-20 md:space-y-32">
                {children}
            </main>

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}
