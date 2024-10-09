import styles from './EducationStyles.module.css';

function Education() {
  return (
    <section id="education" className={styles.container}>
       <h1 className="sectionTitle">Education</h1>
      <div className={styles.educationList}>
        
        <div className={styles.educationItem}>
          <h3>Masters of Computer Application</h3>
          <p>Techno India University</p>
          <p>2022 - 2024</p>
        </div>
        <div className={styles.educationItem}>
          <h3>Bachelor of Computer Application</h3>
          <p>Techno India Institute of Technology </p>
          <p>2019 - 2022</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
