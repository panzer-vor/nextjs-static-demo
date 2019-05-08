import { Main } from '@components/style'
import { Map, Marker } from 'react-amap'


export default () => (
  <>
    <Main.mapInfo>
      <h1>{__('ouatJFC')}</h1>
      <p>{__('ouatJFCAddress')}</p>
    </Main.mapInfo>
    <Main.map>
      <Map amapkey='729522d2ea377922bf575c23dd83d86b' center={[100, 100]} zoom={15}>
        <Marker position={[100, 100]} />
      </Map>
    </Main.map>
  </>
)