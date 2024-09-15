import React, { MouseEventHandler } from 'react'

type Props = {
  click: MouseEventHandler<HTMLButtonElement>}

const TestOfTest = ({click}: Props) => {
  return (
    <div>button
      <button onClick={click}>oi</button>
    </div>
  )
}

export default TestOfTest