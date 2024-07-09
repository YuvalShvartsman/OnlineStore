import { Button, Dropdown, Flex, Select, Space } from "antd";
import "./LeftSideFilters.css";
import { useContext, useState } from "react";
import EcommerceItemsContext from "../../../../context/EcommerceItemsContext";
import { ItemType } from "antd/es/menu/interface";

const { Option } = Select;

const selectKeys: ItemType[] = [
  { key: "The cheapest", label: "The cheapest" },
  { key: "The most expensive", label: "The most expensive" },
  { key: "Top rated", label: "Top Rated" },
];

function LeftSideFIlters() {
  const { sortData } = useContext(EcommerceItemsContext);
  const [chosenValue, setChosenValue] = useState<string>("Sort by");

  return (
    <div className="LeftSideFilters">
      <Dropdown
        className="Filter"
        menu={{
          items: selectKeys,
          onClick: (e) => {
            sortData(e.key);
            setChosenValue(e.key);
          },
        }}
        trigger={["click"]}
      >
        <Button>
          <Space>
            <Flex align="center">{chosenValue}</Flex>
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default LeftSideFIlters;
