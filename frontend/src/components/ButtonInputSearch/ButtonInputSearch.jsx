import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;

  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColorInput,
          border: "none",
          borderRadius: "5px 0px 0px 5px",
        }}
        {...props}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          background: backgroundColorButton,
          border: "none",
          borderRadius: "0px 5px 5px 0px",
        }}
        icon={<SearchOutlined color={colorButton} style={{ color: "#fff" }} />}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
        disabled={false}
      />
    </div>
  );
};

export default ButtonInputSearch;
