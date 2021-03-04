import React from 'react'
import { useDroppable } from '@dnd-kit/core'

const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  })
  const style = {
    background: isOver ? 'green' : 'white',
    height: 600,
    width: 600
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
export default Droppable