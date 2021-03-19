import React from "react";

import styles from 'styles/Home.module.scss'

const Home = () => {
  return (
    <div>
      <div className={`hero is-fullheight`}>
        <div className={`hero-body ${styles.heroBody}`}>
          <div className="container">
            <div className={`columns is-vcentered ic-centered is-mobile ${styles.heroColumns}`}>
              <div className={`column ${styles.infoColumn}`}>
                <h1 className="title">
                  Hi,<br />
                  I'm Christian Bonacore
                </h1>
                <p className="subtitle">Web Developer</p>
                <p className="is-size-p">
                I am a NYC-based software engineer passionate about building products that help people. 
                I take pride in putting great detail into my work, and providing the best user experience possible. 
                Outside of coding, I enjoy quoting Seinfeld, a good cup of coffee, or quoting Seinfeld over a good cup of coffee.
                Read on to find out more about me and my story.
                </p>
                <div className={`displayFlex ${styles.buttonGroup}`}>
                  <a href="#contact" className="button is-rounded is-primary">Contact Me</a>
                  <a href="#work" className="button is-rounded">Learn About Me</a>
                </div>
              </div>
              <div className={`column ${styles.meColumn}`}>
                <img
                  src="/img/me.jpg"
                  alt="Christian Bonacore"
                  className={styles.me}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`displayFlex ${styles.someImage}`}>
        <p>some image goes here</p>
      </div>
    </div>
  )
}

export default Home;
