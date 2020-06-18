import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Notification(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill="#8E99AF"
        d="M7.558 6.976a4.47 4.47 0 018.884 0L17 12h1.5a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3H7l.558-5.024zM12 16a2 2 0 100 4 2 2 0 000-4z"
      />
    </Svg>
  )
}

export default Notification
