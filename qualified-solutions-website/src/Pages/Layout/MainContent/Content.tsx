//dependencies
import { Box, Grid } from "@mui/material";
import { AppUrls } from "../../../AppUrls";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";

//images
import bannerHuman from "../../../Assets/images/bannerHuman.png";

//styles
import "./Content.scss";
import ContactMidSection from "./ContactMidSection";

const Content = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainWrapper">
        <Box className="bannerTop">
          <Grid container spacing={5}>
            <Grid item md={5}>
              <Box className="bannerTop_ImgPart" >
                <img src={bannerHuman} alt="" />
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box className="bannerTop_contentPart">
                <h2 className="bannerTitle">
                  Where Quality Meets Customer Satisfaction
                </h2>
                <button className="btn orange-btn" onClick={() => navigate(`${AppUrls.Client.Services}`)}>Services</button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div >
      <Element name="contactSection">
        <ContactMidSection />
      </Element>
    </>
  );
};

export default Content;
