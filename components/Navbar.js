export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
      <a href="/" style={{ marginRight: '1rem' }}>Home</a>
      <a href="/about" style={{ marginRight: '1rem' }}>About</a>
      <a href="/services" style={{ marginRight: '1rem' }}>Services</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}
