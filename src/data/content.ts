import { Palette, Megaphone, Tv, Truck, Scale, Plane, Trophy, Home, ShoppingBag } from 'lucide-react';

export const services = [
    {
        icon: Palette,
        title: '數位廣告行銷',
        description: '素材製圖 / 商業企劃 / 文案撰寫 / 平面設計 / 名片Logo',
        color: 'text-blue-400'
    },
    {
        icon: Megaphone,
        title: '社群代操經營',
        description: '廣告投放 / 口碑行銷 / 流量變現 / 粉絲互動',
        color: 'text-purple-400'
    },
    {
        icon: Tv,
        title: '媒體公關',
        description: '電視新聞 / 新聞專訪 / 媒體曝光 / 危機處理',
        color: 'text-green-400'
    },
    {
        icon: Truck,
        title: '戶外廣告',
        description: 'LED戶外電視牆 / LED車體廣告 / 實體看板',
        color: 'text-orange-400'
    },
    {
        icon: Scale,
        title: '法律顧問',
        description: '商標專利 / 法律諮詢 / 合約擬定',
        color: 'text-red-400'
    }
];

export const ventures = [
    {
        icon: Plane,
        title: '厚普旅遊 Hope Tour',
        description: '全台唯一明星旅遊專賣店，打造獨特尊榮的旅遊體驗。',
        link: '#',
        bg: 'from-blue-900 to-blue-800'
    },
    {
        icon: Trophy,
        title: 'TGE Golf',
        description: '高爾夫球教學 / 球具買賣 / 球場代訂，專業一條龍服務。',
        link: '#',
        bg: 'from-green-900 to-green-800'
    },
    {
        icon: Home,
        title: '室內設計裝修',
        description: '老屋翻新 / 商業空間 / 軟裝設計 / 招牌製作',
        link: '#',
        bg: 'from-orange-900 to-orange-800'
    },
    {
        icon: ShoppingBag,
        title: '宅經濟電商',
        description: '蝦皮賣場聯名合作，協助品牌與KOL進行流量變現。',
        link: '#',
        bg: 'from-purple-900 to-purple-800'
    }
];

export const portfolio = {
    video: {
        title: '影音作品集',
        description: '精選商業廣告、形象短片與活動紀錄',
        items: [
            { type: 'youtube', id: 'DBqGuTVDsHE', title: '精選案例 1' },
            // More items can be added here
        ]
    },
    design: {
        title: '設計案例',
        description: '品牌視覺識別、平面設計與包裝設計',
        link: 'https://www.facebook.com/Tge.tw'
    }
};

export const kols = [
    "董湘鈴 Lena", "嚴淑明 Mandy Yan", "翁子涵 Adurina", "梁軒安 Eagle", "蕭淑慎 Kitty",
    "余曼曼 Amanda", "蓋兒 Gail", "林寧 LoLo", "張家瑋 Wien", "李萱 Hana", "NaNa", "KiKi"
];
