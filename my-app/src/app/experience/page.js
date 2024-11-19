export default function Experience() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Experience</h1>
        <p style={styles.description}>
          Share your professional experience, internships, and notable achievements here.
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
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
    },
  };
  