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
import simpedesa from "../../assets/simpedesa.PNG";
import satgaspen from "../../assets/satgaspen.PNG";
import simpan from "../../assets/simpan.PNG";
import digipulsa from "../../assets/digipulsa.PNG";
import cendekiawan from "../../assets/cendekiawan.PNG"
import arthoojol from "../../assets/arthoojol.PNG"
import koperasi from "../../assets/koperasi.PNG"

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
          <small>
          PPD Pandeglang Regency is an application for managing publicly available information documents for the district community made in 2021
          </small>
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
            <img src={simpedesa} alt="simpedesa" />
          </div>
          <h3>Simpedesa.id</h3>
          <small>
          simpedesa is a public service for village community users. This project is made on an ongoing basis until 2022. Simpedesa is an application in managing village data from work to data collection on village communities which are summarized systematically.
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://simpedesa.id/"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={satgaspen} alt="satgaspen" />
          </div>
          <h3>PC Satgas PEN</h3>
          <small>
          PC Task Force PEN is an application to dynamically all information on Task Force activities throughout Indonesia within the Indonesian National Police this application was created in 2019.
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.simbatech.mabespolri"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={simpan} alt="simpan" />
          </div>
          <h3>Simpan BMN</h3>
          <small>
          Save BMN is an application for monitoring data assets on a scheduled basis, this application is intended for internal use in managing office data assets, created in 2022.
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.tools.sistemsimpanbmn"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={digipulsa} alt="digipulsa" />
          </div>
          <h3>Digipulsa</h3>
          <small>
          Digipulsa is a PPOB service application and credit payment service.
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.tools.sistemsimpanbmn"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={cendekiawan} alt="cendekiawan" />
          </div>
          <h3>Cendekiawan Kampung</h3>
          <small>
          village scholar is an application for mutual assistance in educational scholarships this application was made in 2022.
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://cendekiawankampung.com/"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={arthoojol} alt="Artho ojol" />
          </div>
          <h3>Artho Transportation Online</h3>
          <small>
          artho is an online transportation application that is engaged in services, this application was made using flutter and laravel the project was completed in october 2022.
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://ojol.arthopay.id/login"
              className="btn btn-primary"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={koperasi} alt="Arthomoro" />
          </div>
          <h3>Arthomoro Koperasi Digital</h3>
          <small>
          arthomoro is a digital-based cooperative application as well as a digital wallet provided for artho transportation, this application is in the form of a super app, completed in October 2022.
          </small>
          <div className="portofolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=id.arthopay.arthopay"
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
