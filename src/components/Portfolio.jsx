import React from "react";
import PortfolioItem from "components/PortfolioItem";

import styles from "styles/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div>
      <ul>
        <li className={`${styles.listItem}`}>
          <PortfolioItem 
            title="Bill Cone Water"
            logoImgSrc="/img/billcone_logo_bluefont.png"
            description={
              <>
                <p>
                  Built a brand new, responsive website for Bill's water construction business. 
                  The site serves as a portfolio for the different work Bill and his team does. 
                  I also coordinated with a
                  {' '}<a title="sg__creative Instagram" href="https://www.instagram.com/p/CGVGUetDr6f" target="_blank">freelance designer</a>{' '}
                  on a new logo for Bill's business.            
                </p>
                <p>Add pics from shoot at Bill's with Sophia</p>
              </>
            }
            liveUrl="https://www.billconewater.com"
          />
        </li>
        {/* TODO - add divider here */}
        <li className={`${styles.listItem}`}>
          <PortfolioItem 
            title="Kombert Caterers at Temple Avodah"
            logoImgSrc="/img/kombert-logo-letter.png"
            description={
              <p>
                Brought site to mobile, nearly doubling user reach.
                Used Adobe Photoshop to optimize images for web use, 
                combined with lazy loading to increase page load time by nearly 70%.
                I displayed a WeddingWire review widget to show reviews directly from WeddingWire.                 
                <i>Something about Passover menu</i>
              </p>
            }
            liveUrl="https://www.kombertcaterers.com"
          />
        </li>
        <li className={`${styles.listItem}`}>
          <PortfolioItem 
              title="Dr. Jacky Scott, Ed.D."
              logoImgSrc="/img/jacky_scott.JPG"
              logoImgHeight={250}
              description={
                <p>
                  Jacky was a referral to me from a previous client, and reached out to me
                  for a website to promote her business of working with school-aged children and adolescents as a life coach. 
                  Site provides list of services Jacky provides, parenting resources, and contact information. 
                  Contact page contains an email form which on submission will email Jacky directly. 
                  I recently converted this website from Express and Handlebars to NextJS.
                </p>
              }
              liveUrl="https://www.drscottny.com"
            />
        </li>
        <li className={`${styles.listItem}`}>
          <PortfolioItem 
              title="Long Island ABA"
              logoImgSrc="/img/longislandaba-logo.jpg"
              logoImgHeight={100}
              description={
                <p>
                  Developed web site for firm specializing in ABA (Applied Behavior Analysis) research for kids with Autism.
                  page uses Google Maps API to render firm's location, along with a form which sends submitted data as an email.
                  Built on an Express.js server, front-end technologies include Handlebars, Sass, and respsonsive design.
                </p>
              }
              liveUrl="https://www.longislandaba.com"
            />
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;
