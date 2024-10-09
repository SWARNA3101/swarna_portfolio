import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import weather from '../../assets/weather.png';
import gym from '../../assets/gym.png';
import hipsster from '../../assets/hipsster.png';
import sty from '../../assets/sty.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.behance.net/gallery/206769521/Starbucks-Redesign"
          h3="Starbucks-Redesign"
          p="Landing Page"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.behance.net/gallery/203240849/Love-connect-Case-Study"
          h3="Love Connect"
          p="Dating App"
        />
        <ProjectCard
          src={sty}
          link="https://www.behance.net/gallery/207855755/Ecommerce-Landing-Page"
          h3="Sty E-Commerce"
          p="E-Commerce website"
        />
        
      </div>
      
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/SWARNA3101/weather-app"
          h3="Weather-App"
          p="See it in Github"
        />
        <ProjectCard
          src={gym}
          link="https://github.com/SWARNA3101/gym-management"
          h3="Gym Management"
          p="See it in Github"
        />
        </div>
    </section>
  );
}

export default Projects;
