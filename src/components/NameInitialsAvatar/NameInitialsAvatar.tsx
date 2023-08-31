import React from "react";

export interface NameInitialsAvatarProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  textWeight?: string | number;
  textSize?: string;
  size?: string;
  borderRadius?: string;
  borderColor?: string;
  borderStyle?:string;
  borderWidth?:string;
}

const NameInitialsAvatar = (props: NameInitialsAvatarProps) => {
  const splitName = props.name.split(" ");

  const firstNameInitial = splitName[0] ? splitName[0][0] : "";
  const lastNameInitial =
    splitName.length > 1 ? splitName[splitName.length - 1][0] : "";

  return (
    <span
      className="letter-avatar"
      style={{
        background: props.bgColor ? props.bgColor : "white",
        color: props.textColor ? props.textColor : "black",
        width: props.size ? props.size : "40px",
        height: props.size ? props.size : "40px",
        borderRadius: props.borderRadius ? props.borderRadius : "50%",
        fontWeight: props.textWeight ? props.textWeight : "bold",
        fontSize: props.textSize ? props.textSize : "16px",
        borderColor: props.borderColor ? props.borderColor : "black",
        borderStyle: props.borderStyle ? props.borderStyle : "solid",
        borderWidth: props.borderWidth ? props.borderWidth : "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {firstNameInitial}
      {lastNameInitial}
    </span>
  );
};

export default NameInitialsAvatar;
