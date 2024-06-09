import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgCloud, CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { BsCloud, BsCloudFog, BsCloudFog2, BsCodeSlash } from "react-icons/bs";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"UI/UX Designer"}
            disc={`Highly skilled UI/UX Designer with a decade of experience in creating intuitive and engaging user interfaces.
              Proficient in design tools such as Sketch, Figma, and Adobe XD.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={BsCodeSlash}
            title={"FullStack Engineer"}
            disc={`Proficient in both front-end and back-end technologies including JavaScript, Java, Python and SQL/NoSQL databases. 
              Experienced in implementing RESTful APIs, microservices architecture, and DevOps practices.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsCloudFog2}
            title={"Cloud Engineer"}
            disc={`Specialized in AWS, Azure, and Google Cloud Platform (GCP). 
              Skilled in cloud architecture, automation using Terraform and Ansible, and optimizing performance and cost-efficiency.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
