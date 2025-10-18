const handleCheckout = async () => {
  const res = await fetch('/api/checkout', { method: 'POST' });
  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  }
};

// Add this inside your component’s return:
<button onClick={handleCheckout}>Pay $50</button>
