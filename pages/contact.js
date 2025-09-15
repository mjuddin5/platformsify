import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('✅ Message sent!');
    } else {
      setStatus('❌ Failed to send. Try again.');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" required /><br />
        <input name="email" type="email" placeholder="Your email" required /><br />
        <textarea name="message" placeholder="Your message" required /><br />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </main>
  );
}
