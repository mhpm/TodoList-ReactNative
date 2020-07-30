import React, { useEffect, useState } from "react"
import UserCard from "./components/UserCard"
import styled from "styled-components"
import axios from "axios"

const UserList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get("https:reqres.in/api/users")
    const users = await response.data

    if (users) {
      setData(users.data)
      setLoading(false)
      console.log("users: ", users.data)
    }
  }

  return !loading ? (
    <Main>
      <Container>
        <List
          keyExtractor={item => item.id.toString()}
          data={data}
          renderItem={({ item }) => <UserCard user={item} />}
        ></List>
      </Container>
    </Main>
  ) : (
    <Loading>Loading...</Loading>
  )
}

export default UserList

const Container = styled.View`
  padding-right: 20px;
  padding-left: 20px;
`

const Main = styled.View`
  flex: 1;
  background-color: #ededed;
`

const List = styled.FlatList`
  margin-top: 20px;
`

const Loading = styled.Text`
  font-weight: bold;
  color: black;
`
