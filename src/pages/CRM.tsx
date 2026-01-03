import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, Building2, User, FileBadge, MoreHorizontal } from 'lucide-react';

interface Party {
    id: number;
    type: 'company' | 'person';
    name: string;
    ice?: string; // Must be 15 digits
    rc?: string;
    if?: string;
    patente?: string;
    cin?: string;
    status: 'active' | 'pending';
}

const MOCK_DATA: Party[] = [
    { id: 1, type: 'company', name: 'TechnoMaroc SARL', ice: '001528394000054', rc: '12345', if: '9876543', patente: '112233', status: 'active' },
    { id: 2, type: 'person', name: 'Karim Bennani', cin: 'AB123456', status: 'active' },
    { id: 3, type: 'company', name: 'Immobilier Du Nord', ice: '002938475000021', rc: '54321', if: '1234567', patente: '445566', status: 'pending' },
];

export default function CRM() {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [parties, setParties] = useState<Party[]>(MOCK_DATA);
    const [showForm, setShowForm] = useState(false);

    // Form State
    const [newParty, setNewParty] = useState<Partial<Party>>({ type: 'company', status: 'active' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const filteredData = parties.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.ice && p.ice.includes(searchTerm))
    );

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!newParty.name) newErrors.name = "Le nom est obligatoire";

        if (newParty.type === 'company') {
            if (!newParty.ice) {
                newErrors.ice = "L'ICE est obligatoire pour les sociétés";
            } else if (!/^\d{15}$/.test(newParty.ice)) {
                newErrors.ice = "L'ICE doit contenir exactement 15 chiffres";
            }

            if (!newParty.rc) newErrors.rc = "Le RC est obligatoire";
        }

        if (newParty.type === 'person') {
            if (!newParty.cin) newErrors.cin = "Le CIN est obligatoire";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const party: Party = {
                id: Date.now(),
                type: newParty.type as 'company' | 'person',
                name: newParty.name!,
                ice: newParty.ice,
                rc: newParty.rc,
                if: newParty.if,
                patente: newParty.patente,
                cin: newParty.cin,
                status: 'active' // Default active
            };
            setParties([...parties, party]);
            setShowForm(false);
            setNewParty({ type: 'company', status: 'active' });
            setErrors({});
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-brand-navy">{t('crm.title', 'Gestion Clients')}</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center justify-center px-4 py-2 bg-brand-gold text-white rounded-lg hover:bg-yellow-600 transition-colors"
                >
                    <Plus className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    <span>{t('crm.add_party', 'Ajouter un client')}</span>
                </button>
            </div>

            {/* Simple Inline Form for Demo */}
            {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 animate-in fade-in slide-in-from-top-4">
                    <h3 className="font-bold mb-4 text-brand-navy">Nouveau Client</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-full">
                            <label className="block text-sm font-medium mb-1">Type</label>
                            <select
                                className="w-full p-2 border rounded"
                                value={newParty.type}
                                onChange={e => setNewParty({ ...newParty, type: e.target.value as any })}
                            >
                                <option value="company">Société</option>
                                <option value="person">Particulier</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Nom / Raison Sociale</label>
                            <input
                                className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
                                value={newParty.name || ''}
                                onChange={e => setNewParty({ ...newParty, name: e.target.value })}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {newParty.type === 'company' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium mb-1">ICE (15 chiffres)</label>
                                    <input
                                        className={`w-full p-2 border rounded ${errors.ice ? 'border-red-500' : ''}`}
                                        value={newParty.ice || ''}
                                        onChange={e => setNewParty({ ...newParty, ice: e.target.value })}
                                        placeholder="000000000000000"
                                    />
                                    {errors.ice && <p className="text-red-500 text-xs mt-1">{errors.ice}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">RC</label>
                                    <input
                                        className={`w-full p-2 border rounded ${errors.rc ? 'border-red-500' : ''}`}
                                        value={newParty.rc || ''}
                                        onChange={e => setNewParty({ ...newParty, rc: e.target.value })}
                                    />
                                    {errors.rc && <p className="text-red-500 text-xs mt-1">{errors.rc}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Identifiant Fiscal</label>
                                    <input
                                        className="w-full p-2 border rounded"
                                        value={newParty.if || ''}
                                        onChange={e => setNewParty({ ...newParty, if: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Patente</label>
                                    <input
                                        className="w-full p-2 border rounded"
                                        value={newParty.patente || ''}
                                        onChange={e => setNewParty({ ...newParty, patente: e.target.value })}
                                    />
                                </div>
                            </>
                        )}

                        {newParty.type === 'person' && (
                            <div>
                                <label className="block text-sm font-medium mb-1">CIN</label>
                                <input
                                    className={`w-full p-2 border rounded ${errors.cin ? 'border-red-500' : ''}`}
                                    value={newParty.cin || ''}
                                    onChange={e => setNewParty({ ...newParty, cin: e.target.value })}
                                />
                                {errors.cin && <p className="text-red-500 text-xs mt-1">{errors.cin}</p>}
                            </div>
                        )}

                        <div className="col-span-full flex justify-end gap-2 mt-4">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-brand-navy text-white rounded hover:bg-blue-900"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 rtl:right-3 rtl:left-auto" />
                        <input
                            type="text"
                            placeholder={t('crm.search_placeholder', 'Rechercher par nom, ICE...')}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-gold"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left rtl:text-right">
                        <thead className="bg-slate-50 text-slate-500 font-medium">
                            <tr>
                                <th className="px-6 py-4">{t('crm.party_name', 'Nom / Raison Sociale')}</th>
                                <th className="px-6 py-4">{t('crm.identifiers', 'Identifiants')}</th>
                                <th className="px-6 py-4">{t('crm.status', 'Statut')}</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredData.map((party) => (
                                <tr key={party.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mr-3 rtl:ml-3 rtl:mr-0">
                                                {party.type === 'company' ? <Building2 className="h-5 w-5" /> : <User className="h-5 w-5" />}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-brand-navy">{party.name}</div>
                                                <div className="text-xs text-slate-400 uppercase">{party.type === 'company' ? 'Société' : 'Particulier'}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm space-y-1 text-slate-600">
                                            {party.ice && <div className="flex items-center font-mono"><FileBadge className="h-3 w-3 mr-1 rtl:ml-1 rtl:mr-0 text-brand-gold" /> ICE: {party.ice}</div>}
                                            {party.rc && <div>RC: {party.rc} | IF: {party.if}</div>}
                                            {party.cin && <div>CIN: {party.cin}</div>}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${party.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {party.status === 'active' ? t('crm.status_active', 'Actif') : t('crm.status_pending', 'En attente')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right rtl:text-left">
                                        <button className="p-2 text-slate-400 hover:text-brand-navy rounded-full hover:bg-slate-100">
                                            <MoreHorizontal className="h-5 w-5" />
                                        </button>
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

