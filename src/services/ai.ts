
export type UserPlan = 'Starter' | 'Pro' | 'Entreprise';

interface AIResponse {
    text: string;
    modelUsed: string;
}

export const generateLegalAdvice = async (
    query: string,
    plan: UserPlan = 'Starter'
): Promise<AIResponse> => {

    const isEnterprise = plan === 'Entreprise';

    // Configuration based on plan
    const model = isEnterprise ? 'gemini-3-pro-preview' : 'gemini-3-flash';
    const thinkingLevel = isEnterprise ? 'High' : undefined;

    console.log(`Generating advice using Model: ${model}, Thinking: ${thinkingLevel || 'Standard'}`);

    // Mocking the API call for now. In a real scenario, this would call your backend or the Gemini API directly.
    // Using a timeout to simulate network latency.
    await new Promise(resolve => setTimeout(resolve, 2000));

    const content = isEnterprise
        ? `[GEMINI 3 PRO - Deep Reasoning]\n\nBasé sur une analyse approfondie du D.O.C et de la jurisprudence marocaine récente :\n\n${mockResponseFor(query)}`
        : `[Standard Analysis]\n\nVoici les éléments clés selon le droit marocain :\n\n${mockResponseFor(query)}`;

    return {
        text: content,
        modelUsed: model
    };
};

function mockResponseFor(query: string): string {
    if (query.toLowerCase().includes("contrat")) {
        return "Pour ce type de contrat, assurez-vous de vérifier les articles 230 et suivants du D.O.C. Les clauses de résiliation doivent être explicites.";
    }
    return "Votre demande nécessite une revue des statuts de la société et des dernières modifications du registre de commerce.";
}
