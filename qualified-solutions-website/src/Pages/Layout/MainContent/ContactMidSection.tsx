import { FormEvent, useState, SyntheticEvent } from "react"
import { Box, TextField, } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
//images
import Spartanapproach from "../../../Assets/images/spartanapproach.png";
import HumanLeft from "../../../Assets/images/HumanLeft.png";
import HumanRight from "../../../Assets/images/HumanRight.png";
import toast from "react-hot-toast";
import { toastStyleError, toastStyleSuccess } from "../../../App";
import { postFormData } from "../../../Redux/AppSlice/app.service";
import { AppUrls } from "../../../AppUrls";
//icons
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import BoxImage from "../../../Assets/images/boxImage.png";
import { ReactComponent as SpartanApproach } from "../../../Assets/images/spartanApproach.svg";
const ContactMidSection = () => {
    interface InitContactUsForm {
        firstName: string;
        lastName: string;
        websiteURL: string;
        jobTitle: string;
        email: string;
        companySize: string;
        phoneNumber: string;
        companyNumber: string;
        country: string;
    }
    const initContactUsForm: InitContactUsForm = {
        firstName: "",
        lastName: "",
        websiteURL: "",
        jobTitle: "",
        email: "",
        companySize: "",
        phoneNumber: "",
        companyNumber: "",
        country: "",
    };
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [contactUsForm, setContactUsForm] = useState<InitContactUsForm>(initContactUsForm);
    const [checkedHomeContactUs, setCheckedHomeContactUs] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const isFormValid = Object.values(contactUsForm).every((value) => value !== "");
    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setContactUsForm({
            ...contactUsForm,
            [name]: value
        });
    };
    const handleCheckBoxChange = () => {
        setCheckedHomeContactUs(!checkedHomeContactUs)
        setChecked(!checked);
    };
    const handleFormSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isFormValid) {
            toast.error('Please fill all the details', toastStyleError);
            return;
        };
        if (!checkedHomeContactUs) {
            toast.error("check the checkbox", toastStyleError);
            return;
        };
        const formBody = {
            "destination": "sales@spartanapproach.com",
            "subject": "New contact request from @Qualified Solutions Website",
            "source": "Spartan Approach <support@spartanapproach.com>",
            "lead_id": "website",
            "text": `<b>New contact:</b> <br /> \n        Full Name: ${contactUsForm.firstName} ${contactUsForm.lastName} <br /> \n        Email: ${contactUsForm.email} <br />\n        Phone: ${contactUsForm.phoneNumber} <br />\n        <b>Company Information</b> <br />\n        Size: ${contactUsForm.companySize}<br />\n        Job Title: ${contactUsForm.jobTitle}<br />\n        Website: ${contactUsForm.websiteURL} <br /><br />\n        Country: ${contactUsForm.country} <br />`
        };
        postFormData(formBody).then((response) => {
            if (response?.data.status_code === "200") {
                setFormSubmitted(true);
                setTimeout(() => {
                    setFormSubmitted(false);
                }, 3000)
                setContactUsForm(initContactUsForm);
                setChecked(false);
                setCheckedHomeContactUs(false);
                toast.success("Form submitted successfully.", toastStyleSuccess)
            } else {
                toast.error("There was an error while sending your details.", toastStyleError);
            };
        })
    };
    return (
        <>
            <Box className="formSectionSecond">
                <Box className="HumanLeft" >
                    <img src={HumanLeft} alt="" />
                </Box>
                <Box className="formRight">
                    <Box className="formRight_inner">
                        <Box className="formSectionSecond_inner">
                            <Box className="formSectionSecond_top">
                                <h3 className="section-title">
                                    Thank You for Reaching Out to Us
                                </h3>
                                <p>
                                    Our services are delivered to the highest possible standard,
                                    boosting operational efficiency for maximum return on
                                    investment.
                                </p>
                            </Box>

                            <Box className="ContactForm" component="form" onSubmit={handleFormSubmit} >
                                <h3 className="section-title">Contact Us</h3>
                                <Box className="ContactForm_inner">
                                    <TextField
                                        required
                                        className="FormGroup"
                                        id="first_name"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={contactUsForm.firstName}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        id="last_name"
                                        name="lastName"
                                        value={contactUsForm.lastName}
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        placeholder="Website URL"
                                        name="websiteURL"
                                        value={contactUsForm.websiteURL}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        placeholder="Job Title*"
                                        name="jobTitle"
                                        value={contactUsForm.jobTitle}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        type="email"
                                        placeholder="Email*"
                                        name="email"
                                        value={contactUsForm.email}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        placeholder="Company Size*"
                                        name="companySize"
                                        value={contactUsForm.companySize}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        placeholder="Phone Number*"
                                        name="phoneNumber"
                                        value={contactUsForm.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        placeholder="Company Name"
                                        name="companyNumber"
                                        value={contactUsForm.companyNumber}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        className="FormGroup"
                                        placeholder="Country*"
                                        name="country"
                                        value={contactUsForm.country}
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box className="CustomCheckBox">
                                    <input
                                        type="checkbox"
                                        id="vehicle1"
                                        name="vehicle1"
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
                                </Box>
                                <Box textAlign={"center"} display={"flex"} flexDirection={"column"}>
                                    {!formSubmitted && <button type="submit" className="btn orange-btn">Submit</button>}
                                    {formSubmitted && <button className="btn" disabled>Your Request has been Submitted</button>}
                                </Box>
                            </Box>
                        </Box>
                        <Box className="HumanRight">
                            <img src={HumanRight} alt="" />
                            <Box className="socialMedia">
                                <Box className="socialMedia_inner">
                                    <Link
                                        to={
                                            "https://www.facebook.com/QualifiedSolutionsMX "
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

                    <Box className="corporateSection">
                        <Box className="corporateSection_left">
                            <h3 className="section-title">Corporate Associate</h3>
                            <p>
                                Suppose you are interested in powering your sales and
                                incrementing your retention rate.
                            </p>
                            <p>
                                In that case, we recommend acquiring additional services for
                                complete coverage of your sales process through our corporate
                                associate, Spartan Approach.
                            </p>
                            <p>
                                Visit{" "}
                                <a href="https://spartanapproach.com">spartanapproach.com</a>{" "}
                                or fill out the form below to request a FREE demo today!
                            </p>
                        </Box>
                        <Box className="corporateSection_brand">
                            <img src={Spartanapproach} alt="" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="boxImage">
                <img src={BoxImage} alt="" />
            </Box>
            <Box className="SpartanApproach" >
                <SpartanApproach />
            </Box>
        </>
    )
}

export default ContactMidSection