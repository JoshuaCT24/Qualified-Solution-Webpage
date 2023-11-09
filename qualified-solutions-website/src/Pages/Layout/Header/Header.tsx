//dependencies
import { useState, MouseEvent } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useDispatch } from "react-redux/es/exports";
import { Box, AppBar, IconButton, Menu, Tabs, Tab } from "@mui/material";
import Fade from "@mui/material/Fade";
import { AppUrls } from "../../../AppUrls";
//images
import Brand from "../../../Assets/Logo.svg";
import Hamburger from "../../../Assets/images/Hamburger.png";
import { ReactComponent as Helpdeskicon } from "../../../Assets/images/Helpdesk.svg";
import { ReactComponent as OrderProcessingicon } from "../../../Assets/images/OrderProcessing.svg";
import { ReactComponent as Inboundicon } from "../../../Assets/images/inbound.svg";
import { ReactComponent as DispatchingServicesicon } from "../../../Assets/images/DispatchingServices.svg";
import { ReactComponent as ManageVoicemailicon } from "../../../Assets/images/ManageVoicemail.svg";
import { ReactComponent as Interactiveicon } from "../../../Assets/images/Interactive.svg";
import { ReactComponent as Multichannelicon } from "../../../Assets/images/Multichannel.svg";
import { ReactComponent as ExpandSalesicon } from "../../../Assets/images/ExpandSales.svg";
import { ReactComponent as QualityAssuranceicon } from "../../../Assets/images/QualityAssurance.svg";
//styles
import "./Header.scss";
//redux
import { AppDispatch } from "../../../Redux/store";
import { setServicesTabNum } from "../../../Redux/AppSlice/app.slice"

const ContactHeader = () => {
  const location = useLocation();
  return location.pathname === "/Home" ? (<ScrollLink
    to="contactSection"
    spy={true}
    smooth={true}
    duration={500}
    offset={-50}
  >
    Contact
  </ScrollLink>) : (
    <NavLink className={({ isActive }) =>
      isActive ? "activeLink" : ""
    }
      to={`${AppUrls.Client.Contact}`}
    >
      Contact
    </NavLink>
  )
}

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeServices, setActiveServices] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClick = (value: number) => {
    navigate(`${AppUrls.Client.Services}`);
    dispatch(setServicesTabNum(value));
    setActiveServices(true);
    handleCloseMenu();
  };
  const handleOtherLinkClick = () => {
    setActiveServices(false);
  }

  return (
    <AppBar
      className={open ? "mainHeader active" : "mainHeader"}
      position="sticky"
    >
      {/* <Container> */}
      <Box className="mainHeader__inner">
        <Box className="mainHeader__logo">
          <Link
            to={`${AppUrls.Client.Home}`}
            onClick={() => {
              navigate(`${AppUrls.Client.Home}`);
            }}
            className="mainHeader__logo"
          >
            <img src={Brand} alt="Brand" />
            {/* <Logo /> */}
          </Link>
        </Box>
        <Box>
          <IconButton className="button menuBtn" onClick={() => setOpen(!open)}>
            {open ? "X" : <img src={Hamburger} alt="" />}
          </IconButton>
          <Box className="mainHeader__menu" sx={{ flexGrow: 1 }}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : ""
              }
              to={`${AppUrls.Client.Home}`}
              onClick={handleOtherLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : ""
              }
              to={`${AppUrls.Client.AboutUs}`}
              onClick={handleOtherLinkClick}
            >
              About Us
            </NavLink>
            {/*  */}
            {
              activeServices ?
                <NavLink
                  className="activeLink"
                  to={`${AppUrls.Client.Services}`}
                  onClick={handleOpenMenu}
                >
                  Services
                </NavLink>
                :
                <a onClick={handleOpenMenu}>Services</a>
            }
            <Menu
              className="ServiceBox"
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleCloseMenu}
              TransitionComponent={Fade}
            >
              <Tabs
                className=""
                aria-label="basic tabs example"
              >
                <Tab
                  onClick={() => handleClick(0)}
                  label={<><Helpdeskicon style={{ height: "22px" }} />Help Desk Support</>}
                />
                <Tab
                  onClick={() => handleClick(3)}
                  label={<><DispatchingServicesicon style={{ height: "22px" }} /> Dispatching Services</>}
                />
                <Tab
                  onClick={() => handleClick(6)}
                  label={<><Multichannelicon />Multichannel Communications Services</>}
                />
                <Tab
                  onClick={() => handleClick(1)}
                  label={<><OrderProcessingicon style={{ height: "22px" }} />Order Processing</>}
                />
                <Tab
                  onClick={() => handleClick(4)}
                  label={<><ManageVoicemailicon />Manage Voicemail</>}
                />
                <Tab
                  onClick={() => handleClick(7)}
                  label={<><ExpandSalesicon />Expand Your Sales Reach</>}
                />
                <Tab
                  onClick={() => handleClick(2)}
                  label={<><Inboundicon />Inbound & Outbound Call Handling</>}
                />
                <Tab
                  onClick={() => handleClick(5)}
                  label={<><Interactiveicon />Interactive Voice Response</>}
                />
                <Tab
                  onClick={() => handleClick(8)}
                  label={<><QualityAssuranceicon />Quality Assurance Services</>}
                />
              </Tabs>
            </Menu>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : ""
              }
              to={`${AppUrls.Client.Careers}`}
              onClick={handleOtherLinkClick}
            >
              Careers
            </NavLink>
            <ContactHeader />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
