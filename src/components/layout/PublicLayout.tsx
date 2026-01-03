import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Scale } from 'lucide-react';

export default function PublicLayout() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
        i18n.changeLanguage(newLang);
        document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Scale className="h-8 w-8 text-brand-gold" />
                        <span className="text-2xl font-bold tracking-tight">JuridiQa</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                        <Link to="#features" className="hover:text-brand-gold transition-colors">{t('nav.features')}</Link>
                        <Link to="#pricing" className="hover:text-brand-gold transition-colors">{t('nav.pricing')}</Link>
                        <Link to="/login" className="px-4 py-2 border border-brand-gold text-brand-gold rounded hover:bg-brand-gold hover:text-white transition-colors">
                            {t('nav.login')}
                        </Link>
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 rtl:space-x-reverse hover:text-brand-gold"
                        >
                            <Globe className="h-5 w-5" />
                            <span className="uppercase">{i18n.language}</span>
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-brand-navy border-t border-slate-700">
                        <div className="flex flex-col p-4 space-y-4">
                            <Link to="#features" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>{t('nav.features')}</Link>
                            <Link to="#pricing" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>{t('nav.pricing')}</Link>
                            <Link to="/login" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>{t('nav.login')}</Link>
                            <button onClick={toggleLanguage} className="flex items-center space-x-2 text-left hover:text-brand-gold">
                                <Globe className="h-5 w-5" />
                                <span>{i18n.language === 'fr' ? 'Arabe' : 'Français'}</span>
                            </button>
                        </div>
                    </div>
                )}
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-brand-navy text-slate-400 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} JuridiQa. {t('footer.rights')}</p>
                    <p className="text-sm mt-2">{t('footer.dev_by')}</p>
                </div>
            </footer>
        </div>
    );
}
