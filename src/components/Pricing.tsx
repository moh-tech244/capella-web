export const Footer = () => {
  return (
    <footer style={{ 
      padding: '40px 20px', 
      borderTop: '1px solid #222', 
      textAlign: 'center', 
      marginTop: '60px',
      color: '#666' 
    }}>
      <div style={{ marginBottom: '20px' }}>
        <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.2rem' }}>CAPELLA</span>
      </div>
      <p style={{ fontSize: '0.9rem' }}>© 2026 Capella Home. Tous droits réservés.</p>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.8rem' }}>
        <span>Mentions légales</span>
        <span>Contact</span>
      </div>
    </footer>
  );
};
export default Footer;
