import { Col, Row } from "antd";

function Test() {
  return (
    <>
      <Row>
        <Col style={{ backgroundColor: "blue" }} span={24}>
          col-24
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8 }} style={{ backgroundColor: "red" }} span={12}>
          col-12
        </Col>
        <Col style={{ backgroundColor: "red" }} span={12}>
          col-12
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "green" }} span={8}>
          col-8
        </Col>
        <Col style={{ backgroundColor: "green" }} span={8}>
          col-8
        </Col>
        <Col style={{ backgroundColor: "green" }} span={8}>
          col-8
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "gray" }} span={6}>
          col-6
        </Col>
        <Col style={{ backgroundColor: "gray" }} span={6}>
          col-6
        </Col>
        <Col style={{ backgroundColor: "gray" }} span={6}>
          col-6
        </Col>
        <Col style={{ backgroundColor: "gray" }} span={6}>
          col-6
        </Col>
      </Row>
    </>
  );
}
export default Test;
