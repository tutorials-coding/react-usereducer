import React from 'react'

import { TodoTotal } from './TodoTotal'

export function TodoTotalContainer() {
  return (
    <TodoTotal
      totalItemsCount={5}
      totalItemsCompletedCount={5}
      totalItemsUncompletedCount={5}
      itemsCompletedPercent={5}
    />
  )
}
