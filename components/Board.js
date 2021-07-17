import React,{useState} from "react"
import Cell from './Cell'
import { StyleSheet, Text, View } from 'react-native';

const Board = () => {
  const [board, setBoard] = useState([
    '','','',
    '','','',
    '','',''
  ])

  const [currentPlayer, setCurrentPlayer] = useState("X")

  const [gameWinner, setGameWinner] = useState(undefined)

  const evaluateWin = (newBoard) => {
    const winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let cond of winConditions){
      let line = ""
      for(let pos of cond){
        line += newBoard[pos]
      }
      if( line === "XXX" || line === "OOO"){
        return line[0]
      }
    }
    return undefined
  }
  const playPiece = (idx) => {
    if(!gameWinner){
      if(board[idx] === ""){
        let newBoard = [...board]
        newBoard[idx] = currentPlayer
  
        let winner = evaluateWin(newBoard)
  
        if (winner) {
          setGameWinner(winner)
        }
  
        setBoard(newBoard)
        setCurrentPlayer(currentPlayer === "X" ?"O":"X")
      }
    }
  }

  return (
    <>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

      }}>
        {board.map((cell, idx) => {
          return <Cell piece={cell} playPiece={playPiece} index={idx}/>
        })}
      </View>
      {
        gameWinner
          ? <Text style={{fontSize:30}}>Winner is {gameWinner}</Text>
          : <Text></Text>
      }
    </>

  )
}

export default Board