// Tipe global untuk Vercelity Studio

// --- Navigasi ---
export interface NavItem {
    labelKey: string;
    href: string;
}

// --- Layanan ---
export interface Service {
    id: string;
    number: string;
    titleKey: string;
    descriptionKey: string;
    suitableForKey: string;
    detailKey: string;
    owner: 'anindya' | 'gadang' | 'kolaborasi';
}

// --- Keunggulan ---
export interface Advantage {
    titleKey: string;
    descriptionKey: string;
}

// --- Tahap proses kerja ---
export interface WorkStep {
    number: string;
    titleKey: string;
    descriptionKey: string;
}

// --- Proyek portofolio ---
export interface Project {
    id: string;
    titleKey: string;
    descriptionKey: string;
    category: string;
    image: string;
    link?: string;
}

// --- Paket harga ---
export interface PricingPlan {
    id: string;
    nameKey: string;
    priceKey: string;
    targetKey: string;
    features: PricingFeature[];
    highlighted?: boolean;
}

export interface PricingFeature {
    labelKey: string;
    valueKey: string;
}

// --- Testimoni ---
export interface Testimonial {
    id: string;
    nameKey: string;
    roleKey: string;
    contentKey: string;
    avatar?: string;
}

// --- Galeri foto ---
export interface GalleryItem {
    id: string;
    image: string;
    altKey: string;
    category?: string;
}

// --- Statistik ---
export interface Stat {
    valueKey: string;
    labelKey: string;
}

// --- Info kontak ---
export interface ContactInfo {
    type: 'email' | 'whatsapp' | 'instagram' | 'github' | 'location' | 'hours';
    value: string;
    link?: string;
}

// --- Bahasa ---
export type Language = 'id' | 'en';

export interface LocaleStrings {
    [key: string]: string;
}
