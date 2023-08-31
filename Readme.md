# react-name-initials-avatar


[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-name-initials-avatar

The react-name-initials-avatar is a lightweight and customizable React component that generates avatars based on user names or initials. This component is ideal for user profile displays, comment sections, or any application where you want to visually represent users with avatars.

![React Name Initals Avatar](https://thepracticaldev.s3.amazonaws.com/i/1j0j5i6pfdw71egakfgl.png)

## Features 
 - Customizable - You can easily customize the appearance of the avatars by adjusting properties like size, background colors, text colors, and more.
 - Easy Integration - Integrating the React Name Initials Avatar into your project is simple. Just import the component and pass the necessary props.

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
| `bgColor` (optional)        | `white`    | string          |
| `textColor` (optional)     | `black`    | string          |
| `size` (optional)           | `40px`     | string          |
| `borderRadius` (optional)    | `50%`      | string          |
| `textWeight` (optional)     | `bold`     | string | number |
| `textSize` (optional)       | `16px`     | string          |
| `borderColor` (optional)   | `black`    | string          |
| `borderStyle` (optional)    | `solid`    | string          |
| `borderWidth` (optional)    | `2px`      | string          | 


## Props Description

1. **name** - name of user   
2. **bgColor** - set background color 
3. **textColor** - set text color 
4. **size** - set container size 
5. **borderRadius** - set border radius of container
6. **textWeight** - set font weight of text. Accepted values - normal, bold, bolder, lighter, number, initial, inherit, 100 to 900 
7. **textSize** - set font size of text
8. **borderColor** - set border color of container
9. **borderStyle** - set border style of container. Accepted values - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, initial, inherit
10. **borderWidth** - set border width of container

