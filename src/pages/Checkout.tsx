import { useTranslation } from 'react-i18next';
import { CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <Link to="/" className="inline-flex items-center text-brand-navy hover:text-brand-gold mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    <span>{t('checkout.back_home', 'Retour à l\'accueil')}</span>
                </Link>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-center mb-6">
                        <div className="h-16 w-16 bg-brand-gold/10 rounded-full flex items-center justify-center">
                            <CreditCard className="h-8 w-8 text-brand-gold" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-center text-brand-navy mb-2">
                        {t('checkout.title', 'Finaliser votre abonnement')}
                    </h1>
                    <p className="text-center text-slate-500 mb-8">
                        {t('checkout.subtitle', 'Paiement sécurisé par Stripe')}
                    </p>

                    <div className="border border-slate-200 rounded-lg p-6 mb-6">
                        <h3 className="font-semibold text-brand-navy mb-4">
                            {t('checkout.order_summary', 'Récapitulatif de commande')}
                        </h3>
                        <div className="flex justify-between items-center py-2 border-b border-slate-100">
                            <span className="text-slate-600">{t('checkout.plan', 'Plan Pro')}</span>
                            <span className="font-medium text-slate-800">990 MAD/mois</span>
                        </div>
                        <div className="flex justify-between items-center py-2 font-bold text-brand-navy">
                            <span>{t('checkout.total', 'Total')}</span>
                            <span>990 MAD/mois</span>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-brand-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        {t('checkout.pay_now', 'Payer maintenant')}
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-4">
                        {t('checkout.secure_notice', 'Paiement 100% sécurisé. Vos données sont chiffrées.')}
                    </p>
                </div>
            </div>
        </div>
    );
}
