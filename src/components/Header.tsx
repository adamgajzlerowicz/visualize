import React from 'react'
import { t } from '../translations'
import styled from 'styled-components'
import { COLORS } from '../constants/styles'

const Wrapper = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
  padding: 16px;
`

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 16px;
`

const SubTitle = styled.div`
  font-size: 18px;
`

const Tiny = styled.div`
  margin: 20px auto;
  font-size: 12px;
`

const Info = styled.div`
  font-size: 18px;
`

export default function Header() {
  return (
    <div>
      <Title>{t('header.title')}</Title>
      <Wrapper>
        <SubTitle>{t('header.subHeadingOne')}</SubTitle>
        <SubTitle>{t('header.subHeadingTwo')}</SubTitle>
        <Tiny>{t('header.tinyPrint')}</Tiny>
        <Info>{t('header.info')}</Info>
      </Wrapper>
    </div>
  )
}
