import { Main } from '@components/style'
import { useState } from 'react'

const list = [
  {
    messageImg: '',
    title: __('messageContentTitle'),
    date: __('messageDate'),
    content: __('messageContent'),
    more: __('messageMoreText'),
  },
]

export default () => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const handleClick = (index: number) => {
    if (index === currentIndex) {
      setCurrentIndex(-1)
      return
    }
    setCurrentIndex(index)
  }
  return (
    <Main.content>
      {
        list.map((item, index) => (
          <Main.messageTable key={index}>
            <Main.messageImg>
              <Main.img src={item.messageImg}/>
            </Main.messageImg>
            <Main.tableContent>
              <Main.tableTitle>{item.title}</Main.tableTitle>
              <Main.tableDate>
                <Main.dateContent>{item.date}</Main.dateContent>
              </Main.tableDate>
              <Main.messageTableContent>{item.content}</Main.messageTableContent>
              <Main.tableFoot>
                <Main.tableTag>
                  <Main.tagContent>{__('messageTableTag')}</Main.tagContent>
                </Main.tableTag>
                <Main.tagButton onClick={handleClick.bind(this, index)}>{__('messageTableButton')}</Main.tagButton>
              </Main.tableFoot>
              <Main.messageMore showMore={currentIndex===index ? true : false}>
                <Main.moreText>
                  {item.more}
                </Main.moreText>
              </Main.messageMore>
            </Main.tableContent>
          </Main.messageTable>
        ))
      }
    </Main.content>
  )
}