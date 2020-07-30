import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo"
import {
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
  FlatList,
} from "react-native"

export default function TodoList() {
  const [todos, setTodos] = useState([])

  // create a function that saves your data asyncronously
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(todos))
    } catch (error) {
      console.log("Error saving data: ", error)
    }
  }

  // fetch the data back asyncronously
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("todos")
      if (value !== null) {
        const data = await JSON.parse(value)
        setTodos(data)
      }
    } catch (error) {
      console.log("Error retrieving data: ", error)
    }
  }

  useEffect(() => {
    retrieveData()
  }, [])

  useEffect(() => {
    storeData()
  }, [todos])

  const pressHandler = (id) => {
    console.log("pressHandler: ", id)
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id)
    })
  }

  const submitHandler = async (text) => {
    setTodos((prevTodos) => {
      return [
        {
          text: text,
          id: Math.random().toString(),
        },
        ...prevTodos,
      ]
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Main>
        <Container>
          <AddTodo submitHandler={submitHandler} />
          <Line />
          <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          ></FlatList>
        </Container>
      </Main>
    </TouchableWithoutFeedback>
  )
}

const Container = styled.View`
  flex: 1;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
`

const Main = styled.View`
  flex: 1;
  background-color: #ededed;
`

const Line = styled.View`
  width: 100%;
  border-bottom-color: #f5f5f5;
  border-bottom-width: 1px;
  margin-top: 20px;
  margin-bottom: 10px;
`
