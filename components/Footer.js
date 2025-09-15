export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#f5f5f5', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} Platformsify. All rights reserved.</p>
    </footer>
  );
}
