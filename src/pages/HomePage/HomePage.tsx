import React from 'react';
import styles from './HomePage.module.css';
import EmmanuelImage from '../../assets/Emmanuel.png';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
        </nav>
      </header>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1>Hi, I'm Emmanuel.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula a nisl vitae aliquet.
            Curabitur vitae tempus arcu. Aenean et consequat eros, sit amet accumsan erat. Mauris vestibulum
            non urna vitae dictum. Duis quis aliquet elit. Integer justo purus, venenatis tincidunt risus in,
            feugiat rhoncus odio. Sed eu consequat augue. Nunc et nunc suscipit, suscipit sapien in, semper eros.
            Ut pellentesque euismod erat, eget mattis ex laoreet volutpat. Nunc orci neque, accumsan non pretium vitae,
            posuere at tellus. Ut eleifend lobortis lacus, id posuere lectus imperdiet vel. Vivamus a massa quis purus
            rutrum viverra.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a>
            <a href="https://github.com" className={styles.socialLink}>GitHub</a>
            <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
            <a href="https://instagram.com" className={styles.socialLink}>Instagram</a>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img src={EmmanuelImage} alt="image" className={styles.profileImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;