//dependencies
import { Box } from "@mui/material"
//icons

//styles
import "./Contact.scss";
import ContactSection from "../../Layout/MainContent/ContactSection";
import ContactMidSection from "../../Layout/MainContent/ContactMidSection";

const Contact = () => {


  return (
    <>
      <Box>
        <Box className="contactPageMidWrapper">
          <ContactMidSection />
        </Box>
        <ContactSection />
      </Box>
    </>
  );
};

export default Contact;
