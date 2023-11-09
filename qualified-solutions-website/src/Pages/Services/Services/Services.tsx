//dependencies
import { Box, Tab, Tabs } from "@mui/material";
import { useDispatch } from "react-redux";
//components
import TabContent from "./TabContent/TabContent";
//images
import Helpdesk from "../../../Assets/images/Helpdesk.svg";
import OrderProcessing from "../../../Assets/images/OrderProcessing.svg";
import Inbound from "../../../Assets/images/inbound.svg";
import DispatchingServices from "../../../Assets/images/DispatchingServices.svg";
import ManageVoicemail from "../../../Assets/images/ManageVoicemail.svg";
import Interactive from "../../../Assets/images/Interactive.svg";
import Multichannel from "../../../Assets/images/Multichannel.svg";
import ExpandSales from "../../../Assets/images/ExpandSales.svg";
import QualityAssurance from "../../../Assets/images/QualityAssurance.svg";
import { ReactComponent as Helpdeskicon } from "../../../Assets/images/Helpdesk.svg";
import { ReactComponent as OrderProcessingicon } from "../../../Assets/images/OrderProcessing.svg";
import { ReactComponent as Inboundicon } from "../../../Assets/images/inbound.svg";
import { ReactComponent as DispatchingServicesicon } from "../../../Assets/images/DispatchingServices.svg";
import { ReactComponent as ManageVoicemailicon } from "../../../Assets/images/ManageVoicemail.svg";
import { ReactComponent as Interactiveicon } from "../../../Assets/images/Interactive.svg";
import { ReactComponent as Multichannelicon } from "../../../Assets/images/Multichannel.svg";
import { ReactComponent as ExpandSalesicon } from "../../../Assets/images/ExpandSales.svg";
import { ReactComponent as QualityAssuranceicon } from "../../../Assets/images/QualityAssurance.svg";
//redux
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { setServicesTabNum } from "../../../Redux/AppSlice/app.slice";
//styles
import "./Services.scss";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      className="tabbingContent"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

const Services = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tabNum = useSelector((store: RootState) => store.appSlice.servicesTabNum);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setServicesTabNum(newValue));
  };
  return (
    <>
      <Box className="tabBox">
        <Tabs
          className="tabBox_innerLeft"
          value={tabNum}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<> <Helpdeskicon style={{ height: "24px" }} />Help Desk Support</>}{...a11yProps(0)} />
          <Tab label={<><OrderProcessingicon style={{ height: "24px" }} />Order Processing</>}{...a11yProps(1)} />
          <Tab label={<><Inboundicon />Inbound & Outbound Call Handling</>}{...a11yProps(2)} />
          <Tab label={<><DispatchingServicesicon style={{ height: "24px" }} /> Dispatching Services</>}{...a11yProps(3)} />
          <Tab label={<><ManageVoicemailicon style={{ height: "27px" }} />Manage Voicemail</>} {...a11yProps(4)} />
          <Tab label={<><Interactiveicon />Interactive Voice Response</>} {...a11yProps(5)} />
          <Tab label={<><Multichannelicon />Multichannel Communications Services</>} {...a11yProps(6)} />
          <Tab label={<><ExpandSalesicon style={{ height: "23px" }} />Expand Your Sales Reach</>} {...a11yProps(7)} />
          <Tab label={<><QualityAssuranceicon />Quality Assurance Services</>} {...a11yProps(8)} />
        </Tabs>
        <Box className="tabBox_innerRight">
          <CustomTabPanel value={tabNum} index={0}>
            <TabContent
              imageSrc={Helpdesk}
              heading="Help Desk Support"
              textContents={[
                "We create fully integrated help desk Support programs tailored specifically to the needs of individual businesses.",
                "Incoming calls are promptly answered by our skilled agents who will identify customers' issues and escalate them accordingly for effective resolution.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={1}>
            <TabContent
              imageSrc={OrderProcessing}
              heading="Order Processing"
              textContents={[
                "Our agents are proficient in handling customer calls related to  placing orders for your products or services.",
                "They can provide a  detailed explanation of the available purchasing options, take  orders, and diligently record all the relevant order information.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={2}>
            <TabContent
              imageSrc={Inbound}
              heading="Inbound & Outbound Call Handling"
              textContents={[
                "While receiving inbound calls our agents are equipped to handle any queries, concerns or issues that may arise.",
                "They are trained to attend to these matters promptly and can seamlessly transfer the calls to a particular department for further assistance.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={3}>
            <TabContent
              imageSrc={DispatchingServices}
              heading="Dispatching Services"
              textContents={[
                "Our agents are efficient in coordinating dispatching services and arranging routes as required.",
                "They can also closely monitor the status of shipments and deliveries for customers to ensure timely and efficient delivery.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={4}>
            <TabContent
              imageSrc={ManageVoicemail}
              heading="Manage Voicemail"
              textContents={[
                "With automated voicemail services you can easily field calls and messages received after hours, ensuring that your business never misses a beat.",
                "It is an essential function for any modern company, preventing employees from experiencing message overload by allowing the focus to be on the current tasks at hand.",
                "Our solution is designed to seamlessly integrate with your business operations, providing a reliable and efficient way to manage your calls and messages.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={5}>
            <TabContent
              imageSrc={Interactive}
              heading="Interactive Voice Response"
              textContents={[
                "Qualified Solutions enhanced IVR systems enable callers to navigate menus more efficiently while speaking naturally.",
                "The system understands the caller's choices and automatically directs them to the appropriate destination, whether that’s one of our call center agents or the client's internal representatives.",
                "This improves the customer experience and reduces waiting times.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={6}>
            <TabContent
              imageSrc={Multichannel}
              heading="Multichannel Communications Services"
              textContents={[
                "In addition to voice communication, we provide services such as sending and receiving SMS and emails, as well as overseeing order fulfilment.",
                "This helps businesses communicate with their customers more efficiently, providing a convenient way to send notifications, confirmations, and updates on products or services. ",
                "We offer a comprehensive range of customizable communication tasks to support our clients' needs.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={7}>
            <TabContent
              imageSrc={ExpandSales}
              heading="Expand Your Sales Reach"
              textContents={[
                "Our agents are efficient in coordinating dispatching services and arranging routes as required.",
                "They can also closely monitor the status of shipments and deliveries for customers to ensure timely and efficient delivery.",
              ]}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tabNum} index={8}>
            <TabContent
              imageSrc={QualityAssurance}
              heading="Quality Assurance Services"
              textContents={[
                "We offer a comprehensive customized quality assurance program to monitor the day-to-day interactions between customers and internal or external representatives.",
                "Through this process, we can help our clients identify top performers and zone in on areas of improvement.",
                "This provides a proactive approach to improving overall customer experience.",
              ]}
            />
          </CustomTabPanel>
        </Box>
      </Box >
    </>
  );
};

export default Services;
