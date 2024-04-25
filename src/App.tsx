import React, { ReactNode, useState } from "react";
import { Steps, StepProps, Button, Row, Col, Form, message } from "antd";
import { motion } from "framer-motion";
import Page1 from "./workshop_css_framework/content1";
import Page2 from "./workshop_css_framework/content2";
import Page3 from "./workshop_css_framework/content3";

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
  const [current, setCurrent] = useState<number>(0);
  const [form] = Form.useForm();
  const contentItem: Contentall[] = [
    { content: <Page1 /> },
    { content: <Page2 /> },
    { content: <Page3 /> },
  ];

  const next = () => {
    setCurrent((prev) => prev + 1);
  };

  const prev = () => {
    setCurrent((prev) => prev - 1);
  };

  // const items = steps.map(() => ({}));

  return (
    <>
      <motion.div
        title="General"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "320px",
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                paddingBottom: "20px",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              Sign up From
            </div>
            <Steps current={current} items={contentItem} responsive={false} />
            <Form
              form={form}
              onFinish={() => {
                if (contentItem.length - 1 !== current) {
                  next();
                } else message.success("Sign Up complete!");
              }}
            >
              <div style={{ alignItems: "center" }}>
                {contentItem[current].content}
              </div>

              <Form.Item style={{ margin: "0" }}>
                <Row gutter={10} style={{ marginTop: 24 }}>
                  {current > 0 && (
                    <Col span={12}>
                      <Button
                        block
                        style={{
                          backgroundColor: "#fa541c",
                          color: "white",
                        }}
                        onClick={prev}
                      >
                        Previous
                      </Button>
                    </Col>
                  )}
                  {current < contentItem.length - 1 && (
                    <Col span={12}>
                      <Button
                        htmlType="submit"
                        block
                        style={{
                          backgroundColor: "#10239e",
                          color: "white",
                        }}
                      >
                        Next
                      </Button>
                    </Col>
                  )}
                  {current === contentItem.length - 1 && (
                    <Col span={12}>
                      <Button
                        htmlType="submit"
                        block
                        style={{ backgroundColor: "#eb2f96", color: "white" }}
                        // onClick={() => message.success("Processing complete!")}
                      >
                        Done
                      </Button>
                    </Col>
                  )}
                </Row>
              </Form.Item>
            </Form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default App;
