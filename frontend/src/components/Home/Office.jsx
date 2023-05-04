import React from "react";
import "./Office.css";
import Debasmita from "../../assets/Debasmita.jpg";
import Drishita from "../../assets/Drishita.jpg";
import Durbar from "../../assets/Durbar.jpg";
import Kaushal from "../../assets/Kaushal.jpg";
import Kushagra from "../../assets/Kushagra.jpg";
import Prasun from "../../assets/Prasun.jpg";
import Sagnik from "../../assets/Sagnik.jpg";
import Shobhit from "../../assets/Shobhit.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Office = () => {


    AOS.init({
        offset:240,
        duration: 1000,
      });    

  return (
    <div class="homeOffice">
      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Durbar} class="user-img" alt="Aniket" />
              <h2>Durbar Chakraborty</h2>
              <p>President</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 8670122218</h3>
              <div class="homeOfficesocialImage">
                <a href="https://m.facebook.com/durbar.chakrabarty.7?ref=bookmarks">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/_durbar1204_?utm_medium=copy_link">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Prasun} class="user-img" alt="Aniket" />
              <h2>Prasun Kumar Das</h2>
              <p>Secretary</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 6289762518</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/prasun.kumardas.7311">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/prasun_k_d?utm_medium=copy_link">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Kaushal} class="user-img" alt="Aniket" />
              <h2>Kaushal Baid</h2>
              <p>Vice President</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 7044666331</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/kaushalbaid16">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/kaushal168">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Shobhit} class="user-img" alt="Aniket" />
              <h2>Shobhit Katiyar</h2>
              <p>Treasurer</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 6387385618</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/shobhit.katiyar.167189">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/kati_yar_shobhit/">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Kushagra} class="user-img" alt="Aniket" />
              <h2>Kushagra Pratap Singh</h2>
              <p>Convener</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9528682317</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/people/Kushagra-Pratap-Singh/100055917695780/">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/kush_agra_pratap/?igshid=1ogfknpxidolu">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Sagnik} class="user-img" alt="Aniket" />
              <h2>Sagnik Khan</h2>
              <p>Joint Secretary</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 8420074884</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100010971364639">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/sagniiiik?utm_medium=copy_link">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Drishita} class="user-img" alt="Aniket" />
              <h2>Drishita Nag</h2>
              <p>Sponsorship And Logistics Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 7797061920</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100005992849461">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/drishita__?igshid=39cjpgpzs56h">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Debasmita} class="user-img" alt="Aniket" />
              <h2>Debasmita Das</h2>
              <p>PR Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9883898007</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100057522737824">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/debasmita.das__?utm_medium=copy_link">
                  <i class="fa fa-instagram instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Office;
