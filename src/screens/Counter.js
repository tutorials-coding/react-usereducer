import React from 'react'
import Button from 'react-bootstrap/Button'

import './Counter.css'

export function Counter() {
  function increment() {}

  function decrement() {}

  function reset() {}

  return (
    <div className="counter__main-container">
      <span className="counter__counter-value">0</span>
      <div className="d-flex flex-column counter__buttons-container">
        <Button variant="primary" onClick={increment}>
          Increment
        </Button>
        <Button variant="primary" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="primary" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  )
}
