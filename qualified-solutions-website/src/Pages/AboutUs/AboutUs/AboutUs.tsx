//dependencies
import { Box, Grid } from "@mui/material";
//images
import About from "../../../Assets/images/about.png";
import OurMission from "../../../Assets/images/our-mission.png";
import WhyChoose from "../../../Assets/images/why-choose.png";
import AboutBottom from "../../../Assets/images/about-bottom.png";
import qualifiedSolutions from "../../../Assets/images/qualifiedSolutions.png";
//styles
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <div className="about-wrapper">
        <section className="aboutUs-section">
          <div className="container">
            <Grid container spacing={2}>
              <Grid item sm={5}>
                <Box className="AboutImg">
                  <img src={About} alt="" />
                </Box>
              </Grid>
              <Grid item sm={7}>
                <Box className="contentBox">
                  <h3 className="section-title">About Us</h3>
                  <p>
                    Qualified Solutions began its journey in Costa Rica, where
                    it established its roots and ran operations for some years
                    before making its move to Mexico in 2021.
                  </p>
                  <p>
                    Spartan Approach is our system provider and ally in
                    operations.
                  </p>
                  <p>
                    We work together to provide the best possible experience for
                    our clients and their customers for maximum operational
                    efficiency and mutual growth.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        <section className="ourMission-section">
          <div className="container">
            <Grid container spacing={2}>
              <Grid item sm={7}>
                <Box className="contentBox">
                  <h3 className="section-title">Our Mission</h3>
                  <p>
                    We're on a mission to revolutionize the telemarketing
                    industry and are committed to delivering exceptional
                    solutions that meet the highest industry standards.
                  </p>
                  <p>
                    Our team of dedicated telemarketers are handpicked for their
                    expertise and professionalism to ensure that every
                    interaction enhances overall customer experience.
                  </p>
                  <p>
                    We believe in empowering our clients by providing them with
                    the tools and services they need to grow their businesses.
                  </p>
                  <p>
                    Whether it's focusing on enhancing conversion or
                    strengthening existing customer relationships, our team
                    delivers our services with purpose and precision.
                  </p>
                  <p>
                    With Qualified Solutions, you can trust that your
                    telemarketing needs are in the best possible hands.
                  </p>
                </Box>
              </Grid>
              <Grid item sm={5}>
                <Box className="OurMissionImg" textAlign={"right"}>
                  <img className="OurMission" src={OurMission} alt="" />
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        <section className="whyChoose-section">
          <div className="container">
            <Grid container spacing={2}>
              <Grid item sm={5}>
                <Box className="WhyChooseImg">
                  <img className="WhyChoose" src={WhyChoose} alt="" />
                </Box>
              </Grid>
              <Grid item sm={7}>
                <Box className="contentBox">
                  <h3 className="section-title">Why Choose Us?</h3>
                  <p>
                    We are experts in our field, for over 15 years, we've
                    provided exceptional call center and customer service
                    experiences across different industries.
                  </p>
                  <p>
                    Our handpicked agents are trained to use the latest
                    technology and are fluent in both English and Spanish. We
                    learn from every interaction and adapt to current trends to
                    enhance our clients' objectives.
                  </p>
                  <p>
                    At Qualified Solutions, we're on a mission to enhance your
                    customers' experience like never before!
                  </p>
                </Box>
                <Box className="contentBox">
                  <h3 className="section-title">Our Location</h3>
                  <p>
                    We take pride in our headquarters located in the dynamic
                    city of Mexico. Our innovative omni-channel approach allows
                    us to effortlessly connect with customers throughout North
                    and South America, delivering outstanding experiences and
                    achieving success for our clients.
                  </p>
                  <p>
                    We're always eager to reach out and establish meaningful
                    connections. So, why confine your reach? Let Qualified
                    Solutions assist you in expanding your horizons and
                    elevating your business to the next level.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        <section className="about-bottom">
          <div className="container">
            <Box className="AboutBottomImg">
              <img src={AboutBottom} alt="" />
            </Box>
            <Box className="spaceBetweenBox">
              <h3 className="section-title">
                Connecting Excellece Every Call, Every Time!
              </h3>
              <img src={qualifiedSolutions} alt="" />
            </Box>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;