import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, AlertCircle, FileText, CheckCircle } from 'lucide-react';

export default function Dashboard() {
    const { t } = useTranslation();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-brand-navy">{t('dashboard.title')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Legal Health Score Widget */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-1">
                    <h2 className="text-xl font-semibold mb-4 text-brand-navy">{t('dashboard.health_score')}</h2>
                    <div className="flex items-center justify-center py-6">
                        <div className="relative h-40 w-40">
                            <svg className="h-full w-full" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#e2e8f0"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#b45309"
                                    strokeWidth="3"
                                    strokeDasharray="85, 100"
                                    className="animate-spin-slow"
                                />
                                <text x="18" y="20.35" className="text-[8px] font-bold fill-brand-navy text-center" textAnchor="middle">85%</text>
                            </svg>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-2">{t('dashboard.score_desc')}</p>
                </div>

                {/* Regulatory Watch Feed */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-brand-navy">{t('dashboard.regulatory_watch')}</h2>
                        <button className="text-sm text-brand-gold hover:underline">{t('dashboard.view_all')}</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start p-3 hover:bg-slate-50 rounded-lg transition-colors border-l-4 border-brand-navy">
                                <FileText className="h-5 w-5 text-slate-400 mt-1 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium text-slate-800">Bulletin Officiel N° 725{i}</h3>
                                    <p className="text-sm text-slate-500 line-clamp-2">Décret n° 2.23.{i * 10} relatif aux délais de paiement... Nouvelle réglementation impactant les délais fournisseurs.</p>
                                    <span className="text-xs text-slate-400 mt-1 block">1{i} Déc 2025</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:border-brand-gold transition-all flex flex-col items-center justify-center text-center gap-2">
                    <div className="h-10 w-10 bg-blue-50 text-brand-navy rounded-full flex items-center justify-center">
                        <TrendingUp className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-slate-700">{t('dashboard.new_contract')}</span>
                </button>
                <button className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:border-brand-gold transition-all flex flex-col items-center justify-center text-center gap-2">
                    <div className="h-10 w-10 bg-yellow-50 text-brand-gold rounded-full flex items-center justify-center">
                        <AlertCircle className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-slate-700">{t('dashboard.check_compliance')}</span>
                </button>
            </div>
        </div>
    );
}
