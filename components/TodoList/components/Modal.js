import React, { useState } from "react"
import Modal from "react-native-modal"
import styled, { css } from "styled-components"

export default function TodoItem({ isVisible, toggleModal, handlePress }) {
  return (
    <Modal isVisible={isVisible}>
      <ModalBody>
        <ModalTitle styled={{ margin: 0 + "!important" }}>
          ¿Quieres borrar esta tarea?
        </ModalTitle>
        <ButtonGroup>
          <Button primary onPress={handlePress}>
            <ButtonText>SI</ButtonText>
          </Button>
          <Button onPress={toggleModal}>
            <ButtonText>No</ButtonText>
          </Button>
        </ButtonGroup>
      </ModalBody>
    </Modal>
  )
}

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
