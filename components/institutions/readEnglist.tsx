import React from 'react';
import { Main } from '@components/style'
import styled from 'styled-components'

const LineArticle = styled.span`
  font-size: 14px;
`

export default () => {
  return (
    <Main.content>
      <Main.block>
        <Main.articleBlock>{__('readEnglishText1')}</Main.articleBlock>
        <LineArticle>
          {__('readEnglishText2')}
          {__('oncebookstore_tag_1')}、
          {__('assessmentsystem')}、
          {__('reserveProcess')}、
          {__('backSystem')}
          {__('readEnglishText3')}
        </LineArticle>
      </Main.block>
      <Main.block>
        <Main.tag>{__('readEnglishTag1')}</Main.tag>
        <Main.articleBlock>{__('readEnglishTag1_text')}</Main.articleBlock>
      </Main.block>
    </Main.content>
  )
}