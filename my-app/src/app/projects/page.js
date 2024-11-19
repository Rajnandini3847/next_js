export default function Projects() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Projects</h1>
        <p style={styles.description}>
          Here, you can showcase the projects you've worked on. Add details about each project and links to view them.
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
