import {
    Handshake, Palette, MessageCircle, Youtube,
    Tv, Clapperboard, Building2, Scale,
    FileText, Plane, Trophy, Home, ShoppingBag
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import configData from './config.json';

const iconMap: Record<string, LucideIcon> = {
    Handshake, Palette, MessageCircle, Youtube,
    Tv, Clapperboard, Building2, Scale,
    FileText, Plane, Trophy, Home, ShoppingBag
};

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

export const services: ServiceItem[] = configData.services.map(item => ({
    ...item,
    icon: iconMap[item.iconName] || MessageCircle
}));

export const caseMatch: ServiceItem[] = configData.caseMatch.map(item => ({
    ...item,
    icon: iconMap[item.iconName] || Handshake
}));

export const kols = configData.kols;

export const ventures: VentureItem[] = configData.ventures.map(item => ({
    ...item,
    icon: iconMap[item.iconName] || Building2
}));

export const portfolio = configData.portfolio;
