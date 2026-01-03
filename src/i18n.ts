import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'ar'],
        resources: {
            fr: {
                translation: {
                    nav: { features: 'Fonctionnalités', pricing: 'Tarifs', login: 'Connexion' },
                    footer: { rights: 'Tous droits réservés.', dev_by: 'Développé par des juristes marocains.' },
                    landing: {
                        hero_title: '1ère IA Juridique intelligente au Maroc',
                        hero_subtitle: 'Optimisez votre gestion contractuelle avec une précision juridique inégalée.',
                        cta_start: 'Commencer maintenant',
                        cta_demo: 'Voir la démo',
                        compliance_note: 'Conforme au D.O.C et aux lois spéciales.',
                        features_title: 'Pourquoi choisir JuridiQa ?'
                    },
                    features: {
                        ai_title: 'Intelligence Artificielle',
                        ai_desc: 'Analyse et suggestion basées sur le droit marocain.',
                        gen_title: 'Générateur Intelligent',
                        gen_desc: 'Créez des contrats SARL, CDD/CDI en quelques clics.',
                        crm_title: 'CRM Juridique',
                        crm_desc: 'Suivez vos tiers avec ICE, RC et alertes.'
                    },
                    sidebar: {
                        dashboard: 'Tableau de bord',
                        ai_assistant: 'Assistant IA',
                        monitoring: 'Veille Juridique',
                        crm: 'CRM Juridique',
                        generator: 'Générateur',
                        signatures: 'Signatures',
                        settings: 'Paramètres',
                        logout: 'Déconnexion'
                    },
                    header: {
                        search_placeholder: 'Rechercher un contrat, un tiers...',
                        toggle_lang: 'Changer la langue'
                    },
                    dashboard: {
                        title: 'Vue d\'ensemble',
                        health_score: 'Santé Juridique',
                        score_desc: 'Votre conformité est excellente.',
                        regulatory_watch: 'Veille Juridique Récente',
                        view_all: 'Voir tout',
                        new_contract: 'Nouveau Contrat',
                        check_compliance: 'Vérifier Conformité'
                    },
                    crm: {
                        title: 'Répertoire Tiers',
                        add_party: 'Ajouter un tiers',
                        search_placeholder: 'Rechercher par nom, ICE...',
                        party_name: 'Désignation',
                        identifiers: 'Identifiants (ICE/RC/CIN)',
                        status: 'Statut',
                        status_active: 'Actif',
                        status_pending: 'En attente'
                    },
                    generator: {
                        title: 'Générateur Intelligent',
                        subtitle: 'Créez vos documents juridiques conformes en quelques minutes.',
                        cat_corporate: 'Droit des Sociétés',
                        cat_labor: 'Droit Social',
                        cat_real_estate: 'Immobilier',
                        cat_commercial: 'Commercial',
                        tpl_sarl_statuts: 'Statuts SARL',
                        tpl_pv_ago: 'PV Assemblée Générale',
                        tpl_cdi: 'Contrat CDI',
                        tpl_cdd: 'Contrat CDD',
                        tpl_bail_habitation: 'Bail d\'habitation (Loi 67-12)',
                        tpl_bail_commercial: 'Bail Commercial (Loi 49-16)',
                        tpl_service_contract: 'Contrat de Prestation',
                        tpl_nda: 'Accord de Confidentialité',
                        compliance_check: 'Garantie de conformité',
                        compliance_desc: 'Tous nos modèles sont régulièrement mis à jour conformément au D.O.C et aux dernières lois en vigueur.',
                        wizard_title: 'Assistant de Création'
                    },
                    ai: {
                        status_active: 'En ligne',
                        mode_expert: 'Mode Expert',
                        thinking: 'Réflexion en cours...',
                        input_placeholder: 'Posez votre question juridique...',
                        upload_pdf: 'Analyser un PDF',
                        disclaimer: 'L\'IA peut faire des erreurs. Vérifiez toujours avec un professionnel.'
                    },
                    pricing: {
                        title: 'Plans Tarifaires',
                        subtitle: 'Choisissez le plan adapté à vos besoins juridiques.',
                        popular: 'Le plus populaire',
                        month: 'mois',
                        cta_subscribe: 'Choisir ce plan',
                        plan_freelance: 'Freelance',
                        plan_pme: 'PME',
                        plan_expert: 'Expert',
                        feat_basic_gen: 'Générateur de base',
                        feat_limited_ai: 'IA Standard (Flash)',
                        feat_1_user: '1 Utilisateur',
                        feat_unlimited_gen: 'Générateur illimité',
                        feat_standard_ai: 'IA Avancée (Pro)',
                        feat_5_users: 'Jusqu\'à 5 utilisateurs',
                        feat_crm_basic: 'CRM Intégré',
                        feat_all_unlimited: 'Tout illimité',
                        feat_gemini_pro: 'Mode Thinking High (Gemini 3 Pro)',
                        feat_unlimited_users: 'Utilisateurs illimités',
                        feat_priority_support: 'Support Prioritaire',
                        feat_api_access: 'Accès API'
                    },
                    signatures: {
                        title: 'Signature Électronique',
                        subtitle: 'Gérez vos flux de signature conformes à la loi 53-05.',
                        new_envelope: 'Nouveau parapheur',
                        status_signed: 'Signé',
                        status_pending: 'En attente',
                        status_rejected: 'Rejeté',
                        recent_docs: 'Documents récents',
                        doc_name: 'Document',
                        signatories: 'Signataires',
                        date: 'Date',
                        status: 'Statut'
                    }
                }
            },
            ar: {
                translation: {
                    nav: { features: 'المميزات', pricing: 'الأسعار', login: 'تسجيل الدخول' },
                    footer: { rights: 'جميع الحقوق محفوظة.', dev_by: 'تم تطويره من قبل خبراء قانونيين مغاربة.' },
                    landing: {
                        hero_title: 'أول ذكاء اصطناعي قانوني في المغرب',
                        hero_subtitle: 'حسن إدارتك للعقود بدقة قانونية لا مثيل لها.',
                        cta_start: 'ابدأ الآن',
                        cta_demo: 'شاهد العرض',
                        compliance_note: 'متوافق مع ق.ل.ع والقوانين الخاصة.',
                        features_title: 'لماذا تختار JuridiQa؟'
                    },
                    features: {
                        ai_title: 'الذكاء الاصطناعي',
                        ai_desc: 'تحليل واقتراحات مبنية على القانون المغربي.',
                        gen_title: 'المولد الذكي',
                        gen_desc: 'أنشئ عقود SARL و CDD/CDI في بضع نقرات.',
                        crm_title: 'إدارة العلاقات القانونية',
                        crm_desc: 'تتبع الأطراف مع ICE و RC والتنبيهات.'
                    },
                    sidebar: {
                        dashboard: 'لوحة القيادة',
                        ai_assistant: 'المساعد الذكي',
                        monitoring: 'الرصد القانوني',
                        crm: 'إدارة العلاقات',
                        generator: 'المولد الذكي',
                        signatures: 'التوقيعات',
                        settings: 'الإعدادات',
                        logout: 'تسجيل الخروج'
                    },
                    header: {
                        search_placeholder: 'بحث عن عقد أو طرف...',
                        toggle_lang: 'تغيير اللغة'
                    },
                    dashboard: {
                        title: 'نظرة عامة',
                        health_score: 'الصحة القانونية',
                        score_desc: 'امتثالك القانوني ممتاز.',
                        regulatory_watch: 'آخر المستجدات القانونية',
                        view_all: 'عرض الكل',
                        new_contract: 'عقد جديد',
                        check_compliance: 'تحقق من الامتثال'
                    },
                    crm: {
                        title: 'دليل الأطراف',
                        add_party: 'إضافة طرف',
                        search_placeholder: 'بحث بالاسم، ICE...',
                        party_name: 'التسمية',
                        identifiers: 'المعرفات (ICE/RC/CIN)',
                        status: 'الحالة',
                        status_active: 'نشط',
                        status_pending: 'قيد الانتظار'
                    },
                    generator: {
                        title: 'المولد الذكي',
                        subtitle: 'أنشئ وثائقك القانونية المطابقة في دقائق معدودة.',
                        cat_corporate: 'قانون الشركات',
                        cat_labor: 'قانون الشغل',
                        cat_real_estate: 'العقارات',
                        cat_commercial: 'تجاري',
                        tpl_sarl_statuts: 'نظام أساسي SARL',
                        tpl_pv_ago: 'محضر جمع عام',
                        tpl_cdi: 'عقد عمل CDI',
                        tpl_cdd: 'عقد عمل CDD',
                        tpl_bail_habitation: 'عقد كراء سكني (قانون 67-12)',
                        tpl_bail_commercial: 'عقد كراء تجاري (قانون 49-16)',
                        tpl_service_contract: 'عقد تقديم خدمات',
                        tpl_nda: 'اتفاقية عدم الإفصاح',
                        compliance_check: 'ضمان الامتثال',
                        compliance_desc: 'يتم تحديث جميع نماذجنا بانتظام وفقًا لـ ق.ل.ع وأحدث القوانين المعمول بها.',
                        wizard_title: 'مساعد الإنشاء'
                    },
                    ai: {
                        status_active: 'متصل',
                        mode_expert: 'وضع الخبير',
                        thinking: 'يفكر...',
                        input_placeholder: 'اطرح سؤالك القانوني...',
                        upload_pdf: 'تحليل ملف PDF',
                        disclaimer: 'قد يرتكب الذكاء الاصطناعي أخطاء. تحقق دائمًا مع متخصص.'
                    },
                    pricing: {
                        title: 'خطط الأسعار',
                        subtitle: 'اختر الخطة المناسبة لاحتياجاتك القانونية.',
                        popular: 'الأكثر شيوعًا',
                        month: 'شهر',
                        cta_subscribe: 'اختر هذه الخطة',
                        plan_freelance: 'مستقل',
                        plan_pme: 'مقاولات صغيرة ومتوسطة',
                        plan_expert: 'خبير',
                        feat_basic_gen: 'مولد أساسي',
                        feat_limited_ai: 'ذكاء اصطناعي قياسي (Flash)',
                        feat_1_user: 'مستخدم واحد',
                        feat_unlimited_gen: 'مولد غير محدود',
                        feat_standard_ai: 'ذكاء اصطناعي متقدم (Pro)',
                        feat_5_users: 'حتى 5 مستخدمين',
                        feat_crm_basic: 'CRM مدمج',
                        feat_all_unlimited: 'كل شيء غير محدود',
                        feat_gemini_pro: 'وضع التفكير العميق (Gemini 3 Pro)',
                        feat_unlimited_users: 'مستخدمون غير محدودين',
                        feat_priority_support: 'دعم ذو أولوية',
                        feat_api_access: 'وصول API'
                    },
                    signatures: {
                        title: 'التوقيع الإلكتروني',
                        subtitle: 'أدر تدفقات التوقيع الخاصة بك وفقًا للقانون 53-05.',
                        new_envelope: 'ظرف جديد',
                        status_signed: 'موقع',
                        status_pending: 'قيد الانتظار',
                        status_rejected: 'مرفوض',
                        recent_docs: 'المستندات الأخيرة',
                        doc_name: 'المستند',
                        signatories: 'الموقعون',
                        date: 'التاريخ',
                        status: 'الحالة'
                    }
                }
            }
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;
