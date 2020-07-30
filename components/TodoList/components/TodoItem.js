import React, { useState } from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import styled from "styled-components"
import { MaterialIcons } from "@expo/vector-icons"
import Modal from "./Modal"

export default function TodoItem({ item, pressHandler }) {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <View>
      <Item>
        <TextItem>{item.text}asdasd</TextItem>
        <TouchableOpacity onPress={toggleModal}>
          <MaterialIcons
            name="delete"
            color="#cecece"
            size={20}
          ></MaterialIcons>
        </TouchableOpacity>
      </Item>
      <Modal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        handlePress={() => pressHandler(item.id)}
      />
    </View>
  )
}

const Item = styled.View`
  flex: 1;
  padding: 15px;
  height: 50px;
  background-color: #fff;
  border-radius: 100px;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 10px 5px 5px black;
  margin-bottom: 10px;
`

const TextItem = styled.Text`
  align-self: stretch;
  text-align: center;
  font-weight: bold;
  color: #c9c9c9;
`
