// Data statis untuk Vercelity Studio

import type {
    NavItem,
    Service,
    Advantage,
    WorkStep,
    Project,
    PricingPlan,
    Testimonial,
    GalleryItem,
    Stat,
    ContactInfo,
} from '@/types';

// --- Navigasi ---
export const navItems: NavItem[] = [
    { labelKey: 'nav.about', href: '#about' },
    { labelKey: 'nav.services', href: '#services' },
    { labelKey: 'nav.howWeWork', href: '#how-we-work' },
    { labelKey: 'nav.portfolio', href: '#portfolio' },
    { labelKey: 'nav.pricing', href: '#pricing' },
    { labelKey: 'nav.testimonials', href: '#testimonials' },
    { labelKey: 'nav.gallery', href: '#gallery' },
    { labelKey: 'nav.contact', href: '#contact' },
];

// --- Keunggulan ---
export const advantages: Advantage[] = [
    { titleKey: 'about.advantage1.title', descriptionKey: 'about.advantage1.desc' },
    { titleKey: 'about.advantage2.title', descriptionKey: 'about.advantage2.desc' },
    { titleKey: 'about.advantage3.title', descriptionKey: 'about.advantage3.desc' },
];

// --- Statistik ---
export const stats: Stat[] = [
    { valueKey: 'about.stat1.value', labelKey: 'about.stat1.label' },
    { valueKey: 'about.stat2.value', labelKey: 'about.stat2.label' },
    { valueKey: 'about.stat3.value', labelKey: 'about.stat3.label' },
];

// --- Layanan ---
export const services: Service[] = [
    {
        id: 'uiux',
        number: '01',
        titleKey: 'services.01.title',
        descriptionKey: 'services.01.desc',
        suitableForKey: 'services.01.suitable',
        detailKey: 'services.01.detail',
        owner: 'anindya',
    },
    {
        id: 'branding',
        number: '02',
        titleKey: 'services.02.title',
        descriptionKey: 'services.02.desc',
        suitableForKey: 'services.02.suitable',
        detailKey: 'services.02.detail',
        owner: 'anindya',
    },
    {
        id: 'webdev',
        number: '03',
        titleKey: 'services.03.title',
        descriptionKey: 'services.03.desc',
        suitableForKey: 'services.03.suitable',
        detailKey: 'services.03.detail',
        owner: 'gadang',
    },
    {
        id: 'landing',
        number: '04',
        titleKey: 'services.04.title',
        descriptionKey: 'services.04.desc',
        suitableForKey: 'services.04.suitable',
        detailKey: 'services.04.detail',
        owner: 'kolaborasi',
    },
    {
        id: 'maintenance',
        number: '05',
        titleKey: 'services.05.title',
        descriptionKey: 'services.05.desc',
        suitableForKey: 'services.05.suitable',
        detailKey: 'services.05.detail',
        owner: 'gadang',
    },
];

// --- Tahap proses kerja ---
export const workSteps: WorkStep[] = [
    { number: '01', titleKey: 'howWeWork.step1.title', descriptionKey: 'howWeWork.step1.desc' },
    { number: '02', titleKey: 'howWeWork.step2.title', descriptionKey: 'howWeWork.step2.desc' },
    { number: '03', titleKey: 'howWeWork.step3.title', descriptionKey: 'howWeWork.step3.desc' },
    { number: '04', titleKey: 'howWeWork.step4.title', descriptionKey: 'howWeWork.step4.desc' },
];

// --- Portofolio (contoh data, akan diperbarui) ---
export const projects: Project[] = [
    {
        id: 'project-1',
        titleKey: 'portfolio.project1.title',
        descriptionKey: 'portfolio.project1.desc',
        category: 'web',
        image: '/images/portfolio-1.jpg',
    },
    {
        id: 'project-2',
        titleKey: 'portfolio.project2.title',
        descriptionKey: 'portfolio.project2.desc',
        category: 'branding',
        image: '/images/portfolio-2.jpg',
    },
    {
        id: 'project-3',
        titleKey: 'portfolio.project3.title',
        descriptionKey: 'portfolio.project3.desc',
        category: 'web',
        image: '/images/portfolio-3.jpg',
    },
];

