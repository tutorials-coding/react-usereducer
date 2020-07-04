import React from 'react'

import { Home } from './screens'
import { Counter } from './screens'

const initialCount = 0

export default function App() {
  return (
    <div>
      {/* <Home /> */}
      <Counter initialCount={initialCount} />
    </div>
  )
}
