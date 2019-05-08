import { Waterfall } from '@components/module'
import { Main } from '@components/style'

const list = [
  {
    headerUri: '',
    name: __('teamPart11name'),
    position: __('teamPart11pos'),
    introduce: __('teamPart11intro'),
  },
  {
    headerUri: '',
    name: __('teamPart10name'),
    position: __('teamPart10pos'),
    introduce: __('teamPart10intro'),
  },
  {
    headerUri: '',
    name: __('teamPart9name'),
    position: __('teamPart9pos'),
    introduce: __('teamPart9intro'),
  }
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