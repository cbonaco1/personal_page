import React from "react";

import styles from 'styles/Home.module.scss'

const Home = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title">
                Hi,<br />
                I'm Christian Bonacore
              </h1>
              <p className="subtitle">Software Engineer</p>
              <p>
              I am a NYC-based software engineer passionate about building products that help people. 
              I take pride in putting great detail into my work, and focusing on giving the user the best experience possible. 
              Outside of coding, I enjoy quoting Seinfeld, a good cup of coffee, or quoting Seinfeld over a good cup of coffee.
              Read on to find out more about me and my story.
              </p>
              <div className={`displayFlex ${styles.buttonGroup}`}>
                <button className="button is-rounded is-primary">Contact Me</button>
                <button className="button is-rounded">Learn About Me</button>
              </div>
            </div>
            <div className="column">
              {/* TODO - use Next img here instead */}
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
  )
}

export default Home;
