import React from 'react'
import { v4 as uuid } from 'uuid'

import { TodoForm } from './TodoForm'

export function TodoFormContainer() {
  function handleSubmit(text) {}

  return <TodoForm onSubmit={handleSubmit} />
}
