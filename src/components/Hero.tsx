export const Hero = () => {
  return (
    <section style={{ 
      padding: '80px 20px', 
      textAlign: 'center', 
      background: 'linear-gradient(to bottom, #000, #111)',
      borderBottom: '1px solid #222' 
    }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>
        Bienvenue chez <span style={{ color: '#3b82f6' }}>Capella</span>
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>
        Votre expert en optimisation digitale. Nous propulsons les entreprises locales au sommet de Google Maps.
      </p>
      <button style={{ 
        backgroundColor: '#3b82f6', 
        color: '#white', 
        padding: '15px 30px', 
        borderRadius: '8px', 
        border: 'none', 
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '1rem'
      }}>
        Démarrer maintenant
      </button>
    </section>
  );
};
export default Hero;
