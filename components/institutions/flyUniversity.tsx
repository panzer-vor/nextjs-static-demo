import React from 'react';
import { Main } from '@components/style'

export default () => {
  return (
    <Main.content>
      <Main.block>
        <Main.articleBlock>{__('flyText1')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.articleBlock>
          <Main.tagInfo>{__('flyTag_1_info')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('flyTag_1_text_1')}</Main.articleBlock>
        <Main.articleBlock>{__('flyTag_1_text_2')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('flyTag_2')}</Main.tag>
        <Main.articleBlock>
          <Main.tagInfo>{__('flyTag_2_info_1')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('flyTag_2_text_1')}</Main.articleBlock>
        <Main.articleBlock>
          <Main.tagInfo>{__('flyTag_2_info_2')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('flyTag_2_text_2')}</Main.articleBlock>
      </Main.block>
    </Main.content>
  )
}