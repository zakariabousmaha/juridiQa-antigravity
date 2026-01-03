import { useTranslation } from 'react-i18next';
import { ShieldCheck, Brain, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Pricing from './Pricing';

export default function Antigravity() {
    const { t } = useTranslation();

    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        La 1ère IA Juridique intelligente au Maroc
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
                        {t('landing.hero_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/register" className="px-8 py-4 bg-brand-gold text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                            {t('landing.cta_start')} <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link to="#demo" className="px-8 py-4 bg-slate-700/50 backdrop-blur text-white text-lg font-semibold rounded-lg hover:bg-slate-700 transition-colors">
                            {t('landing.cta_demo')}
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-slate-400 font-medium">
                        Conformité stricte avec le D.O.C. Développé par des juristes marocains.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="container mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold text-center text-brand-navy mb-16">{t('landing.features_title')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 text-brand-navy rounded-lg flex items-center justify-center mb-4">
                            <Brain className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t('features.ai_title')}</h3>
                        <p className="text-slate-600">{t('features.ai_desc')}</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-yellow-100 text-brand-gold rounded-lg flex items-center justify-center mb-4">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t('features.gen_title')}</h3>
                        <p className="text-slate-600">{t('features.gen_desc')}</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-4">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t('features.crm_title')}</h3>
                        <p className="text-slate-600">{t('features.crm_desc')}</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <Pricing />
        </div>
    );
}
