import React from "react"
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

const Cell = (props) => {
  const {piece, playPiece, index} = props
  return (<Button bordered dark style={styles.cell} onPress={()=> {playPiece(index)}} >
    <Text style={styles.text}>{piece}</Text>
  </Button>)
}

const styles = StyleSheet.create({
  cell: {
    backgroundColor:"transparent",
    width:"33.3%",
    aspectRatio:1,

  },

  text:{
    color:"black",
    fontSize: 50
  }

});
export default Cell