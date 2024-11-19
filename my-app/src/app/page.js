export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.name}>Rajnandini Tiwari</h1>
      <h2 style={styles.role}>Frontend Developer</h2>
      <p style={styles.description}>
        <a href="https://github.com/your-github-profile" target="_blank" style={styles.link}>
          I code
        </a>
        ,{" "}
        <a href="https://your-hashnode-profile" target="_blank" style={styles.link}>
          write
        </a>
        , and{" "}
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" style={styles.link}>
          participate in hackathons
        </a>
        .
      </p>
      <p>
        <a href="/projects" style={{ color: '#0070f3', fontWeight: 'bold' }}>
          See my work
        </a>{' '}
        and{' '}
        <a href="/experience" style={{ color: '#0070f3', fontWeight: 'bold' }}>
          what I have done till date
        </a>
        .
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 20px",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  role: {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
