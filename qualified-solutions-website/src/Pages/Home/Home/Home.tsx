//
import { Box } from "@mui/material";
//components
import Content from "../../Layout/MainContent/Content";
import ContactSection from "../../Layout/MainContent/ContactSection";
//styles
import "./Home.scss"

const Home = () => {
  return (
    <>
      <Box className="homeWrapper">
        <Content />
        <ContactSection />
      </Box>
    </>
  );
};

export default Home;
