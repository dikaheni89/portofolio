import React from "react";
import "./services.css";
import { GrAndroid } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GrAndroid className="service__list-icon" />
              <p>Flutter</p>
            </li>
            <li>
              <GrAndroid className="service__list-icon" />
              <p>Kotlin</p>
            </li>
          </ul>
        </article>
        {/* {End of Mobile} */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Codeigniter 4</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>React</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Laravel</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
