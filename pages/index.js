export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#1D4ED8" }}>Bienvenue sur HRCA8</h1>
      <p>La plateforme éducative conçue pour l’avenir des élèves en République Centrafricaine.</p>

      <section style={{ marginTop: 30 }}>
        <div>
          <h2>Élèves</h2>
          <p>Consultez vos cours, notes, devoirs et emploi du temps en ligne.</p>
        </div>

        <div>
          <h2>Parents</h2>
          <p>Suivez la scolarité de vos enfants : notes, absences, messages des enseignants.</p>
        </div>

        <div>
          <h2>Professeurs</h2>
          <p>Organisez vos classes, partagez les cours, gérez les notes et communiquez facilement.</p>
        </div>
      </section>

      <footer style={{ marginTop: 50, fontSize: 12, color: "#666" }}>
        &copy; 2025 HRCA8 – République Centrafricaine
      </footer>
    </div>
  );
}
