import { Form, Input } from "antd";
import { motion } from "framer-motion";

const content2 = () => {
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
          Phones
        </div>
        <Form.Item
          style={{ margin: 0 }}
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
              pattern: /^[0-9]{10}$/,
            },
          ]}
        >
          <Input maxLength={10} />
        </Form.Item>
      </div>
    </motion.div>
  );
};

export default content2;
