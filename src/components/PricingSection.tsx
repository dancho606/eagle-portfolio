import React from 'react';

const PricingCard = ({
    title,
    price,
    setupFee,
    hostingFee,
    total,
    daily,
    colorClass,
    badgeColor
}: {
    title: string;
    price: string;
    setupFee: string;
    hostingFee: string;
    total: string;
    daily: string;
    colorClass: string;
    badgeColor: string;
}) => (
    <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden min-w-[300px] hover:-translate-y-2 transition-transform duration-300">
        {/* Header */}
        <div className={`${colorClass} py-6 text-center`}>
            <h3 className="text-2xl font-bold text-white tracking-widest">{title}</h3>
        </div>

        {/* Body */}
        <div className="p-8 text-center">
            <div className="mb-2">
                <span className="text-4xl font-extrabold text-[#c0392b]">${price}</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">每年網站費用</p>

            <div className="space-y-3 mb-8 text-gray-500 text-sm">
                <div className="flex justify-center items-center gap-2">
                    <span className="text-gray-300">+</span>
                    <span>設定費 ${setupFee}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <span className="text-gray-300">+</span>
                    <span>{title.substring(0, 2)}主機費 ${hostingFee}</span>
                </div>
                <div className="pt-4 border-t border-gray-100 font-bold text-gray-800 text-lg">
                    = 網站總金額 ${total}
                </div>
            </div>

            {/* Footer Badge */}
            <div className={`inline-block px-8 py-2 rounded-full text-white font-bold ${badgeColor}`}>
                網站每天約 <span className="text-yellow-300 text-xl">{daily}</span> 元
            </div>
        </div>
    </div>
);

export function PricingSection() {
    const plans = [
        {
            title: "一年方案",
            price: "9,800",
            setupFee: "8,800",
            hostingFee: "9,800",
            total: "18,600",
            daily: "27",
            colorClass: "bg-[#2980b9]", // Blue
            badgeColor: "bg-[#2980b9]"
        },
        {
            title: "三年方案",
            price: "8,820",
            setupFee: "8,800",
            hostingFee: "26,460",
            total: "35,260",
            daily: "24",
            colorClass: "bg-[#2c3e50]", // Dark Blue
            badgeColor: "bg-[#2c3e50]"
        },
        {
            title: "五年方案",
            price: "7,840",
            setupFee: "8,800",
            hostingFee: "39,200",
            total: "48,000",
            daily: "21",
            colorClass: "bg-[#8e44ad]", // Purple
            badgeColor: "bg-[#8e44ad]"
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">超值網站方案</h2>
                    <p className="text-gray-500">透明的價格，專業的服務，讓您輕鬆擁有品牌官網</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 items-stretch">
                    {plans.map((plan) => (
                        <PricingCard key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </div>
    );
}
