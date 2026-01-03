import { useTranslation } from 'react-i18next';
import { Clock, CheckCircle, XCircle, Plus, FileText } from 'lucide-react';

export default function Signatures() {
    const { t } = useTranslation();

    const documents = [
        { id: 1, name: 'Contrat de Bail - Appt 4', status: 'signed', date: '2025-12-10', signatories: ['Ahmed Y.', 'Société Immo'] },
        { id: 2, name: 'PV AGO 2024', status: 'pending', date: '2025-12-18', signatories: ['Actionnaires', 'Gérant'] },
        { id: 3, name: 'Contrat Prestation Web', status: 'rejected', date: '2025-12-15', signatories: ['Agency X', 'Client Y'] },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-brand-navy">{t('signatures.title')}</h1>
                    <p className="text-slate-500 mt-1">{t('signatures.subtitle')}</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-brand-gold text-white rounded-lg hover:bg-yellow-600 transition-colors">
                    <Plus className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    <span>{t('signatures.new_envelope')}</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['signed', 'pending', 'rejected'].map(status => (
                    <div key={status} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-brand-navy capitalize">{t(`signatures.status_${status}`)}</h3>
                            <div className={`p-2 rounded-full ${status === 'signed' ? 'bg-green-100 text-green-600' :
                                status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                                }`}>
                                {status === 'signed' ? <CheckCircle className="h-4 w-4" /> :
                                    status === 'pending' ? <Clock className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-800">
                            {documents.filter(d => d.status === status).length}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                    <h3 className="font-semibold text-brand-navy">{t('signatures.recent_docs')}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left rtl:text-right">
                        <thead className="bg-slate-50 text-slate-500 font-medium text-sm">
                            <tr>
                                <th className="px-6 py-4">{t('signatures.doc_name')}</th>
                                <th className="px-6 py-4">{t('signatures.signatories')}</th>
                                <th className="px-6 py-4">{t('signatures.date')}</th>
                                <th className="px-6 py-4">{t('signatures.status')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {documents.map((doc) => (
                                <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <FileText className="h-5 w-5 text-slate-400 mr-3 rtl:ml-3 rtl:mr-0" />
                                            <span className="font-medium text-slate-800">{doc.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 text-sm">
                                        {doc.signatories.join(', ')}
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-sm">
                                        {doc.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${doc.status === 'signed' ? 'bg-green-100 text-green-700' :
                                            doc.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {t(`signatures.status_${doc.status}`)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
