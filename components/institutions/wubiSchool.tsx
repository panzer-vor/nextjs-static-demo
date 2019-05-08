import React from 'react';
import { Main } from '@components/style'

export default () => {
  return (
    <Main.content>
      <Main.block>
        <Main.articleBlock>{__('wubiText1')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('wubiTag_1')}</Main.tag>
        <Main.articleBlock>
          <Main.tagInfo>{__('wubiTag_1_info_1')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('wubiTag_1_text_1')}</Main.articleBlock>
        <Main.articleBlock>{__('wubiTag_1_text_2')}</Main.articleBlock>
        <Main.articleBlock>
          <Main.tagInfo>{__('wubiTag_1_info_2')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('wubiTag_1_text_3')}</Main.articleBlock>
        <Main.articleBlock>{__('wubiTag_1_text_4')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('tuiInstitutions')}</Main.tag>
        <Main.articleBlock>{__('wubiTag_2_text_1')}</Main.articleBlock>
        <Main.articleBlock>{__('wubiTag_2_text_2')}</Main.articleBlock>
        <Main.articleBlock>{__('wubiTag_2_text_3')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('wubiTag_3')}</Main.tag>
        <Main.articleBlock>{__('wubiTag_3_text_1')}</Main.articleBlock>
        <Main.articleBlock>{__('wubiTag_3_text_2')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('wubiTag_4')}</Main.tag>
        <Main.articleBlock>{__('wubiTag_4_text')}</Main.articleBlock>
      </Main.block>
    </Main.content>
  )
}