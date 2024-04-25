import React, { ReactNode, useState } from "react";
import { Steps, StepProps, Button, Row, Col, Form, message } from "antd";
import { motion } from "framer-motion";
import Page1 from "./workshop_css_framework/content1";
import Page2 from "./workshop_css_framework/content2";
import Page3 from "./workshop_css_framework/content3";
import Counter from "./component/Counter";
import Register from "./component/Register";
import Ass_redux from "./workshop_redux/Ass_register";

// const steps = [
//   {
//     content: <Page1 />,
//   },
//   {
//     content: <Page2 />,
//   },
//   {
//     content: <Page3 />,
//   },
// ];
interface Contentall extends StepProps {
  content?: ReactNode;
}
const App: React.FC = () => {
  return (
    <>
      <Ass_redux />
    </>
  );
};

export default App;
