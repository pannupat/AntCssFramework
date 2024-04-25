import React from "react";
import registerSlice from "../store/slice/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import { enterRegister, clearForm } from "../store/slice/registerSlice";
import Password from "antd/es/input/Password";
import { RootState } from "../store/store";

function Register() {
  const registerState = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();
  const data = {
    username: "cccc",
    email: "asdasd@jasd.com",
    password: "sdadhh",
  };

  return (
    <div>
      <button
        onClick={() => dispatch(enterRegister(data))}
        className="p-[5px] bg-white text-green-600 cursor-pointer border-2 rounded-lg mt-10 mr-10 justify-between"
      >
        submit
      </button>
      {registerState.username}
      {registerState.email}
      {registerState.password}

      <button
        onClick={() => dispatch(clearForm())}
        className="p-[5px] bg-white text-green-600 cursor-pointer border-2 rounded-lg mt-10 mr-10 justify-between"
      >
        clear
      </button>
    </div>
  );
}

export default Register;
