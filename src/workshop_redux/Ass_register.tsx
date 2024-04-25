import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { enterRegister, clearForm } from "../store/slice/registerSlice";
import { RootState } from "../store/store";
import { useEffect } from "react";
import vite from "./img/vite.png";
import react from "./img/react.png";
const Ass_register = () => {
  const registerState = useSelector((state: RootState) => state.register);
  const dispatch2 = useDispatch();
  const data = {
    username: "cccc",
    email: "asdasd@jasd.com",
    password: "sdadhh",
  };
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    dispatch(enterRegister(value));
  };
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const onReset = () => {
    form.resetFields();
    dispatch(clearForm());
  };
  useEffect(() => {
    console.log(registerState);
  }, [registerState]);

  return (
    <>
      <motion.div
        title="General"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
        }}
        className="flex"
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "420px",
              padding: "40px",
              borderRadius: "10px",
            }}
          >
            <div className="flex flex-row justify-between pl-10 pr-10 ">
              <img className="w-28 " src={vite} alt="" />
              <img className="w-28" src={react} alt="" />
            </div>
            <div
              style={{
                textAlign: "center",
                paddingBottom: "20px",
                fontSize: "50px",
                fontWeight: "bolder",
                color: "white",
              }}
            >
              Vite & React
            </div>

            <Form form={form} onFinish={onFinish}>
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
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
                    rules={[
                      {
                        required: true,
                        message: "Please input your  username!",
                      },
                    ]}
                  >
                    <Input className="bg-gray-400" />
                  </Form.Item>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
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
                    <Input className="bg-gray-400" />
                  </Form.Item>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
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
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password className="bg-gray-400 " />
                </Form.Item>

                <Form.Item className="flex justify-center pt-10">
                  <Button
                    className=" w-[340px] text-white self-center bg-gray-500 hover:bg-black hover:text-white"
                    htmlType="submit"
                  >
                    Register
                  </Button>
                </Form.Item>
              </motion.div>
            </Form>
          </div>
        </div>
        <div className="p-10 bg-white rounded-md w-96">
          <h2 className="text-[30px] text-center font-extrabold ">
            ข้อมูลจาก Reducer
          </h2>
          <div className="data text-black flex flex-col">
            <div className="flex">
              <p className="font-bold">Username : </p>
              <p className="pl-3">
                {registerState.username !== ""
                  ? registerState.username
                  : "ยังไม่มีข้อมูล"}
              </p>
            </div>
            <div className="flex">
              <p className="font-bold">Email : </p>
              <p className="pl-3">
                {registerState.email !== ""
                  ? registerState.email
                  : "ยังไม่มีข้อมูล"}
              </p>
            </div>
            <div className="flex">
              <p className="font-bold">Password : </p>
              <p className="pl-3">
                {registerState.password !== ""
                  ? registerState.password
                  : "ยังไม่มีข้อมูล"}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Ass_register;
