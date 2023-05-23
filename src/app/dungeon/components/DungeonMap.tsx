'use client'
import {useState, useEffect} from 'react'

interface Props {
  playerX: number
  playerY: number
  map: number[][]
}

type playerPositionTyped = {
  currentX: number
  currentY: number
}

const DungeonMap = ({ 
  playerX, 
  playerY, 
  map
}: Props) => {
  const [playerPosition, set_playerPosition] = useState<playerPositionTyped>({ currentX: playerX, currentY: playerY })



  const movePlayer = (direction: string) => {
    const { currentX, currentY } = playerPosition
    let newX = currentX
    let newY = currentY

    if(direction === 'up'){
      newY = currentY - 1
    } else if(direction === 'down'){
      newY = currentY + 1
    } else if(direction === 'left'){
      newX = currentX - 1
    } else if(direction === 'right'){
      newX = currentX + 1
    }

    if(direction === 'up' || direction ===  'down'){
      if(newY >= 0 && newY < map.length && map[newY][newX] !== 1){
        set_playerPosition({ currentX: newX, currentY: newY })
      }
    } else if (direction === 'right' || direction === 'left'){
      if(newX >= 0 && newX < map[newY].length && map[newY][newX] !== 1){
        set_playerPosition({ currentX: newX, currentY: newY })
      }
    }

    console.log('X: ', newX, ' | ', 'Y: ', newY)
  }

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if(event.key === 'ArrowUp'){
        movePlayer('up')
      } else if (event.key === 'ArrowDown'){
        movePlayer('down')
      } else if (event.key === 'ArrowRight'){
        movePlayer('right')
      } else if (event.key === 'ArrowLeft'){
        movePlayer('left')
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [movePlayer])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-9 gap-2'>
        {map.map((row, rowIndex) => 
          row.map((column, columnIndex) => 
            (
              <div
                key={`${rowIndex}-${columnIndex}`}
                className={`h-10 w-10
                  ${
                    playerPosition.currentX === columnIndex && playerPosition.currentY === rowIndex
                    ? 'bg-blue-500 rounded-lg'
                    : column === 1
                    ? 'bg-gray-500'
                    : 'bg-white'
                  }
                `}
              >
              </div>
            )
          )
        )}
      </div>
    </div>
  )
}

export default DungeonMap
