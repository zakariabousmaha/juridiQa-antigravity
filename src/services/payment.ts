import { loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLIC_KEY = 'pk_test_51SfQMuCwAprjeWkF4t5zEHGnulFy7RMQ9WyZb7sEqRel3Al2VvsepJSf2z6TQkS3eP0otS1CdKR7FEyDK8EmFsj600bRWvmLnH';

export const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

// Mapping Plan Names to IDs
// Note: These are Product IDs from the user. 
// In a real Stripe integration, Checkout usually needs Price IDs (starting with price_).
// We'll use these as keys for now.
export const PLANS = {
  Starter: {
    id: 'prod_TciGx47N15qtHm', // Ensure this maps to a valid Price ID in backend or client config
    priceId: 'price_placeholder_starter', // Placeholder, would need real Price ID for client-only checkout
    name: 'Starter',
    price: 99
  },
  Pro: {
    id: 'prod_TciKW65aDMvWS8',
    priceId: 'price_placeholder_pro', 
    name: 'Pro',
    price: 499
  },
  Entreprise: {
    id: 'prod_TciMQ3FoSJ9l7p',
    priceId: 'price_placeholder_entreprise',
    name: 'Entreprise',
    price: 1499
  }
};

export const checkout = async (planKey: keyof typeof PLANS) => {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to initialize');

  const plan = PLANS[planKey];

  // Simulation of checkout redirection for now, as we might lack real Price IDs
  console.log(`Redirecting to checkout for ${plan.name} (${plan.id})...`);
  
  // In a real app with Price IDs:
  // const { error } = await stripe.redirectToCheckout({
  //   lineItems: [{ price: plan.priceId, quantity: 1 }],
  //   mode: 'subscription',
  //   successUrl: window.location.origin + '/success',
  //   cancelUrl: window.location.origin + '/cancel',
  // });
  
  // For demo purposes, we'll simulate a success redirect after a short delay
  setTimeout(() => {
     window.location.href = '/success';
  }, 1500);

  // return { error };
};
