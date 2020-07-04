import React from 'react'

import { TodoItem } from './TodoItem'

export function TodoItemContainer({ item }) {
  const todoItemsState = []

  const editTodoItemText = (value) => {}

  const toggleItemCheck = () => {}

  const deleteItem = () => {}

  return (
    <TodoItem
      text={item.text}
      isComplete={item.isComplete}
      onToggleCheck={toggleItemCheck}
      onDeleteClick={deleteItem}
      onTextUpdate={editTodoItemText}
    />
  )
}

function getItemsWithUpdateItem(items, item) {
  return items.map((_item) => {
    if (_item.id === item.id) {
      return item
    }
    return _item
  })
}