// --- Paket harga ---
export const pricingPlans: PricingPlan[] = [
    {
        id: 'starter',
        nameKey: 'pricing.starter.name',
        priceKey: 'pricing.starter.price',
        targetKey: 'pricing.starter.target',
        features: [
            { labelKey: 'pricing.feature.pages', valueKey: 'pricing.starter.pages' },
            { labelKey: 'pricing.feature.design', valueKey: 'pricing.starter.design' },
            { labelKey: 'pricing.feature.responsive', valueKey: 'pricing.starter.responsive' },
            { labelKey: 'pricing.feature.revisions', valueKey: 'pricing.starter.revisions' },
            { labelKey: 'pricing.feature.timeline', valueKey: 'pricing.starter.timeline' },
            { labelKey: 'pricing.feature.support', valueKey: 'pricing.starter.support' },
        ],
    },
    {
        id: 'growth',
        nameKey: 'pricing.growth.name',
        priceKey: 'pricing.growth.price',
        targetKey: 'pricing.growth.target',
        highlighted: true,
        features: [
            { labelKey: 'pricing.feature.pages', valueKey: 'pricing.growth.pages' },
            { labelKey: 'pricing.feature.design', valueKey: 'pricing.growth.design' },
            { labelKey: 'pricing.feature.responsive', valueKey: 'pricing.growth.responsive' },
            { labelKey: 'pricing.feature.revisions', valueKey: 'pricing.growth.revisions' },
            { labelKey: 'pricing.feature.timeline', valueKey: 'pricing.growth.timeline' },
            { labelKey: 'pricing.feature.support', valueKey: 'pricing.growth.support' },
        ],
    },
    {
        id: 'premium',
        nameKey: 'pricing.premium.name',
        priceKey: 'pricing.premium.price',
        targetKey: 'pricing.premium.target',
        features: [
            { labelKey: 'pricing.feature.pages', valueKey: 'pricing.premium.pages' },
            { labelKey: 'pricing.feature.design', valueKey: 'pricing.premium.design' },
            { labelKey: 'pricing.feature.responsive', valueKey: 'pricing.premium.responsive' },
            { labelKey: 'pricing.feature.revisions', valueKey: 'pricing.premium.revisions' },
            { labelKey: 'pricing.feature.timeline', valueKey: 'pricing.premium.timeline' },
            { labelKey: 'pricing.feature.support', valueKey: 'pricing.premium.support' },
        ],
    },
];

// --- Testimoni (contoh data, akan diperbarui) ---
export const testimonials: Testimonial[] = [
    {
        id: 'testimonial-1',
        nameKey: 'testimonials.client1.name',
        roleKey: 'testimonials.client1.role',
        contentKey: 'testimonials.client1.content',
    },
    {
        id: 'testimonial-2',
        nameKey: 'testimonials.client2.name',
        roleKey: 'testimonials.client2.role',
        contentKey: 'testimonials.client2.content',
    },
];

// --- Galeri (contoh data, akan diperbarui) ---
export const galleryItems: GalleryItem[] = [
    { id: 'gallery-1', image: '/images/gallery-1.jpg', altKey: 'gallery.item1.alt', category: 'design' },
    { id: 'gallery-2', image: '/images/gallery-2.jpg', altKey: 'gallery.item2.alt', category: 'photography' },
    { id: 'gallery-3', image: '/images/gallery-3.jpg', altKey: 'gallery.item3.alt', category: 'design' },
    { id: 'gallery-4', image: '/images/gallery-4.jpg', altKey: 'gallery.item4.alt', category: 'photography' },
];

// --- Info kontak ---
export const contactInfo: ContactInfo[] = [
    { type: 'email', value: 'gadangjatumahiswara@gmail.com', link: 'mailto:gadangjatumahiswara@gmail.com' },
    { type: 'whatsapp', value: '0812 1631 2645', link: 'https://wa.me/6281216312645' },
    { type: 'instagram', value: '@j.mahiswara_', link: 'https://instagram.com/j.mahiswara_' },
    { type: 'github', value: 'jmahiswara1', link: 'https://github.com/jmahiswara1' },
    { type: 'location', value: 'Jakarta & Kediri' },
    { type: 'hours', value: 'Senin–Sabtu, 09.00–17.00 WIB' },
];
