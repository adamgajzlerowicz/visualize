import styled from 'styled-components'

const UnstyledButton = styled.button`
  border-radius: 0;
  border: none;
  outline: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export default UnstyledButton
