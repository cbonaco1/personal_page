import React from "react";
import PortfolioItem from "components/PortfolioItem";

const Portfolio = () => {
  return (
    <div>
      <h3>Portfolio</h3>
      <ul>
        <li>
          <PortfolioItem 
            title="Bill Cone Water"
            logoImgSrc="/img/billcone_logo_bluefont.png"
            description={
              <p>
                Built a brand new, responsive website for Bill's water construction business. 
                The site serves as a portfolio for the different work Bill and his team does. 
                I also coordinated with a
                {' '}<a href="https://www.instagram.com/p/CGVGUetDr6f/?utm_source=ig_web_copy_link">freelance designer</a>{' '}
                on a new logo for Bill's business.            
              </p>
            }
            liveUrl="https://www.billconewater.com"
          />
        </li>
        <li>
          <PortfolioItem 
            title="Kombert Caterers at Temple Avodah"
            logoImgSrc="/img/kombert-logo-letter.png"
            description={
              <p>
                Brought site to mobile, nearly doubling user reach.
                Used Adobe Photoshop to optimize images for web use, 
                combined with lazy loading to increase page load time by nearly 70%.
                I displayed a WeddingWire review widget to show reviews directly from WeddingWire.                 
              </p>
            }
            liveUrl="https://www.kombertcaterers.com"
          />
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;
