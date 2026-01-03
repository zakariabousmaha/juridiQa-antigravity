import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Bot, Paperclip, Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { generateLegalAdvice, type UserPlan } from '../services/ai';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    isThinking?: boolean;
    model?: string;
}

export default function AIAssistant() {
    const { t, i18n } = useTranslation();
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    // Demo state: Allow user to toggle plan to see difference
    const [currentPlan, setCurrentPlan] = useState<UserPlan>('Entreprise');
    const scrollRef = useRef<HTMLDivElement>(null);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: i18n.language === 'fr'
                ? "Bonjour Maître. Je suis votre assistant juridique expert en droit marocain. Comment puis-je vous aider aujourd'hui ? (Droit des sociétés, Contrats, Procédures...)"
                : "أهلاً أستاذ. أنا مساعدك القانوني الخبير في القانون المغربي. كيف يمكنني مساعدتك اليوم؟ (قانون الشركات، العقود، الإجراءات...)"
        }
    ]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const response = await generateLegalAdvice(userMsg.content, currentPlan);

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response.text,
                model: response.modelUsed
            };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error("AI Error:", error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "Désolé, une erreur est survenue lors du traitement de votre demande."
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

            {/* Header */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="h-10 w-10 bg-brand-navy text-white rounded-lg flex items-center justify-center">
                        <Bot className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="font-bold text-brand-navy flex items-center gap-2">
                            JuridiQa AI <span className="text-xs bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full">
                                {currentPlan === 'Entreprise' ? 'Gemini 3 Pro' : 'Gemini 3 Flash'}
                            </span>
                        </h2>
                        <p className="text-xs text-slate-500">{t('ai.status_active')}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <select
                        value={currentPlan}
                        onChange={(e) => setCurrentPlan(e.target.value as UserPlan)}
                        className="text-xs border-slate-200 rounded-lg p-1"
                        title="Simuler le plan utilisateur"
                    >
                        <option value="Starter">Starter</option>
                        <option value="Pro">Pro</option>
                        <option value="Entreprise">Entreprise</option>
                    </select>
                    <button className="text-xs flex items-center text-slate-500 hover:text-brand-navy bg-white border border-slate-200 px-3 py-1.5 rounded-full transition-colors">
                        <Sparkles className="h-3 w-3 mr-1 rtl:ml-1 rtl:mr-0 text-brand-gold" />
                        {currentPlan === 'Entreprise' ? 'Mode Expert (Thinking)' : 'Mode Standard'}
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50" ref={scrollRef}>
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${msg.role === 'user'
                            ? 'bg-brand-navy text-white rounded-tr-sm rtl:rounded-tr-2xl rtl:rounded-tl-sm'
                            : 'bg-white border border-slate-100 shadow-sm text-slate-800 rounded-tl-sm rtl:rounded-tl-2xl rtl:rounded-tr-sm'
                            }`}>
                            {msg.model && (
                                <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
                                    <Sparkles className="h-3 w-3" /> {msg.model}
                                </div>
                            )}
                            <p className="leading-relaxed whitespace-pre-wrap text-sm">{msg.content}</p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-sm rtl:rounded-tl-2xl rtl:rounded-tr-sm px-4 py-3 flex items-center space-x-2 rtl:space-x-reverse">
                            <Loader2 className="h-4 w-4 animate-spin text-brand-gold" />
                            <span className="text-xs text-slate-400 font-medium animate-pulse">
                                {currentPlan === 'Entreprise' ? 'Raisonnement juridique approfondi...' : 'Analyse en cours...'}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-200">
                <div className="relative flex items-center border border-slate-300 rounded-xl focus-within:ring-2 focus-within:ring-brand-gold/20 focus-within:border-brand-gold transition-all bg-slate-50 focus-within:bg-white">
                    <button
                        className="p-3 text-slate-400 hover:text-brand-navy transition-colors relative group"
                        title={t('ai.upload_pdf')}
                    >
                        <Paperclip className="h-5 w-5" />
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
                    </button>
                    <input
                        type="text"
                        className="flex-1 bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400"
                        placeholder={t('ai.input_placeholder')}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className={`p-2 m-1 rounded-lg transition-all ${input.trim() && !isTyping ? 'bg-brand-navy text-white shadow-md hover:bg-brand-navy/90' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            }`}
                    >
                        <Send className="h-5 w-5 rtl:rotate-180" />
                    </button>
                </div>
                <div className="text-center mt-2 flex items-center justify-center gap-1">
                    <AlertTriangle className="h-3 w-3 text-slate-400" />
                    <p className="text-[10px] text-slate-400">{t('ai.disclaimer')}</p>
                </div>
            </div>
        </div>
    );
}
