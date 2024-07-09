import { Select } from "antd";
import "./LeftSideFilters.css";

const { Option } = Select;

function LeftSideFIlters() {
  return (
    <div className="LeftSideFilters">
      <Select defaultValue={"Price"} className="Filter">
        <Option value="Name">Name</Option>
        <Option value="Rate/Review">Rate/Review</Option>
        <Option value="Price">Price</Option>
        <Option value="Description">Description</Option>
      </Select>

      <Select className="Filter">
        <Option value="Name">Condition</Option>
      </Select>

      <Select className="Filter">
        <Option value="Name">DeliveryOption</Option>
      </Select>
    </div>
  );
}

export default LeftSideFIlters;
