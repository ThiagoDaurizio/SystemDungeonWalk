'use client'
import React, { useState } from 'react'
import DungeonMap from './components/DungeonMap'
import DungeonNavbar from './components/DungeonNavbar'
import { DungeonTyped } from './types'



const Dungeon = () => {
  const [currentDungeon, set_currentDungeon] = useState<DungeonTyped>({ 
    playerX: 4, 
    playerY: 1, 
    map: [
      [2, 2, 2, 1, 1, 1, 2, 2, 2],
      [1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1]
    ]
  })

  const handleLevel = (positionX: number, positionY: number, map: number[][]) => {
    console.log(map)
    set_currentDungeon({
      playerX: positionX,
      playerY: positionY,
      map: map
    })
  }

  return (
    <div>
      <DungeonMap 
        playerX={currentDungeon.playerX}
        playerY={currentDungeon.playerY}
        map={currentDungeon.map}
      />
      <DungeonNavbar 
        handleLevel={handleLevel}
      />
    </div>
  )
}

export default Dungeon
