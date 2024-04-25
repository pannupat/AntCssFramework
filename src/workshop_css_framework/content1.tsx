import ContentStep from "../component/ContentStep";
import { Form, Input } from "antd";

const content1 = () => {
  return (
    <ContentStep gap={24} title="General">
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              display: "inline-block",
              color: "red",
              marginInline: "4px",
              fontSize: "14px",
              fontFamily: "SimSun, sans-serif",
              lineHeight: "1",
              content: "*",
            }}
          >
            *
          </p>
          Username
        </div>
        <Form.Item
          style={{ margin: 0 }}
          name="username"
          rules={[{ required: true, message: "Please input your  username!" }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              display: "inline-block",
              color: "red",
              marginInline: "4px",
              fontSize: "14px",
              fontFamily: "SimSun, sans-serif",
              lineHeight: "1",
              content: "*",
            }}
          >
            *
          </p>
          Password
        </div>
        <Form.Item
          style={{ margin: 0 }}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </div>
    </ContentStep>
  );
};

export default content1;
