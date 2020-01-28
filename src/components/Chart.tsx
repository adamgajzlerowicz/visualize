import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/styles'

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  return <Container>hello</Container>
}
