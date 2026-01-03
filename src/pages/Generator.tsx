import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

type Language = 'fr' | 'ar';

export default function Generator() {
    const { t } = useTranslation();
    const [docLanguage, setDocLanguage] = useState<Language>('fr');

    // Mock templates
    const templates = [
        { id: 'cdi', name: { fr: 'Contrat CDI', ar: 'عقد عمل غير محدد المدة' } },
        { id: 'cdd', name: { fr: 'Contrat CDD', ar: 'عقد عمل محدد المدة' } },
        { id: 'bail', name: { fr: 'Contrat de Bail', ar: 'عقد كراء' } }
    ];

    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-brand-navy">{t('generator.title', 'Générateur Intelligent')}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Configuration Panel */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Type de document
                        </label>
                        <div className="space-y-2">
                            {templates.map(temp => (
                                <button
                                    key={temp.id}
                                    onClick={() => setSelectedTemplate(temp)}
                                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${selectedTemplate.id === temp.id
                                        ? 'border-brand-gold bg-yellow-50 text-brand-navy'
                                        : 'border-slate-200 hover:border-brand-gold/50'
                                        }`}
                                >
                                    <div className="font-semibold">{docLanguage === 'ar' ? temp.name.ar : temp.name.fr}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Langue du document
                        </label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setDocLanguage('fr')}
                                className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${docLanguage === 'fr'
                                    ? 'bg-brand-navy text-white border-brand-navy'
                                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                    }`}
                            >
                                Français
                            </button>
                            <button
                                onClick={() => setDocLanguage('ar')}
                                className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${docLanguage === 'ar'
                                    ? 'bg-brand-navy text-white border-brand-navy'
                                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                    }`}
                            >
                                العربية
                            </button>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-brand-gold text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
                        <span>Générer</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>

                {/* Preview Panel */}
                <div className="lg:col-span-2 bg-slate-100 rounded-xl p-6 flex flex-col items-center justify-center min-h-[500px]">
                    <div
                        className="bg-white shadow-lg w-full max-w-[210mm] min-h-[297mm] p-[20mm] text-sm leading-relaxed relative"
                        dir={docLanguage === 'ar' ? 'rtl' : 'ltr'}
                        lang={docLanguage}
                    >
                        {/* Mock Content */}
                        <div className="font-serif text-slate-800">
                            <div className="text-center mb-12">
                                <h1 className="text-2xl font-bold uppercase underline">
                                    {docLanguage === 'ar' ? selectedTemplate.name.ar : selectedTemplate.name.fr}
                                </h1>
                            </div>

                            <div className="space-y-6 text-justify">
                                <p>
                                    {docLanguage === 'ar'
                                        ? 'تم الاتفاق والتراضي بين الموقعين أسفله:'
                                        : 'Entre les soussignés:'}
                                </p>

                                <div className="pl-4 pr-4 border-l-2 border-r-0 rtl:border-r-2 rtl:border-l-0 border-slate-200 py-2">
                                    <p className="font-bold">
                                        {docLanguage === 'ar' ? 'الطرف الأول: شركة [اسم الشركة]' : 'D\'une part: La société [Nom Société]'}
                                    </p>
                                    <p className="font-bold mt-4">
                                        {docLanguage === 'ar' ? 'الطرف الثاني: السيد(ة) [اسم الموظف]' : 'D\'autre part: M/Mme [Nom Employé]'}
                                    </p>
                                </div>

                                <p>
                                    {docLanguage === 'ar'
                                        ? 'تم الاتفاق على البنود التالية وفقاً لمقتضيات مدونة الشغل المغربية:'
                                        : 'Il a été convenu et arrêté ce qui suit, conformément aux dispositions du Code du Travail marocain:'}
                                </p>

                                {/* Placeholder lines */}
                                <div className="space-y-3 opacity-30 mt-8">
                                    <div className="h-2 bg-slate-300 rounded w-full"></div>
                                    <div className="h-2 bg-slate-300 rounded w-11/12"></div>
                                    <div className="h-2 bg-slate-300 rounded w-full"></div>
                                    <div className="h-2 bg-slate-300 rounded w-4/5"></div>
                                </div>
                            </div>
                        </div>

                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                            <div className="text-6xl font-black rotate-45">JURIDIQA PREVIEW</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
