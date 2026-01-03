import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { PLANS, checkout } from '../services/payment';

export default function Pricing() {
    const { t } = useTranslation();

    const handleSubscribe = async (planKey: keyof typeof PLANS) => {
        try {
            await checkout(planKey);
        } catch (error) {
            console.error("Checkout failed:", error);
            alert("Une erreur est survenue lors de la redirection vers le paiement.");
        }
    };

    const plans = [
        {
            key: 'Starter',
            id: PLANS.Starter.id,
            name: 'Starter', // Formerly Freelance
            price: PLANS.Starter.price,
            features: [
                '5 contrats / mois',
                'Modèles de base',
                'Export PDF standard'
            ],
            color: 'bg-white',
            btnColor: 'bg-slate-100 text-slate-800 hover:bg-slate-200'
        },
        {
            key: 'Pro',
            id: PLANS.Pro.id,
            name: 'Pro', // Formerly TPE/PME
            price: PLANS.Pro.price,
            features: [
                'Contrats illimités',
                'Signature électronique',
                'Support IA standard (Gemini 3 Flash)',
                'Gestion multi-utilisateurs'
            ],
            color: 'bg-white border-2 border-brand-gold relative',
            popular: true,
            btnColor: 'bg-brand-gold text-white hover:bg-yellow-600'
        },
        {
            key: 'Entreprise',
            id: PLANS.Entreprise.id,
            name: 'Entreprise', // Formerly Expert
            price: PLANS.Entreprise.price,
            features: [
                'Tout illimité',
                'IA Gemini 3 Pro (Thinking Mode High)',
                'Analyse documents externes',
                'Support prioritaire 24/7'
            ],
            color: 'bg-brand-navy text-white',
            btnColor: 'bg-white text-brand-navy hover:bg-slate-100'
        }
    ];

    return (
        <div className="py-20 bg-slate-50" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-navy">{t('pricing.title', 'Nos Tarifs')}</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">{t('pricing.subtitle', 'Choisissez le plan adapté à vos besoins juridiques')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div key={plan.key} className={`rounded-2xl p-8 shadow-lg flex flex-col ${plan.color}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    Recommandé
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-2 ${plan.key === 'Entreprise' ? 'text-white' : 'text-brand-navy'}`}>{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className={`text-4xl font-extrabold ${plan.key === 'Entreprise' ? 'text-white' : 'text-brand-navy'}`}>{plan.price}</span>
                                <span className={`ml-1 text-sm ${plan.key === 'Entreprise' ? 'text-slate-300' : 'text-slate-500'}`}>DH / mois</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className={`h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0 ${plan.key === 'Entreprise' ? 'text-brand-gold' : 'text-brand-navy'}`} />
                                        <span className={`text-sm ${plan.key === 'Entreprise' ? 'text-slate-200' : 'text-slate-600'}`}>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleSubscribe(plan.key as any)}
                                className={`w-full py-3 rounded-lg font-bold text-center transition-all ${plan.btnColor}`}
                            >
                                S'abonner
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
