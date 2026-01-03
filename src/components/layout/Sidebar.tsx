import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, FileText, Scale, Users, FileSignature, Settings, LogOut, Bot } from 'lucide-react';
import clsx from 'clsx';

export default function Sidebar() {
    const { t } = useTranslation();

    const navItems = [
        { icon: LayoutDashboard, label: t('sidebar.dashboard'), to: '/dashboard' },
        { icon: Bot, label: t('sidebar.ai_assistant'), to: '/ai-assistant' },
        { icon: Scale, label: t('sidebar.monitoring'), to: '/monitoring' },
        { icon: Users, label: t('sidebar.crm'), to: '/crm' },
        { icon: FileText, label: t('sidebar.generator'), to: '/generator' },
        { icon: FileSignature, label: t('sidebar.signatures'), to: '/signatures' },
    ];

    return (
        <aside className="w-64 bg-brand-navy text-white flex flex-col h-screen fixed top-0 ltr:left-0 rtl:right-0 z-40 transition-all duration-300">
            <div className="p-6 flex items-center justify-center border-b border-slate-700">
                <Scale className="h-8 w-8 text-brand-gold mr-2 rtl:ml-2 rtl:mr-0" />
                <span className="text-2xl font-bold">JuridiQa</span>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    clsx(
                                        'flex items-center px-6 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors',
                                        isActive && 'bg-brand-gold/10 text-brand-gold border-r-4 rtl:border-r-0 rtl:border-l-4 border-brand-gold'
                                    )
                                }
                            >
                                <item.icon className="h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0" />
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-slate-700">
                <NavLink to="/settings" className="flex items-center px-4 py-2 text-slate-400 hover:text-white transition-colors mb-2">
                    <Settings className="h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0" />
                    <span>{t('sidebar.settings')}</span>
                </NavLink>
                <button className="flex items-center w-full px-4 py-2 text-red-400 hover:text-red-300 transition-colors">
                    <LogOut className="h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0" />
                    <span>{t('sidebar.logout')}</span>
                </button>
            </div>
        </aside>
    );
}
