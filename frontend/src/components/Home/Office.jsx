import React from "react";
import "./Office.css";
// import profile from "../../assets/profile.png";
import ankit from "../../assets/ankit.jpeg";
import pranit from "../../assets/pranit.jpg";
import Ridam from "../../assets/Ridam.jpg";
import souryatanu from "../../assets/souryatanu.jpg";
import anand from "../../assets/anand.jpeg";
import arka from "../../assets/arka.jpg";
import pratik from "../../assets/pratik.jpg";
import vaishali from "../../assets/vaishali.jpg";
import saptaparna from "../../assets/saptaparna.jpg";
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
              <img src={saptaparna} class="user-img" alt="Aniket" />
              {/* <img src={profile} class="user-img" alt="Aniket" /> */}
              <h2>Saptaparna Patra</h2>
              <p>President</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 98314 49219</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/saptaparna.patra.007">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:saptaparna.patra@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
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
              <img src={Ridam} class="user-img" alt="Aniket" />
              {/* <img src={profile} class="user-img" alt="Aniket" /> */}
              <h2>Ridam Hazra</h2>
              <p>Secretary</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9874490801</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/ridam.hazra">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:rhazra0602@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
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
              <img src={ankit} class="user-img" alt="Aniket" />
              <h2>Ankit Rai</h2>
              <p>Treasurer</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 87773 24733</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/ar0399">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:ankitrai2000@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
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
              <img src={souryatanu} class="user-img" alt="Aniket" />
              <h2>Souryatanu Saha</h2>
              <p>Vice President</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 86173 78994</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/sourya.shah.39">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="#">
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
              <img src={pranit} class="user-img" alt="Aniket" />
              {/* <img src={profile} class="user-img" alt="Aniket" /> */}
              <h2>Pranit Pandey</h2>
              <p>Convenor</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 86172 25347</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/martinlouis.kingjuniorx.9">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:pranithonypandeano@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
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
              <img src={arka} class="user-img" alt="Aniket" />
              {/* <img src={profile} class="user-img" alt="Aniket" /> */}
              <h2>Arka Seth</h2>
              <p>Tech Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 98830 40840</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/ArkaSeth5">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="#">
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
              <img src={pratik} class="user-img" alt="Aniket" />
              {/* <img src={profile} class="user-img" alt="Aniket" /> */}
              <h2>Pratik Choudhary</h2>
              <p>Assistant Gen. Secretary</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 87877 50963</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/parkjimini69">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="#">
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
              <img src={vaishali} class="user-img" alt="Aniket" />
              {/* <img src={profile} class="user-img" alt="Aniket" /> */}
              <h2>Vaishali Barua</h2>
              <p>Sponsorship And Logistics Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 89005 37156</h3>
              <div class="homeOfficesocialImage">
              <a href="#">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="#">
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
              <img src={anand} class="user-img" alt="Aniket" />
              {/* <img src={profile} class="user-img" alt="Aniket" /> */}
              <h2>Anand Nagar</h2>
              <p>Publicity Head</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 89553 47033</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/anand.nagar.716533">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="#">
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
