import {
    Handshake, Palette, MessageCircle, Youtube,
    Tv, Clapperboard, Building2, Scale,
    FileText, Plane, Trophy, Home, ShoppingBag
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
    title: string;
    link: string;
    icon: LucideIcon;
    image: string;
    description?: string;
    color?: string;
}

interface VentureItem {
    title: string;
    subtitle: string;
    link: string;
    icon: LucideIcon;
    image: string;
    description?: string;
    bg?: string;
}

export const services: ServiceItem[] = [
    {
        title: '我是廠商\n想找貴司合作',
        link: 'https://lin.ee/jFkOyph',
        icon: Handshake,
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
        description: '專業的品牌合作諮詢服務',
        color: 'text-blue-400'
    },
    {
        title: '廣告素材\n文案製作\n平面設計',
        link: '#',
        icon: Palette,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        description: '創意設計與文案撰寫',
        color: 'text-purple-400'
    },
    {
        title: '社群代操\n廣告投放\n口碑行銷',
        link: '#',
        icon: MessageCircle,
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        description: '全方位社群媒體管理',
        color: 'text-green-400'
    },
    {
        title: '影音範例\nYoutube',
        link: 'https://www.youtube.com/watch?v=DBqGuTVDsHE',
        icon: Youtube,
        image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800',
        description: '專業影音製作服務',
        color: 'text-red-400'
    },
    {
        title: '媒體新聞\n電視新聞\n新聞專訪',
        link: '#',
        icon: Tv,
        image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800',
        description: '媒體公關與新聞發布',
        color: 'text-yellow-400'
    },
    {
        title: 'AI動畫\n短影音\n形象影片',
        link: '#',
        icon: Clapperboard,
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        description: 'AI驅動的影片製作',
        color: 'text-pink-400'
    },
    {
        title: 'LED戶外廣告\nLED車體廣告',
        link: '#',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        description: '戶外廣告投放服務',
        color: 'text-orange-400'
    },
    {
        title: '商標申請\n法律諮詢',
        link: '#',
        icon: Scale,
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
        description: '智慧財產權保護',
        color: 'text-cyan-400'
    },
    {
        title: '雄鷹廣告\n動態簡報',
        link: 'https://www.canva.com/design/DAGLxLOB7iY/EOcaAk8IipCXuyQU1XYzUQ/view',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
        description: '專業簡報設計服務',
        color: 'text-indigo-400'
    }
];

export const kols: { name: string, image: string }[] = [
    { name: '董湘鈴 Lena', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800' },
    { name: '陳詩縈 Sarah', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800' },
    { name: '星兒 Sylivia', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800' },
    { name: '楊菓菓 Candice', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800' },
    { name: '嚴淑明 Mandy Yan', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
    { name: '謝NN', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800' },
    { name: '鹿鹿 Luz', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800' },
    { name: '謝子芯 LeNa', image: 'https://images.unsplash.com/photo-1516575334481-f85287c2c81d?auto=format&fit=crop&q=80&w=800' },
    { name: '水果姐姐 Mimi', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800' },
    { name: '凱哥的媽媽咪呀', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800' },
    { name: '跟著Rhea慢生活', image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=800' },
    { name: '木瓜米米 Debby', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
    { name: '金貝貝 BayKi', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800' },
    { name: '楊琪琪 Doris', image: 'https://images.unsplash.com/photo-1485290334039-a3c69043e517?auto=format&fit=crop&q=80&w=800' },
    { name: '翁子涵 Adurina', image: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&q=80&w=800' },
    { name: '梁軒安 Eagle', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
    { name: '王俐喬 Josephine', image: 'https://images.unsplash.com/photo-1534751516092-75f9322e7dce?auto=format&fit=crop&q=80&w=800' },
    { name: '蕭淑慎 Kitty', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800' },
    { name: '糖糖 Tang Tang', image: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&q=80&w=800' },
    { name: '葉子 葉香吟', image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80&w=800' },
    { name: '李佩娟 Phoebe', image: 'https://images.unsplash.com/photo-1485893086445-ed75865eb766?auto=format&fit=crop&q=80&w=800' },
    { name: '蔡甜甜 Brandy', image: 'https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?auto=format&fit=crop&q=80&w=800' },
    { name: '余曼曼 Amanda', image: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&q=80&w=800' },
    { name: '甜心Q匠 Sweet', image: 'https://images.unsplash.com/photo-1504199600962-eb6368877afb?auto=format&fit=crop&q=80&w=800' },
    { name: '王沁芳 Angel', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=800' },
    { name: '品艾 Abby', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
    { name: '李海莉 Hayley', image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=800' },
    { name: '凡妮莎 Vanessa', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800' },
    { name: '薩琳 Serene', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800' },
    { name: '簡湘穎 Emma', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800' },
    { name: '黃菲菲 Amber', image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=800' },
    { name: '瑋哥 Wego', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' },
    { name: 'E小姐不購物會憂鬱', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800' },
    { name: '王破崙 Kiki', image: 'https://images.unsplash.com/photo-1496440738382-655787f27bf1?auto=format&fit=crop&q=80&w=800' },
    { name: '琳娜 R-tina', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800' }
];

export const ventures: VentureItem[] = [
    {
        title: '厚普旅遊\nHope Tour',
        subtitle: '全台唯一明星旅遊專賣店',
        link: '#',
        icon: Plane,
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
        description: '提供明星級旅遊體驗',
        bg: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'TGE Golf',
        subtitle: '高爾夫球教學\n球具買賣',
        link: '#',
        icon: Trophy,
        image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800',
        description: '專業高爾夫球訓練',
        bg: 'from-green-500 to-emerald-500'
    },
    {
        title: '室內設計裝修',
        subtitle: '老屋翻新\n商業空間',
        link: '#',
        icon: Home,
        image: 'https://images.unsplash.com/photo-1616486338812-3aeee7e36509?auto=format&fit=crop&q=80&w=800',
        description: '打造理想空間',
        bg: 'from-orange-500 to-amber-500'
    },
    {
        title: '宅經濟電商',
        subtitle: '蝦皮賣場\n聯名合作',
        link: '#',
        icon: ShoppingBag,
        image: 'https://images.unsplash.com/photo-1472851294608-4155f2118c67?auto=format&fit=crop&q=80&w=800',
        description: '電商平台經營',
        bg: 'from-purple-500 to-pink-500'
    }
];
