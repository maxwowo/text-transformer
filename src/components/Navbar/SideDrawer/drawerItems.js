// React
import React from "react";

// Icons
import CodeIcon from "@material-ui/icons/Code";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import EmailIcon from "@material-ui/icons/Email";

const drawerItems = [
  {text: "About", icon: <CodeIcon/>, link: "/about"},
  {text: "Processors", icon: <WhatsHotIcon/>, link: "/processors"},
  {text: "Contact", icon: <EmailIcon/>, link: "/contact"},
  {text: "Help", icon: <ContactSupportIcon/>, link: "/help"}
];

export default drawerItems;
