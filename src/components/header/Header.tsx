import styled from 'styled-components'

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
          Home
        </Category>
        <Category>
          Home
        </Category>
        <Category>
          Home
        </Category>
      </CategoriesContainer>
      <Buttons>

      </Buttons>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: lightgrey;
  border-bottom: 1px solid black;
  display: flex;
`

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-left: 10px;
  color: white;
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
`