export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = JSON.parse(req.body);

    console.log('New Contact Message:', { name, email, message });

    // TODO: Integrate with Email API (e.g., SendGrid, Nodemailer)

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
