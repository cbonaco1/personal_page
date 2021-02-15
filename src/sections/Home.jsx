import React from "react";

import styles from 'styles/Home.module.scss'

const Home = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="columns">
          <div className="column">
            <h1 className="title has-text-centered">
              Hi,<br />
              I'm Christian Bonacore
            </h1>
            <p className="subtitle has-text-centered">Software Engineer</p>
            <p>
              Did he just throw my cat out of the window? 
              God help us, we're in the hands of engineers. 
              Just my luck, no ice. Hey, take a look at the earthlings. 
              Goodbye! Remind me to thank John for a lovely weekend. 
              Forget the fat lady! You're obsessed with the fat lady!
            </p>
            <div className="buttons are-medium">
              <button className="button is-primary">Contact Me</button>
              <button className="button">Learn About Me</button>
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
  )
}

export default Home;
