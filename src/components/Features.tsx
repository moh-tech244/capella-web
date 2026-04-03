export const Features = () => {
  const services = [
    { title: "SEO Local", desc: "Dominez les recherches dans votre ville." },
    { title: "Google Maps", desc: "Apparaissez dans le Top 3 pack local." },
    { title: "Optimisation Fiche", desc: "Photos et avis clients optimisés." }
  ];

  return (
    <section style={{ padding: '40px 0' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#3b82f6' }}>Nos Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {services.map((s, i) => (
          <div key={i} style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>{s.title}</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
