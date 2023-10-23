import styled from 'styled-components'
import Buttons from './Buttons'

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        Historians
      </Title>
      <CategoriesContainer>
        <Category>
          Home
        </Category>
        <Category>
          Articles
        </Category>
        <Category>
          About
        </Category>
      </CategoriesContainer>
      <Buttons />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  padding: 0px 10px;
  background-color: lightgrey;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`

const CategoriesContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Category = styled.div`
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
`