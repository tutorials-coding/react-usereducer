import React from 'react'
import Button from 'react-bootstrap/Button'

import './Counter.css'

export function Counter() {
  return (
    <div className="counter__main-container">
      <span className="counter__counter-value">0</span>
      <div className="d-flex flex-column counter__buttons-container">
        <Button variant="primary">Increment</Button>
        <Button variant="primary">Decrement</Button>
        <Button variant="primary">Reset</Button>
      </div>
    </div>
  )
}
