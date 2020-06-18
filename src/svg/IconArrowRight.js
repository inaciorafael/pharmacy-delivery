import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconArrowRight(props) {
  return (
    <Svg width={6} height={7} fill="none" viewBox="0 0 6 7" {...props}>
      <Path
        fill="#34C47C"
        d="M4.856 3.846l-3.017 3.01a.491.491 0 01-.695-.693L3.813 3.5 1.143.837a.491.491 0 01.695-.693l3.017 3.01a.489.489 0 010 .693l.001-.001z"
      />
    </Svg>
  )
}

export default IconArrowRight
