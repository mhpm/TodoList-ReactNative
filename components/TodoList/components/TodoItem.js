import React, { useState } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import Modal from "react-native-modal"
import styled, { css } from "styled-components"

export default function TodoItem({ item, pressHandler }) {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }
  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Item>{item.text}</Item>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <ModalBody>
          <ModalTitle styled={{ margin: 0 + "!important" }}>
            ¿Quieres borrar esta tarea?
          </ModalTitle>
          <ButtonGroup>
            <Button primary onPress={() => pressHandler(item.id)}>
              <ButtonText>SI</ButtonText>
            </Button>
            <Button onPress={toggleModal}>
              <ButtonText>No</ButtonText>
            </Button>
          </ButtonGroup>
        </ModalBody>
      </Modal>
    </View>
  )
}

const Item = styled.Text`
  padding: 15px;
  height: 50px;
  margin-top: 13px;
  background-color: #fff;
  align-self: stretch;
  text-align: center;
  border-radius: 100px;
  font-weight: bold;
  color: #c9c9c9;
  box-shadow: 10px 5px 5px black;
`

const ButtonGroup = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled.TouchableOpacity`
  align-items: center;
  width: 45%;
  height: 50px;
  border-radius: 100px;
  padding: 15px;
  margin-top: 10px;
  background-color: #cccccc;
  ${(props) =>
    props.primary &&
    css`
      background-color: #007c7c;
      color: #666666;
    `}
`

const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
`

const ModalTitle = styled.Text`
  padding: 15px;
  background-color: #fff;
  align-self: stretch;
  text-align: center;
  border-radius: 100px;
  font-weight: bold;
  color: darkgray;
  box-shadow: 10px 5px 5px black;
`

const ModalBody = styled.View`
  padding: 30px;
  border-radius: 15px;
  height: 200px;
  background-color: white;
`
