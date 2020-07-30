import React, { useState } from "react"
import { View, Alert } from "react-native"
import styled, { css } from "styled-components"
import { useNavigation } from "@react-navigation/native"

export default function AddTodo({ submitHandler }) {
  const navigation = useNavigation()
  const [text, setText] = useState("")

  const addHandler = () => {
    if (text.length > 3) {
      submitHandler(text)
      setText("")
    } else
      Alert.alert("Oops!", "La tarea almenos deberia llevar 4 letras", [
        {
          text: "Ok",
          onPress: () => console.log("alert closed"),
        },
      ])
  }

  return (
    <View>
      <Input
        placeholder="Nueva tarea"
        onChangeText={(value) => setText(value)}
        value={text}
      ></Input>
      <Button disabled={text === ""} onPress={addHandler}>
        <ButtonText>Agregar</ButtonText>
      </Button>
    </View>
  )
}

const Input = styled.TextInput`
  margin-top: 20px;
  background-color: #f5f5f5;
  color: #164449;
  width: 100%;
  padding: 15px;
  border-radius: 100px;
`

const Button = styled.TouchableOpacity`
  border-radius: 100px;
  padding: 15px;
  margin-top: 10px;
  background-color: #ffae2c;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #cccccc;
      color: #666666;
    `}
`

const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
`
