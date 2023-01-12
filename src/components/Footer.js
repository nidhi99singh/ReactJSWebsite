import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaAngleRight, FaRegEnvelope, FaHeart } from "react-icons/fa";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";
import Navbar from "./Navbar";
export default function footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div
        // className="shape"
        className={`shape ${theme === "dark" ? "footer-dark" : "footer-light"}`}
      ></div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-side">
            <img
              className="logo-image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAYCAYAAAA/FYWiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGOTMwMkFEM0QyRDBFQTExOEI0M0YwOUZCQkVBMjRBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OEU0MEZFMjEwNUUxMUVDOUI5OTlBM0U2RkZEMEEwMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OEU0MEZFMTEwNUUxMUVDOUI5OTlBM0U2RkZEMEEwMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMkY1NjU3MkNEMEZFQzExOEQzM0FDMTZGQjY1MzAxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTMwMkFEM0QyRDBFQTExOEI0M0YwOUZCQkVBMjRBQiIvPiA8L3JkZjpEZXNjcmlwdGlv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"
              alt="logo"
            />
            <p className="footer-content-para">
              Start working with Landrick that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
            <ul className="socialmedia-list">
              <li>
                <Link to="/">
                  <FiFacebook className="socialmedia" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FiInstagram className="socialmedia" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FiTwitter className="socialmedia" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FiLinkedin className="socialmedia" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-list-container">
            <div className="footer-list">
              <h5 className="footer-list-heading">Company</h5>
              <ul className="footer-list-item">
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  About us
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Services
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Team
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Pricing
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Login
                </li>
              </ul>
            </div>
            <div className="footer-list">
              <h5 className="footer-list-heading">Useful Links</h5>
              <ul className="footer-list-item">
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  About us
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Services
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Team
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Pricing
                </li>
                <li>
                  <FaAngleRight className="footer-arrow-icon" />
                  Login
                </li>
              </ul>
            </div>
            <div className="footer-list sign-up">
              <h5 className="footer-list-heading">Newsletter</h5>
              <ul className="footer-list-item">
                <li>Sign up and receive the latest tips via email.</li>
                <li>
                  <p style={{ marginTop: 10 }}>
                    Write your email <span style={{ color: "red" }}> *</span>
                  </p>
                </li>
              </ul>
              <form>
                <div className="input-section">
                  <FaRegEnvelope className="input-icon" />
                  <input
                    type="text"
                    placeholder="Your email :"
                    name="name"
                    className="input-field"
                    style={{
                      backgroundColor: "#27314f",
                      border: "none",
                      color: "white",
                    }}
                  />
                </div>
                <div className="input-section">
                  <input
                    type="submit"
                    name="Subscribe"
                    value="Subscribe"
                    className="input-field"
                    style={{
                      backgroundColor: "#27314f",
                      border: "none",
                      color: "blue",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="footer-bar-content">
            <div className="copyright-section">
              <p className="footer-bar-para">
                {" "}
                &copy; 2023 Landrick. Design with
                <FaHeart className="icon-heart" />
                by Nidhi Singh.
              </p>
            </div>
            <div className="footer-bar-paymentcards">
              <ul className="paymentcards-list">
                <li>
                  <Link>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAnCAIAAAA6pnc5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhFOEY4Q0M4QkNGMDExRTk4MzY0OUMwOTdFMTE0RkU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhFOEY4Q0M5QkNGMDExRTk4MzY0OUMwOTdFMTE0RkU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEU4RjhDQzZCQ0YwMTFFOTgzNjQ5QzA5N0UxMTRGRTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEU4RjhDQzdCQ0YwMTFFOTgzNjQ5QzA5N0UxMTRGRTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4jUK1RAAAT+klEQVR42kxZC5CdZXn+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"
                      alt="american express"
                      className="cards-image"
                    ></img>
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAnCAIAAAA6pnc5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyM0QwNDQxQkNGMDExRTlCMTREQjYzMjI4RDMzQTFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgyM0QwNDQyQkNGMDExRTlCMTREQjYzMjI4RDMzQTFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODIzRDA0M0ZCQ0YwMTFFOUIxNERCNjMyMjhEMzNBMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODIzRDA0NDBCQ0YwMTFFOUIxNERCNjMyMjhEMzNBMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jqa3jAAAL10lEQVR42sxYe4xVxR2emTPn3rv37gN2WZ67FCwowoqoMVAeQiSQNqK1NpQ/jH/QaIz8Y3zEGGNiUP9qYiUVo5GEiMbaBppoqzGU14JIIwiWXUDWXXazyz7v3r13H/d1HjPTb85cT6+7Wm2aFA5wOWfunJlvvt/3/eY3lz7//PO33nrr4sWLVXCR4KKUhvfX6gIGfDLGcrlca2trZ2cnX7Vq1dq1a2tqash1fM2ePbu5uZnm8/mKigrf99FkWZZh16yJBte1wielNDegFp8XL17kAIpW4EMTkJl73OCxXBX/56t8XkACmKqqKh5iN+DoN9d1otcQBiLPwtbr6vpOSLzc+KFAw8drGPqpFytfSjm4a0L2f3CzdtR1mKG+D/H1iPX7xMB+fBSuucPYD+r6v0teiqjwjhD1P8ugHC43aMx3w8PDbW1tBtyMGTPmz5+fSCQKhUJ7e/vcuXNjsRi+zWazlZWVCxYsQAfXdbu7uwcHB5Gu0bOpaVkkEpNuluRT1B2ligheZdc1JodG0W323DmNjY3oif0dmzumE0JgNLP73Hbbbf39/alUCo22baM+wYCZTIZzPn369Gg0WqINvdHD87y9e/eaFWCTQJ3w9ttvO47T29uLN1977bX9+/fH43G8tmLFigMHDqD/4cOH77rrLux8aFy+fHlLy3nHK6iWP7v7d4y+/vPCrrWFvdtkz6G/7NtdXRnfvv23yOeY7pNPPmloaNi8eXN9fT3mikQimO6zzz5bv369ecTnyy+/fOLEiRdffBEYxsbG8Bb4YmGUDbt4H5jOnDkDIrdv3/7xxx8DCljEit9///2lS5deunTpo48+WrJkCWqfHTt2IBSnTp3q6up67rnn9CBfH/bP/olGKyuXbIwt/YUXmVb46+/uX179y1/df76lBXSCl9OnTwPcM888c+ONNz7wwANffvnl5cuXV69ejWrkoYceAqaHH374vffeO3fu3Jo1a26//XaDHth4WCWYGgBfoOa66aab3nzzTSDYt2/fwoULEQ6MDnaPHDkCxI899hiWtGvXrqtXr4IP0IzXt23bhk9v305aM8ef1cTrFwvhV9mnx9OdzOvfsGJ+88nTx5qPY4qDBw/eeeedCDrYGRkZAaZp06ZhQIQ+mUwCTEVwQTB33313uWG4Ka8AFDGFEiBBfOJrNN5www3pdBryQkt1dfXjjz9eLBZfeOGFPXv2PP3002isq6vDiGWlkXBIJGFZLFHDambRwoSyE9Gq6WSgd/OajX88eP7I4cM2t6BLDGK0h0AjLCDo2LFjtbW1EBWogUZfeumljRs3huYu1bKmLABEPAMfFgcQGAVLhJPmzZsHmvEIh4EScPn555/PmTMHykY3qBkRNLNiEBCJ4ZyiEPlRZ7DNS3fR4ogojrme37By9a9/s7X5ePOzzz4Ly0KsExMTmPrBBx+EuuAwMI0WfGK6++67b8uWLWZew2Ap7OY/U7miFVP29fWdPHnyqaeeAqmPPvoohh4fH4fUoPedO3dCoOgJRjds2ABSH3nkkUOHDp09e/add95tvXAp0rQlVhji3f+Idjfb3cdI8qKdG7RmLSNkJqLeMG8eYG3duhWTmrkAFIuHPdACOqCEV199FaXqK6+8gtQBdgDs36kT//zgwgqgaPMF8tG999579OhRjAjoK1eu3L17N1KB+faWW2758MMP8RVccs8995hGTIM5pF/MH3/deWNj/o1N+T/8bPT3q9In9jg5bWQE64knnrj55puxbDzi84477igJkfPjx49j8RhtZCT91ltvQXJPPvkkyEJPAMNnR0cHNQ9hjYjFGX1AQ8hEGAWPiA7ujRXQGT6DG7Biow2cLDAohAELoj/xi6SYSfX1RCwrUT+TJWYQK2YCiPSHnsuWLTPvwglaN5hOkppEles6iqpYgjle0c3KKJQfi0pCGVVRzjo6A6yQndkLzGkhPDaAubDuNqcGYzsNaMp5I3yXKIyvgh1MEIp0Q7+zp7kB2RAf3O0S5RPfVpYNvIQ6ypOM237B9n3JKljUvtLewcvza+g4Ay48KRj3hOqBvHp6erBZIC5ILki0kCB0tmnTpt6+ASTFnu6ukdQwQtw/0N/29ZX16zckk4Nnv/iiqakJgwwMDCDNwbXBNoo/vhQekcxiXFJWkAIHKdti1PewXo9HPOnGic2sOP++Hd8kXfOVOYfhMhZEC7AidSBpIMWY1Lho0SLouLa27t1390E+jY0/aevsmVVf19jQ4BQLFy9cgFcAEQkLaRt5AMGB5CzOiwJJPhqxJJGujgi1qWUzL1dgyiUsoiA+0JcTrJVPjmBZuVB+ZjQchydg+ABVAeSLhADZQdzAofeLRQtXr1qJ7gt+urhu+rTunm7oORpl69ataWycjw5YD7IHXsQ2i5UjF3BlUYsIrZUIFZSoIrC5VlRwEqPc8ojTeyxOmlkmo+OLPGKw0ilXiDVUCK7wgI6tAZ8gGHUCpBxUGKKQy6FjLB6HZPL5nFPIVVYmGI84DlwkEQGMAIcY40olmQSl8AFCH2GASoSknmvHLEViA62q929u/5nYXNIppmkQKA5C8sJfO0J2yyvaSeYL9Q30mBhwMRlllvaX8DEc0R0Y0UslYU+EC4hL3tIgGbcwmu+KDGVRblczlxRzLbLvqN3zlZ0dEtmU1Ug77Jk8dFW5cEOZTkVZfho2NxCKFaQ29JFokUSvlFmaI20eFlQb+KMHNfu5yTqQmN6GqOcr37OjjNdryOke1d3MUiftiX6WzUnm69ekhcF4ObgQYmj/qed0wFBQMkEHHiAlFM5FG+gEQL25SDgR0KRGGUgLy9Du1L2ohUoD73loZTqzUT8SZUSrRyVb/MFT1tA5lu2heYdKRoXERkUcSRyOQfiknGfWPQn6t0t2wxGiXSr7g6BrvPCHpXmkQU5FnjQ5KYANCpWlaVZ6lUIvmYFSbal8SqZaRPKfPNVmT/Sx4gT1HYykl4qvkaORHoogR5SwTjowmIQ6idHgUWd5TaIOJzglKnhPPwTtjjZzUGgGu4ElSwKSFDsERAJT4lWsSHNLMl/LodM8eUFlOtX4gOV6lNjoRVREgVIkBVcx6N7xSBG50uPlu4CBWK7gqWe04A4sSczHAEYHnWhLQVNwFAUWTZ2WKWKotAisQLjB0gPOnTQbPEeGviLDLdZ4Ny30UhK3VDUB8aKAuoFQjnEEkdwV1BfK8UnBpcQr8QoXmwwa1t1Tf4stWQ1hBA6QI4BIsIDRINIoKryoimtlQrIqWBEcFuQVqSFmaLKdjbSRTKtKtfrjg5YjLGzCHCZziRjT8YBAQaR0abBIgqIFg7jIsYzYkk9icWoG+LbPTKghRRaE2QsIYzqFE610CzUA/Mq4wa//85Kqv51muli6naQui7Er1M3qNEZsoUXpW26UigIY1aHX/hEoOyyHaplhCKB3POrpWoSbfFQu0B84DQd/GexiCawDA/uBelkADMpg+t5VmS6avkpyAyTdJvousXQf87IqEKBUUI7NtNJ9gVB7MVRXktmSeFQU9dYlLdQ0AKf7eL6EEoKEoCfAroOtC3CRokPcQYq0vgsqYaUMAF/b5jEQpSOyg2S4i+DMPdamBs+TZKfKjWIPgp81PvRRej9FeIWOks8gFeEFNRkCpZOddpJvfvcVev9AkIqetgZndkxys6frWHmeLibCOhw3OvoaV0C5jrIWawkyJiIkO8yySZZLk/woybTLkS67r0UVxok7ToROM9p1ymIwDdOTgx5Lj6RBE+QrCmkCtq6nsNOCTp3DUBvizmN6XpCsHFqbIBXxodEI/+CDD1DL4aDy434QwSEpRQppMpam+SEycpGMdBDEejRFXMfWUvAp0noUQeHG9MHiBJeCm/wQOMDkQphPK19oUnQ3qRUBYowvA3e4JEFIdfTsSPzvV2v5p59+OjQ0tG7dOlSi36pizZ4YZi49XI6ILpXvIgNXaLKLgA9tCIcIDxxLq4LYEXAYGJAGs6qSWDAU4ijZN78gBXlOBYEvjaz3Qd0ig2rO3OsDQYzKquFk9amBxFUx818CDAByMtQM4jeBDAAAAABJRU5ErkJggg=="
                      alt="discover"
                      className="cards-image"
                    ></img>
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAnCAIAAAA6pnc5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0OTdGNTE4QkNGMDExRTk5QTRFRjAyM0M5RjFEQzg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0OTdGNTE5QkNGMDExRTk5QTRFRjAyM0M5RjFEQzg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQ5N0Y1MTZCQ0YwMTFFOTlBNEVGMDIzQzlGMURDODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ5N0Y1MTdCQ0YwMTFFOTlBNEVGMDIzQzlGMURDODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz580gWBAAATGklEQVR42pRZaYydV3k+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"
                      alt="master card"
                      className="cards-image"
                    ></img>
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAnCAIAAAA6pnc5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg3NUY0MjcwQkNGMDExRTk4MTdGOTVCNDVFQkQ0RDlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg3NUY0MjcxQkNGMDExRTk4MTdGOTVCNDVFQkQ0RDlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODc1RjQyNkVCQ0YwMTFFOTgxN0Y5NUI0NUVCRDREOUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODc1RjQyNkZCQ0YwMTFFOTgxN0Y5NUI0NUVCRDREOUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pkQKuAAAQcUlEQVR42nRZ6Y8cx3V/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"
                      alt="paypal"
                      className="cards-image"
                    ></img>
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAnCAIAAAA6pnc5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk4NTdENDNCQkNGMDExRTlCNTE2QTE5M0Q2QjAxOUE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk4NTdENDNDQkNGMDExRTlCNTE2QTE5M0Q2QjAxOUE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTg1N0Q0MzlCQ0YwMTFFOUI1MTZBMTkzRDZCMDE5QTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTg1N0Q0M0FCQ0YwMTFFOUI1MTZBMTkzRDZCMDE5QTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Tg4VbAAAP2UlEQVR42sxZaZAd1XW+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"
                      alt="visa"
                      className="cards-image"
                    ></img>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="controller-arrow" onClick={scrollToTop}>
            <FiArrowUp className="arrowup-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}
