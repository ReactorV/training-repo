import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Vite</span>
        </h1>
        <p className={styles.description}>
          A basic Vite + React.js + CSS Modules project
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Vite</h2>
            <p>Next Generation Frontend Tooling</p>
          </div>
          <div className={styles.card}>
            <h2>React</h2>
            <p>A JavaScript library for building user interfaces</p>
          </div>
          <div className={styles.card}>
            <h2>CSS Modules</h2>
            <p>Scoped and modular CSS styling</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Click Me!" />
          <Button text="Learn More" variant="secondary" />
        </div>
      </div>
    </main>
  );
}

export default App;

