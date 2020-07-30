import React from "react"
import TodoList from "./components/TodoList"
import TodosSaved from "./components/TodosSaved"
import UserList from "./components/UserList"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007C7C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="UserList"
      >
        {/* <Stack.Screen name="UserList" component={UserList} /> */}
        <Stack.Screen name="Lista de Tareas" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
