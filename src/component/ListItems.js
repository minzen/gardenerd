import React from 'react'
import { DndContext } from '@dnd-kit/core'
import Draggable from './Draggable'
import Droppable from './Droppable'
import GardenItem from './GardenItem'

const ListItems = (props) => {
  return (
    <DndContext>
      {props.gardenItems.map((item, index) => {
        return (
          <Draggable id={item.plantName} setNodeRef={item}>
            <GardenItem
              key={item.uid}
              name={item.plantName}
              description={item.plantDescription}
              plantingDate={item.plantingDate}
              notes={item.notes}
              uid={item.uid}
              x={item.locationX}
              y={item.locationY}
              setGardenItems={props.setGardenItems}
            />
          </Draggable>
        )
      })}
      <Droppable id="droparea">Droppable</Droppable>
    </DndContext>
  )
}
export default ListItems
