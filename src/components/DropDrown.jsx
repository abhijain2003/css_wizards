import React from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";

const data = {
  label: "Display",
  children: [
    {
      label: "Display Flex",
      value: "display: flex",
      children: [
        {
          label: "Flex direction",
          value: "flex",

          children: [
            {
              label: "Direction Column",
              value: "flex-direction: column",
            },
            {
              label: "Direction Row",
              value: "flex-direction: row",
            },
          ],
        },
        {
          label: "Flex Wrap",
          value: "",

          children: [
            {
              label: "Wrap",
              value: "flex-wrap: wrap",
            },
            {
              label: "No Wrap",
              value: "flex-wrap: nowrap",
            },
            {
              label: "Wrap Reverse",
              value: "flex-wrap: wrap-reverse",
            },
          ],
        },
        {
          label: "Justify Contents",
          value: "",

          children: [
            {
              label: "Flex Start",
              value: " justify-content: flex-start ",
            },
            {
              label: "Flex End",
              value: "justify-content:flex-end",
            },
            {
              label: "Centre",
              value: "justify-content:center ",
            },
            {
              label: "Space Between",
              value: "justify-content: space-between  ",
            },
            {
              label: "No Wrap",
              value: "justify-content: space-around",
            },
            {
              label: "Space Evenly",
              value: "justify-content: space-evenly",
            },
          ],
        },
      ],
    },
    {
      label: "Display grid",
      value: "grid",
      children: [
        {
          label: "Flex direction",
          value: "direction",

          children: [
            {
              label: "Direction Column",
              value: "column",
            },
          ],
        },
        {
          label: "Flex Wrap",
          value: "felx-wrap",

          children: [
            {
              label: "Wrap",
              value: "wrap",
            },
            {
              label: "No Wrap",
              value: "no wrap",
            },
            {
              label: "Wrap Reverse",
              value: "wrap-reverse",
            },
          ],
        },
        {
          label: "Justify Contents",
          value: "  justify-content",

          children: [
            {
              label: "Flex Start",
              value: "flex-start ",
            },
          ],
        },
      ],
    },
  ],
};
const style = {};

const onChange = (currentNode, selectedNodes) => {
  style.style =  selectedNodes.map(e=>e.value)
  console.log("onChange::", currentNode, "sel", selectedNodes);
  console.log(style);
};
const onAction = (node, action) => {
  console.log("onAction::", action, node);
};
const onNodeToggle = (currentNode) => {
  console.log("onNodeToggle::", currentNode);
};
const DropDrown = () => {
  return (
    <div>
      <DropdownTreeSelect
        data={data}
        onChange={onChange}
        // onAction={onAction}
        onNodeToggle={onNodeToggle}
      />
    </div>
  );
};
export default DropDrown;
