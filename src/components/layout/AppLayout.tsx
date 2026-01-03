import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />
            <Header />
            <main className="ml-64 rtl:ml-0 rtl:mr-64 p-8 transition-all duration-300">
                <Outlet />
            </main>
        </div>
    );
}
