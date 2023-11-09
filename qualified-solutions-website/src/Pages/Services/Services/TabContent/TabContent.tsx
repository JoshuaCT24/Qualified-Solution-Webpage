import { Box } from "@mui/material";
import "../Services.scss";

const TabContent = ({
  imageSrc,
  heading,
  textContents,
}: {
  imageSrc: string;
  heading: string;
  textContents: string[];
}) => {
  return (
    <>
      <Box className="ContentBox">
        <Box className="ContentBox_header">
          <img src={imageSrc} alt="" />
          <h2 className="section-title">{heading}</h2>
        </Box>
        <Box className="ContentBox_body">
          {textContents.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TabContent;
