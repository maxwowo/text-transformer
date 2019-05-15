// React
import React from "react";

// Icons
import CodeIcon from "@material-ui/icons/Code";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import EmailIcon from "@material-ui/icons/Email";

const drawerItems = [
  {text: "About", icon: <CodeIcon/>},
  {text: "Processors", icon: <WhatsHotIcon/>},
  {text: "Make suggestion", icon: <EmailIcon/>},
  {text: "Help", icon: <ContactSupportIcon/>}
];

export default drawerItems;
