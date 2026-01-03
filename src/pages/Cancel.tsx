
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

export default function Cancel() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <XCircle className="h-16 w-16 text-red-500" />
                </div>
                <h1 className="text-2xl font-bold text-brand-navy mb-4">Paiement Annulé</h1>
                <p className="text-slate-600 mb-8">
                    Le processus de paiement a été annulé. Aucun montant n'a été débité.
                </p>
                <Link
                    to="/"
                    className="block w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}
