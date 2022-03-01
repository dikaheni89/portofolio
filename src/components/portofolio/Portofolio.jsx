/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portofolio.css";
import ppid from "../../assets/ppid.PNG";
import satudata from "../../assets/satudata.PNG";
import bali from "../../assets/bali.PNG";
import mpp from "../../assets/mpp.PNG";
import ekaku from "../../assets/ekaku.PNG";
import ppidmobile from "../../assets/ppidmobile.PNG";
import bebeja from "../../assets/bebeja.PNG";
import siputri from "../../assets/siputri.PNG";
import eoffice from "../../assets/eoffice.PNG";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={ppid} alt="ppid" />
          </div>
          <h3>PPID Kabupaten Pandeglang</h3>
          <small>
            the next project is still a development of the government's public
            service, this project was carried out in 2021 and was completed in 1
            month together with the android mobile
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://ppid.pandeglangkab.go.id/"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={satudata} alt="satudata" />
          </div>
          <h3>Satudata Pandeglang</h3>
          <small>
            The first project at my government agency is the development of one
            data from the Pandeglang Regency, this site can be completed in 2
            months alone in 2019
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://satudata.pandeglangkab.go.id/"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={bali} alt="bali" />
          </div>
          <h3>Bali Clean Plus</h3>
          <small>
            the bali clean plus project is a work with a remote work team that
            can be completed within 1 week in 2021
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://www.balicleaningplus.com/"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={mpp} alt="mpp" />
          </div>
          <h3>MPP Kabupaten Pandeglang</h3>
          <small>
            This project is a public service system in the form of a queue that
            was worked on with a team of 3 people in 2020
          </small>
          <div className="portofolio__item-cta">
            <a
              href="http://mpp.pandeglangkab.go.id/"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={ekaku} alt="ekaku" />
          </div>
          <h3>E-Kaku Kabupaten Pandeglang</h3>
          <small>
            This project is a work that was made in 2018 with a period of 2
            months because there was a data out of sync problem
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://e-kaku.pandeglangkab.go.id/"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={ppidmobile} alt="ppidmobile" />
          </div>
          <h3>PPID Mobile</h3>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.ppid.newppid"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={bebeja} alt="bebeja" />
          </div>
          <h3>E-Bebeja Kabupaten Pandeglang</h3>
          <small>
            E-bebja is an application for public reporting and direct complaints
            to government agencies. This project was made in 2021
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.app.ebebeja.baru"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={siputri} alt="siputri" />
          </div>
          <h3>Siputri Kabupaten Pandeglang</h3>
          <small>
            siputri is an integrated service application, this application was
            made within 2 weeks because there are still official service
            applications that do not have an API made in 2021
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.siputri.versi"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={eoffice} alt="eoffice" />
          </div>
          <h3>E-Office Kabupaten Pandeglang</h3>
          <small>
            e-office is a correspondence management application that can be
            directly archived this application was made in late 2021
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=id.pandeglangkab.eoffice"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portofolio;
