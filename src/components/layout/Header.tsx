import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, Search, Globe, User } from 'lucide-react';

export default function Header() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
        i18n.changeLanguage(newLang);
        document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 sticky top-0 z-30 ml-64 rtl:ml-0 rtl:mr-64 transition-all duration-300">
            <div className="flex items-center w-1/3">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder={t('header.search_placeholder')}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 rtl:right-3 rtl:left-auto" />
                </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <button
                    onClick={toggleLanguage}
                    className="p-2 text-slate-500 hover:text-brand-navy hover:bg-slate-50 rounded-full transition-colors"
                    title={t('header.toggle_lang')}
                >
                    <Globe className="h-5 w-5" />
                </button>
                <button className="p-2 text-slate-500 hover:text-brand-navy hover:bg-slate-50 rounded-full transition-colors relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-2 rtl:space-x-reverse pl-4 rtl:pr-4 border-l rtl:border-l-0 rtl:border-r border-slate-200">
                    <div className="h-8 w-8 bg-brand-navy/10 rounded-full flex items-center justify-center text-brand-navy">
                        <User className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 hidden md:block">Me. Alami</span>
                </div>
            </div>
        </header>
    );
}
