import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

const Title = ({ children }) => {
  return <TitleComponent>{children}</TitleComponent>
}

export default Title

const TitleComponent = styled.h1`
  font-size: 3.4rem;
  color: ${theme.primary};
`
