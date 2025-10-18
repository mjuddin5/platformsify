export default function handler(req, res) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecret) {
    return res.status(500).json({ error: 'Stripe secret key is not set' });
  }

  res.status(200).json({ message: 'Stripe key is configured', stripeSecret: stripeSecret.slice(0, 8) + '...' });
}
