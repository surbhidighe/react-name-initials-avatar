import React from "react";

export interface NameInitialsAvatarProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  textWeight?: string | number;
  textSize?: string | number;
  size?: string | number;
  borderRadius?: string;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string | number;
  // New optional props
  shape?: "circle" | "square";
  autoColor?: boolean;
  initialsLength?: 1 | 2 | 3;
}

/**
 * Converts a string or number to a px string
 * - Number → "Npx"
 * - String without unit → "Npx"
 * - String with unit → as-is
 */
const toPx = (value: string | number | undefined, defaultValue: string): string => {
  if (value === undefined || value === null) return defaultValue;
  if (typeof value === "number") return `${value}px`;
  // Check if string is purely numeric
  if (/^\d+(\.\d+)?$/.test(value)) return `${value}px`;
  return value;
};

/**
 * Generates a consistent HSL color based on the name string
 * Same name always produces the same color
 */
const generateColorFromName = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 65%, 55%)`;
};

/**
 * Extracts initials from name based on initialsLength
 * - If initialsLength provided: respect it
 * - If not provided: use original logic (first + last initial)
 */
const getInitials = (
  name: string,
  initialsLength?: 1 | 2 | 3
): string => {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return "";

  // If initialsLength is provided, use that logic
  if (initialsLength !== undefined) {
    if (initialsLength === 1) {
      return words[0][0].toUpperCase();
    }
    if (initialsLength === 2) {
      if (words.length === 1) {
        return words[0][0].toUpperCase();
      }
      // First and last
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    if (initialsLength === 3) {
      if (words.length === 1) {
        return words[0][0].toUpperCase();
      }
      if (words.length === 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
      }
      // First, middle, last (for 3+ words)
      return (words[0][0] + words[1][0] + words[words.length - 1][0]).toUpperCase();
    }
  }

  // Original logic (no initialsLength provided) - maintains backward compatibility
  const firstNameInitial = words[0] ? words[0][0] : "";
  const lastNameInitial = words.length > 1 ? words[words.length - 1][0] : "";

  return firstNameInitial + lastNameInitial;
};

const NameInitialsAvatar = (props: NameInitialsAvatarProps) => {
  // Get initials using the new logic
  const initials = getInitials(props.name, props.initialsLength);

  // Background color precedence: bgColor > autoColor > default "white"
  const getBackgroundColor = (): string => {
    if (props.bgColor) return props.bgColor;
    if (props.autoColor) return generateColorFromName(props.name);
    return "white";
  };

  // Border radius precedence: borderRadius > shape > default "50%"
  const getBorderRadius = (): string => {
    if (props.borderRadius) return props.borderRadius;
    if (props.shape === "square") return "0px";
    if (props.shape === "circle") return "50%";
    return "50%"; // default
  };

  return (
    <span
      className="letter-avatar"
      style={{
        background: getBackgroundColor(),
        color: props.textColor ? props.textColor : "black",
        width: toPx(props.size, "40px"),
        height: toPx(props.size, "40px"),
        borderRadius: getBorderRadius(),
        fontWeight: props.textWeight ? props.textWeight : "bold",
        fontSize: toPx(props.textSize, "16px"),
        borderColor: props.borderColor ? props.borderColor : "black",
        borderStyle: props.borderStyle ? props.borderStyle : "solid",
        borderWidth: toPx(props.borderWidth, "2px"),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {initials}
    </span>
  );
};

export default NameInitialsAvatar;
