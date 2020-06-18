import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill="#8E99AF"
        d="M4 6.5A1.5 1.5 0 015.5 5h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 014 6.5zm0 10A1.5 1.5 0 015.5 15h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 014 16.5zM5.5 10a1.5 1.5 0 000 3h7a1.5 1.5 0 000-3h-7z"
      />
    </Svg>
  )
}

export default MenuIcon
