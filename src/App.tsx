import React, { useState } from "react";
import { Button, Col, Flex, Form, message, Row, Steps, theme } from "antd";
import Page1 from "./workshop_css_framework/content1";
import Page2 from "./workshop_css_framework/content2";
import Page3 from "./workshop_css_framework/content3";

const steps = [
  {
    content: <Page1 />,
  },
  {
    content: <Page2 />,
  },
  {
    content: <Page3 />,
  },
];
const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map(() => ({}));

  return (
    <>
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
          <Form onFinish={next}>
            <Steps current={current} items={items} responsive={false} />
            <div style={{ alignItems: "center" }}>{steps[current].content}</div>
            <Row gutter={10} style={{ marginTop: 24 }}>
              {current > 0 && (
                <Col span={12}>
                  <Button
                    block
                    style={{
                      backgroundColor: "#fa541c",
                      color: "white",
                    }}
                    onClick={() => prev()}
                  >
                    Previous
                  </Button>
                </Col>
              )}
              {current < steps.length - 1 && (
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
              {current === steps.length - 1 && (
                <Col span={12}>
                  <Button
                    block
                    style={{ backgroundColor: "#eb2f96", color: "white" }}
                    onClick={() => message.success("Processing complete!")}
                  >
                    Done
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default App;
