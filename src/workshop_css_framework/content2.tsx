import { Input } from "antd";

const content1 = () => {
  return (
    <>
      <div style={{ alignItems: "center", textAlign: "center" }}>
        <div
          style={{ marginTop: "40px", fontWeight: "bolder", textAlign: "left" }}
        >
          Contact :
        </div>
        <div style={{ textAlign: "left", marginTop: "10px" }}>Email</div>
        <Input style={{ marginTop: "10px" }} placeholder="" required />

        <div style={{ textAlign: "left", marginTop: "10px" }}>Phone </div>
        <Input style={{ marginTop: "10px" }} placeholder="" required />
      </div>
    </>
  );
};
export default content1;
