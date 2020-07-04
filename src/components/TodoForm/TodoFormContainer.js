import React from 'react'

import { TodoForm } from './TodoForm'

export function TodoFormContainer() {
  function handleSubmit(text) {}

  return <TodoForm onSubmit={handleSubmit} />
}
