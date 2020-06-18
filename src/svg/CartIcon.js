import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CartIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill="#8E99AF"
        d="M12 4.562L8.302 9h7.396L12 4.562zM6.232 8.36A.996.996 0 006 9H3.28a1 1 0 00-.97 1.242l2.122 8.486A3 3 0 007.342 21h9.316a3 3 0 002.91-2.272l2.121-8.486A1 1 0 0020.72 9H18a.996.996 0 00-.232-.64l-5-6a1 1 0 00-1.536 0l-5 6zM12 12a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm-5.742 1.361a1 1 0 111.931-.518l1.036 3.864a1 1 0 11-1.932.518L6.258 13.36zm10.777-1.225a1 1 0 00-1.225.707l-1.035 3.864a1 1 0 001.932.518l1.035-3.864a1 1 0 00-.707-1.225z"
      />
    </Svg>
  )
}

export default CartIcon
