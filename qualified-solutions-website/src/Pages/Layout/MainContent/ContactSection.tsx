import { FormEvent, SyntheticEvent, useState } from 'react'
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import toast from 'react-hot-toast';
import { toastStyleError, toastStyleSuccess } from '../../../App';
import { postFormData } from '../../../Redux/AppSlice/app.service';
import { AppUrls } from '../../../AppUrls';
import { Link } from 'react-router-dom';
//icons
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const ContactSection = () => {
    interface InitContactForm {
        firstName: string;
        lastName: string;
        websiteURL: string;
        jobTitle: string;
        email: string;
        companySize: string;
        phoneNumber: string;
        country: string;
        companyName: string;
        state: string;
    }
    const initContactForm: InitContactForm = {
        firstName: "",
        lastName: "",
        websiteURL: "",
        jobTitle: "",
        email: "",
        companySize: "",
        phoneNumber: "",
        country: "",
        companyName: "",
        state: ""
    };
    const [showSubmBtn, setShowSubmBtn] = useState<boolean>(false);
    const [contactForm, setContactForm] = useState<InitContactForm>(initContactForm);
    const isFormValid = Object.values(contactForm).every((value) => value !== "");
    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setContactForm({
            ...contactForm,
            [name]: value
        });
    };
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isFormValid) {
            toast.error("Please fill all the details.", toastStyleError);
            return;
        };
        const formBody = {
            "destination": "sales@spartanapproach.com",
            "subject": "New contact request from @Qualified Solutions Website",
            "source": "Spartan Approach <support@spartanapproach.com>",
            "lead_id": "website",
            "text": `<b>New contact:</b> <br /> \n        Full Name: ${contactForm.firstName} ${contactForm.lastName} <br /> \n        Email: ${contactForm.email} <br />\n        Phone Number: ${contactForm.phoneNumber}<br />\n        <b>Company Information</b> <br />\n        Company Name: ${contactForm.companyName}<br />\n        Size: ${contactForm.companySize}<br />\n        Job Title: ${contactForm.jobTitle}<br />\n        Country: ${contactForm.country}<br />\n        State: ${contactForm.state}<br />\n        Website: ${contactForm.websiteURL} <br />`
        };
        console.log("--------------+++", formBody);
        postFormData(formBody).then((response) => {
            if (response?.data.status_code === "200") {
                setContactForm(initContactForm);
                setShowSubmBtn(true);
                setTimeout(() => {
                    setShowSubmBtn(false);
                }, 3000)
                toast.success("Form submitted successfully.", toastStyleSuccess);
            } else {
                toast.error("There was an error while sending your details.", toastStyleError);
            };
        })
    };
    return (
        <Box className="footer">
            <Box className="footer__bottom">
                <h4 className="footer__title">Contact Us</h4>
                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <Box sx={{ paddingRight: "50px" }} component={"form"} onSubmit={handleSubmit}>
                            <Box className="FooterForm" >
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    name="firstName"
                                    value={contactForm.firstName}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="company_size"
                                    label="Company Size"
                                    name="companySize"
                                    value={contactForm.companySize}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="lastName"
                                    value={contactForm.lastName}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="job_title"
                                    label="Job Title"
                                    name="jobTitle"
                                    value={contactForm.jobTitle}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    type="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    value={contactForm.email}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    label="Website URL"
                                    required
                                    fullWidth
                                    id="website_url"
                                    name="websiteURL"
                                    value={contactForm.websiteURL}
                                    onChange={handleChange}
                                />
                                {/* new changes */}
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    label="Phone Number"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={contactForm.phoneNumber}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    label="Country"
                                    required
                                    fullWidth
                                    id="country"
                                    name="country"
                                    value={contactForm.country}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    label="Company Name"
                                    required
                                    fullWidth
                                    id="companyName"
                                    name="companyName"
                                    value={contactForm.companyName}
                                    onChange={handleChange}
                                />
                                <TextField
                                    className="FormGroup"
                                    margin="normal"
                                    label="State"
                                    required
                                    fullWidth
                                    id="state"
                                    name="state"
                                    value={contactForm.state}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Typography className="footer__bottom__Content" mt={3}>
                                By submitting this form, I consent to be contacted by Spartan
                                Approach or its affiliate companies listed below regarding
                                their software products and services at the phone number/email
                                provided, including my wireless number if provided. Contact
                                methods may include phone calls generated using automated
                                technology, prerecorded voice, text messaging and/or email.
                                Standard message rates apply. I understand that consent is not
                                a condition of purchase. I also have read and agree to the
                                <a href={`https://spartanapproach.com/privacy`} target="_blank">
                                    Terms and Conditions and Privacy Policy of this website.
                                </a>
                            </Typography>
                            <Box className="footer__action">
                                {!showSubmBtn && <Button className="btn orange-btn" type="submit" disabled={!isFormValid}>Submit</Button>}
                                {showSubmBtn && <Button className="submittedBtn" disabled>Your Request has been Submitted</Button>}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box className="footerRight" sx={{ paddingLeft: "50px" }}>
                            <Typography className="footer__bottom__Content">
                                If you have any questions about Spartan Approach’s services
                                and want to learn how they can turbo charge your sales cycle,
                                fill out the form below to request your FREE demo today!
                            </Typography>
                            <Box className="contentBoxMain">
                                <Box className="contectBox">
                                    <Typography className="contectBox__title">
                                        Give us a call
                                    </Typography>
                                    <Typography className="contectBox__content">
                                        Toll Free <a href="tel:18775137568">+1-877-513-7568</a>
                                    </Typography>
                                </Box>
                                <Box className="contectBox">
                                    <Typography className="contectBox__title">
                                        Email us
                                    </Typography>
                                    <Typography className="contectBox__content">
                                        sales@spartanapproach.com
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="socialMedia">
                                <h2 className="socialMedia_title">Follow Us</h2>
                                <Box className="socialMedia_inner">
                                    <Link to={"https://www.facebook.com/spartanapproach"}>
                                        <FaFacebookF />
                                    </Link>
                                    <Link to={"https://www.instagram.com/spartanapproach/"}>
                                        <AiOutlineInstagram />
                                    </Link>
                                    <Link to={"https://www.linkedin.com/company/spartan-approach"}>
                                        <AiFillLinkedin />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ContactSection