import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/CatCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Gigs from "../gigs/gigs";
import Gig from "../gig/gig";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>Advanced solutions and professional talent for businesses.</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to business.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Access top freelancers and professional business tools for any
              project
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Build your own branded marketplace of certified experts
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </div>
            <button>Explore Fiverr Business</button>
          </div>

          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
