

import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Success() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h1 className="text-2xl font-bold text-brand-navy mb-4">Paiement Réussi !</h1>
                <p className="text-slate-600 mb-8">
                    Merci pour votre abonnement. Votre compte a été mis à jour avec les nouvelles fonctionnalités.
                </p>
                <Link
                    to="/dashboard"
                    className="block w-full py-3 bg-brand-gold text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors"
                >
                    Accéder au Tableau de Bord
                </Link>
            </div>
        </div>
    );
}
