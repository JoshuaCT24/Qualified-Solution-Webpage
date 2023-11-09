//dependencies
import { useState, FormEvent, SyntheticEvent } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Element, Link as ScrollLink } from "react-scroll";
import toast from "react-hot-toast";

//images
import { AppUrls } from "../../../AppUrls";
import careerform from "../../../Assets/images/careerform.png";
//icons
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
//styles
import "./Careers.scss";
import { toastStyleError, toastStyleSuccess } from "../../../App";
import { postFormData } from "../../../Redux/AppSlice/app.service";

const Careers = () => {
  interface InitContactForm {
    firstName: string;
    lastName: string;
    englishLevel: string;
    email: string;
    phone: string;
  }
  const initContactForm: InitContactForm = {
    firstName: "",
    lastName: "",
    englishLevel: "",
    email: "",
    phone: ""
  };
  const [contactForm, setContactForm] = useState<InitContactForm>(initContactForm);
  const isFormValid = Object.values(contactForm).every((value) => value !== "");
  const [checkedCareersContactUs, setCheckedCareersContactUs] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };
  const handleCheckBoxChange = () => {
    setCheckedCareersContactUs(!checkedCareersContactUs)
    setChecked(!checked);
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isFormValid) {
      toast.error("Please fill all the details.", toastStyleError);
      return;
    };
    if (!checkedCareersContactUs) {
      toast.error("check the checkbox", toastStyleError);
      return;
    };
    const formBody = {
      "destination": "sales@spartanapproach.com",
      "subject": "New contact request from @Qualified Solutions Website",
      "source": "Spartan Approach <support@spartanapproach.com>",
      "lead_id": "website",
      "text": `<b>New contact:</b> <br /> \n        Full Name: ${contactForm.firstName} ${contactForm.lastName} <br /> \n        Email: ${contactForm.email} <br />\n        English Level: ${contactForm.englishLevel}<br />\n       Phone: ${contactForm.phone} <br />`
    };
    postFormData(formBody).then((response) => {
      if (response?.data.status_code === "200") {
        setContactForm(initContactForm);
        setChecked(false);
        setCheckedCareersContactUs(false);
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
        toast.success("Form submitted successfully.", toastStyleSuccess);
      } else {
        toast.error("There was an error while sending your details.", toastStyleError);
      };
    })

  };
  return (
    <>
      <div className="careers-wrapper">
        <div className="careerbanner">
          <h2 className="titleMain">Join our team!</h2>
          <Box className="btnPart">
            <button className="btn orange-btn">
              <ScrollLink
                to="applyJoinForm"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                Apply Now
              </ScrollLink>
            </button>
          </Box>
        </div>
        <Element name="applyJoinForm">
          <div className="contactCareer">
            <Grid className="contactCareer_inner" container spacing={2}>
              <Grid item md={6}>
                <Box className="careerformGirl">
                  <img src={careerform} alt="" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className="contactCareer_form" component="form" onSubmit={handleSubmit}>
                  <Box>
                    <Box className="formGroup">
                      <TextField
                        className="formControl"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={contactForm.firstName}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box className="formGroup">
                      <TextField
                        className="formControl"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={contactForm.lastName}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box className="formGroup">
                      <TextField
                        className="formControl"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box className="formGroup">
                      <TextField
                        className="formControl"
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box className="formGroup">
                      <TextField
                        className="formControl"
                        type="text"
                        placeholder="English Level"
                        name="englishLevel"
                        value={contactForm.englishLevel}
                        onChange={handleChange}
                      />
                    </Box>
                    <div className="CustomCheckBox">
                      <input
                        type="checkbox"
                        id="careersCheckbox"
                        name="careersCheckbox"
                        checked={checked}
                        onChange={handleCheckBoxChange}
                      />
                      <label>
                        <span>
                          I have read and agree to the terms and conditions.
                        </span>
                        <a href={`${AppUrls.Client.TermsConditions}`}>
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                    {/* <Box textAlign={"center"} className="formGroup"></Box> */}
                    <Box className="socialMedia">
                      {!formSubmitted && <button className="btn orange-btn" type="submit">Apply Now</button>}
                      {formSubmitted && <button className="btn" disabled>Your Request has been Submitted</button>}
                      <Box className="socialMedia_inner">
                        <Link
                          to={
                            "https://www.facebook.com/search/top?q=qualified%20solutions%20de%20m%C3%A9xico"
                          }
                        >
                          <FaFacebookF />
                        </Link>
                        <Link to={"https://www.instagram.com/qsolutionsmx"}>
                          <AiOutlineInstagram />
                        </Link>
                        <Link
                          to={
                            "https://wa.link/ity1ij?fbclid=IwAR0rcFQV4R61WY7ZllObpxQVxn5BOu_Sxl0cwVUPk-0d_HThVFrzjjkeEoc"
                          }
                        >
                          <BsWhatsapp />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Element>
      </div>
    </>
  );
};

export default Careers;
