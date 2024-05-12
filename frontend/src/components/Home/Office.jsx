import React from "react";
import "./Office.css";
import Prerna from "../../assets/Prerna.jpg";
import Aditya from "../../assets/Aditya.jpg";
import AniketDas from "../../assets/Aniket_Das.jpg";
import Aniket from "../../assets/Aniket.jpg";
import Rajdeep from "../../assets/Rajdeep.jpg";
import Soumik from "../../assets/Soumik.jpg";
import Tejas from "../../assets/Tejas.jpg";
import Tamoghna from "../../assets/Tamoghna.jpg";
import raunak from "../../assets/raunak.jpg";
import uditayan from "../../assets/uditayan.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Office = () => {
  AOS.init({
    offset: 240,
    duration: 1000,
  });

  return (
    <div class="homeOffice">
      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={AniketDas} class="user-img" alt="Aniket" />
              <h2>Aniket Das</h2>
              <p>President</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 7044563803</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100015299378060">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/not_aniket_/">
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
              <img src={Rajdeep} class="user-img" alt="Rajdeep" />
              <h2>Rajdeep Saha</h2>
              <p>Secretary</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9883487146</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100072838294525">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/instarajdeep/">
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
              <img src={Tamoghna} class="user-img" alt="Aniket" />
              <h2>Tamoghna Dutta</h2>
              <p>Vice President</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 7439706092</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100076938982610">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/tamoghna_dutta/">
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
              <img src={Prerna} class="user-img" alt="Aniket" />
              <h2>Prerna Sharma</h2>
              <p>Treasurer</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 6295187168</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100076278952974">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/prerna13sharma/">
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
              <img src={raunak} class="user-img" alt="Aniket" />
              <h2>Rounak Sarkar</h2>
              <p>Convenor</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9330107094</h3>
              <div class="homeOfficesocialImage">
                <a href="https://m.facebook.com/profile.php?id=100077507754273">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/rounak_396?igshid=ZDdkNTZiNTM=">
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
              <img src={Soumik} class="user-img" alt="Aniket" />
              <h2>Soumik Biswas</h2>
              <p>Assistant Secretary & Quiz Coordinator</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 6290575119</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/sou.bis.9">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/_soumiik_/">
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
              <img src={Aniket} class="user-img" alt="Aniket" />
              <h2>Aniket Gupta</h2>
              <p>Tech Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 8789518214</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100075359740072">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/aniket777984/">
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
              <img src={Tejas} class="user-img" alt="Aniket" />
              <h2>Tejas Sandwar</h2>
              <p>GD Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9693808710</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100078248832807">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/tejassandwar/">
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
              <img src={Aditya} class="user-img" alt="Aniket" />
              <h2>Aditya Raj</h2>
              <p>Sponsorship And Logistics Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 8340183323</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/profile.php?id=100073591507023">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/adityaraj.1701/">
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
              <img src={uditayan} class="user-img" alt="Aniket" />
              <h2>Uditayan Debnath</h2>
              <p>PR Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9609119655</h3>
              <div class="homeOfficesocialImage">
                <a href="https://www.facebook.com/uditayan.debnath?mibextid=ZbWKwL">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/demon_cazzboi?igshid=ZDdkNTZiNTM=">
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
