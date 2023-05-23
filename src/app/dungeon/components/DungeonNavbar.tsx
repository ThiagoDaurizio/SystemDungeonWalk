'use-client'
import React from 'react'

interface Props {
  handleLevel: (positionX: number, positionY: number, map: number[][]) => void
}

const DungeonNavbar = ({handleLevel}: Props) => {

  const chooseLevel = (level: number) => {
    let map 

    if(level === 1){
      map = [
        [2, 2, 2, 1, 1, 1, 2, 2, 2],
        [1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
      ]

      handleLevel(4, 1, map)
    }

    if(level === 2){
      map = [
        [2, 2, 1, 1, 1, 1, 1, 2, 2],
        [1, 1, 1, 0, 0, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
      ]

      handleLevel(4, 1, map)
    }
  }

  return (
    <ul className='flex fixed text-gray-950 bottom-2 left-[50%] translate-x-[-50%]'>
      <li onClick={() => chooseLevel(1)}>
        Level 1
      </li>
      <li onClick={() => chooseLevel(2)}>
        Level 2
      </li>
    </ul>
  )
}
export default DungeonNavbar
