import React from 'react';
import { Main } from '@components/style'

export default () => {
  return (
    <Main.content>
      <Main.block>
        <Main.articleBlock>{__('oncebookstore_1')}</Main.articleBlock>
        <Main.articleBlock>{__('oncebookstore_2')}</Main.articleBlock>
        <Main.articleBlock>{__('oncebookstore_3')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('oncebookstore_tag_2')}</Main.tag>
        <Main.articleBlock>
          <Main.tagInfo>{__('oncebookstore_tag_2_info')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('oncebookstore_tag_2_text')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('oncebookstore_tag_3')}</Main.tag>
        <Main.articleBlock>
          <Main.tagInfo>{__('oncebookstore_tag_3_info')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('oncebookstore_tag_3_text')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('oncebookstore_tag_4')}</Main.tag>
        <Main.articleBlock>{__('oncebookstore_tag_4_text')}</Main.articleBlock>
      </Main.block>
      <Main.block>
        <Main.tag>{__('oncebookstore_tag_5')}</Main.tag>
        <Main.articleBlock>{__('oncebookstore_tag_5_text')}</Main.articleBlock>
        <Main.articleBlock>
          <Main.tagInfo>{__('oncebookstore_tag_5_info_1')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('oncebookstore_tag_5_info_1_text')}</Main.articleBlock>
        <Main.articleBlock>
          <Main.tagInfo>{__('oncebookstore_tag_5_info_2')}</Main.tagInfo>
        </Main.articleBlock>
        <Main.articleBlock>{__('oncebookstore_tag_5_info_2_text')}</Main.articleBlock>
      </Main.block>
    </Main.content>
  )
}