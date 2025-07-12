import React from 'react'
import ToCard from './ToCard'

export default function TodoList(props) {
   const {todos} = props
  return (
    <ul className='main'>
      {/* hy */}
        {todos.map((todo, todoIndex)=> {
            return (
                <ToCard{...props} key={todoIndex} index=
                {todoIndex}> 
                <p>{todo}</p>
                </ToCard>
            )
        })}
    </ul>
  )
}
