import { Button, Form, Input, Space } from "antd";
import type { FormProps } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

export const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
  errorInfo
) => {
  console.log("Failed:", errorInfo);
};

const content1 = () => {
  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              marginTop: "40px",
              fontWeight: "bolder",
              textAlign: "left",
            }}
          >
            General :
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" }}>Username</div>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <div style={{ textAlign: "left", marginTop: "10px" }}>Password</div>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </div>
      </Form>
    </>
  );
};
export default content1;
