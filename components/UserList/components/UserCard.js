import React from "react"
import styled from "styled-components"

export default function UserCard({ user }) {
  console.log(user)

  return (
    <Card>
      <Img source={{ uri: user.avatar }} style={{ width: 70, height: 70 }} />
      <Item>
        {user.first_name} {user.last_name}
      </Item>
    </Card>
  )
}

const Card = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 7px;
  padding: 10px;
`
const Item = styled.Text`
  color: #cecece;
  font-size: 18px;
  font-weight: bold;
`
const Img = styled.Image`
  border-radius: 100px;
  margin-right: 19px;
`
