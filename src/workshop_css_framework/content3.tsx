import {
  Input,
  DatePicker,
  Radio,
  RadioChangeEvent,
  DatePickerProps,
  GetProps,
  Checkbox,
  Divider,
  CheckboxProps,
  GetProp,
  Switch,
} from "antd";
import { useState } from "react";
const onChange3 = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
const content1 = () => {
  type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ["ดูหนัง", "ฟังเพลง", "เล่นเกม", "อื่นๆ"];
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

  type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
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
          style={{ marginTop: "10px", fontWeight: "bolder", textAlign: "left" }}
        >
          Confirm :
        </div>
        <div style={{ textAlign: "left", margin: "10px 0px" }}>birth date</div>
        <div style={{ textAlign: "left", marginTop: "5px" }}>
          <DatePicker
            showTime
            onChange={(value, dateString) => {
              console.log("Selected Time: ", value);
              console.log("Formatted Selected Time: ", dateString);
            }}
            onOk={onOk}
          />
        </div>
        <div style={{ textAlign: "left", marginTop: "10px" }}>
          Gender:
          <Radio.Group
            style={{ paddingLeft: "10px" }}
            onChange={onChange}
            value={value}
          >
            <Radio value={1}>ชาย</Radio>
            <Radio value={2}>หญิง</Radio>
          </Radio.Group>
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
          <Input style={{ marginTop: "5px" }} placeholder="ระบุ" />
          <div
            style={{
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            ยอมรับเงื่อนไข :
            <Switch
              style={{
                marginLeft: "10px",
              }}
              checkedChildren
              unCheckedChildren
              onChange={onChange3}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default content1;
