import React,{ useState } from 'react'
import { useTransition, animated } from "react-spring";

function Toggle() {
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: toggle,
      delay: 5000,
    //   config: config.molasses,
      onRest: () => set(!toggle),
    })
    return transitions(({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            color: 'red',
            position: 'absolute',
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          }}>
          ALERT! CUTE DOG IMAGES AHEAD.
        </animated.div>
      ) : (
        <animated.div
          style={{
            position: 'absolute',
            opacity: opacity.to({ range: [1.0, 0.0], output: [0, 1] }),
          }}>
          
        </animated.div>
      )
    )
  }
  export default Toggle 