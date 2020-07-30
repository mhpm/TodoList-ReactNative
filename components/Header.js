import React from "react"
import styled from "styled-components"

export default function Header({ title }) {
  return (
    <HeaderBar>
      <Title>{title}</Title>
    </HeaderBar>
  )
}

const HeaderBar = styled.View`
  height: 80px;
  width: 100%;
  padding-top: 0px;
  background-color: rgb(255, 51, 102);
`

const Title = styled.Text`
  color: white;
  padding: 20px;
  padding-top: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`
