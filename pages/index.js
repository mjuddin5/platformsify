export default function Home() {
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', { method: 'POST' });
    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Platformsify</h1>
      <p>Click below to continue to secure checkout.</p>

      <button onClick={handleCheckout}>
        Pay $50
      </button>
    </main>
  );
}
