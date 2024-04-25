import { Form, Input } from "antd";
import { motion } from "framer-motion";
import registerSlice from "../store/slice/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import { enterRegister } from "../store/slice/registerSlice";

const content1 = () => {
  return (
    <motion.div
      title="General"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
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
        Email
      </div>
      <Form.Item
        style={{ margin: 0 }}
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

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
    </motion.div>
  );
};

export default content1;
