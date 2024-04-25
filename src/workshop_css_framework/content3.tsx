import {
  Input,
  DatePicker,
  Radio,
  RadioChangeEvent,
  Checkbox,
  Divider,
  CheckboxProps,
  GetProp,
  Switch,
  Form,
} from "antd";
import { useState } from "react";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onChange3 = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
const content1 = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ["ดูหนัง", "ฟังเพลง", "เล่นเกม"];
  const defaultCheckedList = [""];
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;

  const onChange2 = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <div style={{ alignItems: "center", textAlign: "center" }}>
        <div
          style={{
            marginTop: "10px",
            fontWeight: "bolder",
            textAlign: "left",
          }}
        >
          Confirm :
        </div>
        <div style={{ textAlign: "left", marginTop: "5px" }}>
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
            Birth Date
          </div>
          <Form.Item
            style={{ margin: 0 }}
            name="birthDate"
            rules={[
              {
                required: true,
                message: "Please input your Birth Date",
                type: "date",
              },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            marginTop: "10px",
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
          Gender
          <Form.Item
            style={{ margin: 0 }}
            name="radio-group"
            rules={[
              {
                required: true,
                message: "Please selet your Gender",
              },
            ]}
          >
            <Radio.Group
              style={{ paddingLeft: "10px" }}
              onChange={onChange}
              value={value}
            >
              <Radio value={1}>ชาย</Radio>
              <Radio value={2}>หญิง</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div style={{ textAlign: "left", marginTop: "10px" }}>งานอดิเรก</div>
        <div style={{ textAlign: "left", marginTop: "5px" }}>
          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
            เลือกทั้งหมด
          </Checkbox>
          <Divider />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange2}
          />
          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          >
            อื่นๆ
          </Checkbox>
          <Form disabled={!componentDisabled}>
            <Form.Item>
              <Input placeholder="ระบุ" />
            </Form.Item>
          </Form>
          <div
            style={{
              textAlign: "left",
              marginTop: "10px",
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
            ยอมรับเงื่อนไข :
            <Form.Item
              style={{ marginLeft: "5px" }}
              name="switch"
              rules={[
                {
                  validator(_, value) {
                    if (value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error("Please turn on switch to accept")
                      );
                    }
                  },
                },
              ]}
            >
              <Switch
                style={{
                  marginLeft: "10px",
                }}
                checkedChildren
                unCheckedChildren
                onChange={onChange3}
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
};
export default content1;
