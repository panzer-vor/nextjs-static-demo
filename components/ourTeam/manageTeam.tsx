import { Waterfall } from '@components/module'
import { Main } from '@components/style'

const list = [
  {
    headerUri: '',
    name: __('teamPart1name'),
    position: __('teamPart1pos'),
    introduce: __('teamPart1intro'),
  },
  {
    headerUri: '',
    name: __('teamPart2name'),
    position: __('teamPart2pos'),
    introduce: __('teamPart2intro'),
  },
  {
    headerUri: '',
    name: __('teamPart1name'),
    position: __('teamPart1pos'),
    introduce: __('teamPart1intro'),
  },
  {
    headerUri: '',
    name: __('teamPart4name'),
    position: __('teamPart4pos'),
    introduce: __('teamPart4intro'),
  },
]

export default () => {
  const listElements = list.map((v, i) => (
    <Main.teamCard key={i} className='swiper-item'>
      <Main.teamCardHeader>
        <img src={v.headerUri} />
        <div>
          <h1>{v.name}</h1>
          <p>{v.position}</p>
        </div>
      </Main.teamCardHeader>
      <Main.teamCardContent>{v.introduce}</Main.teamCardContent>
    </Main.teamCard>
  ))
  return (
    <>
      <Main.teamCardWrapper>
        <Waterfall
          lineNumber={3}
          listElements={listElements}
          marginTop={30}
        />
      </Main.teamCardWrapper>
      <Main.teamCardWrapperMobile>
        {
          listElements.map(v => v)
        }
      </Main.teamCardWrapperMobile>
    </>
  )
}