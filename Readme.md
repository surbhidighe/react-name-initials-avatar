# react-name-initials-avatar

Npm Package Url - https://www.npmjs.com/package/react-name-initials-avatar

The react-name-initials-avatar is a lightweight and customizable React component that generates avatars based on user names or initials. This component is ideal for user profile displays, comment sections, or any application where you want to visually represent users with avatars.

![React Name Initals Avatar](https://thepracticaldev.s3.amazonaws.com/i/1j0j5i6pfdw71egakfgl.png)

## Features
 - Customizable - You can easily customize the appearance of the avatars by adjusting properties like size, background colors, text colors, and more.
 - Easy Integration - Integrating the React Name Initials Avatar into your project is simple. Just import the component and pass the necessary props.
 - Auto Color - Automatically generate consistent colors based on user names.
 - Flexible Initials - Control how many initials to display (1, 2, or 3).
 - Shape Options - Easily switch between circle and square shapes.

## Installation

```
yarn add react-name-initials-avatar
```
OR
```
npm install react-name-initials-avatar
```

## Usage

To use the component, import it into your React application:

```jsx
import {NameInitialsAvatar} from 'react-name-initials-avatar';

function UserProfile(props) {
  const { username } = props;

  return (
    <div className="user-profile">
      <NameInitialsAvatar
        name={username}
      />
      <h2>{username}</h2>
    </div>
  );
}

export default UserProfile;

```

In the above example, the NameInitialsAvatar component generates an avatar based on the user's name initials. You can customize the avatar's size, background color, border radius, font weight and text color according to your design.

## Props


| Key               | Default    | Type            |
| ----------------- | -----------| ----------------|
| `name` (required) | `undefined`| string          |
| `bgColor`        | `white`    | string          |
| `textColor`     | `black`    | string          |
| `size`           | `40px`     | string \| number          |
| `borderRadius`    | `50%`      | string          |
| `textWeight`     | `bold`     | string \| number |
| `textSize`       | `16px`     | string \| number          |
| `borderColor`   | `black`    | string          |
| `borderStyle`    | `solid`    | string          |
| `borderWidth`    | `2px`      | string \| number          |
| `shape`    | `undefined`      | "circle" \| "square"          |
| `autoColor`    | `false`      | boolean          |
| `initialsLength`    | `undefined`      | 1 \| 2 \| 3          |


## Props Description

1. **name** - name of user
2. **bgColor** - set background color
3. **textColor** - set text color
4. **size** - set container size. Accepts `"40px"`, `"40"`, or `40` (auto-converts to px)
5. **borderRadius** - set border radius of container
6. **textWeight** - set font weight of text. Accepted values - normal, bold, bolder, lighter, number, initial, inherit, 100 to 900
7. **textSize** - set font size of text. Accepts `"16px"`, `"16"`, or `16` (auto-converts to px)
8. **borderColor** - set border color of container
9. **borderStyle** - set border style of container. Accepted values - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, initial, inherit
10. **borderWidth** - set border width of container. Accepts `"2px"`, `"2"`, or `2` (auto-converts to px)
11. **shape** - set avatar shape. Accepted values - "circle", "square". Note: `borderRadius` takes precedence over `shape` if both are provided
12. **autoColor** - when `true`, automatically generates a consistent background color based on the name. Note: `bgColor` takes precedence over `autoColor` if both are provided
13. **initialsLength** - control how many initials to display (1, 2, or 3). For "John Michael Doe": `1` shows "J", `2` shows "JD", `3` shows "JMD"

## Examples

### Basic Usage
```jsx
<NameInitialsAvatar name="John Doe" />
```

### Auto Color
Each name generates a unique, consistent color:
```jsx
<NameInitialsAvatar name="John Doe" autoColor textColor="white" />
<NameInitialsAvatar name="Jane Smith" autoColor textColor="white" />
```

### Shape
```jsx
<NameInitialsAvatar name="Circle" shape="circle" />
<NameInitialsAvatar name="Square" shape="square" />
```

### Initials Length
```jsx
<NameInitialsAvatar name="John Michael Doe" initialsLength={1} /> {/* J */}
<NameInitialsAvatar name="John Michael Doe" initialsLength={2} /> {/* JD */}
<NameInitialsAvatar name="John Michael Doe" initialsLength={3} /> {/* JMD */}
```

### Custom Styling
```jsx
<NameInitialsAvatar
  name="John Doe"
  bgColor="#3498db"
  textColor="white"
  size={60}
  borderRadius="12px"
  borderColor="#2980b9"
  borderWidth={3}
/>
```

## Precedence Rules

- **Background Color**: `bgColor` > `autoColor` > default (`"white"`)
- **Border Radius**: `borderRadius` > `shape` > default (`"50%"`)

