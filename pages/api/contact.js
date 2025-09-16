export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('New contact submission:', req.body);
    res.status(200).json({ message: 'Form submitted' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
