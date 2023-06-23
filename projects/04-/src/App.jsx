import { Img } from './Img'
import prueba from './assets/prueba.jpg'
import segundaImg from './assets/2.jpg'
import { Frame } from './Frame'

export function App () {
  return (
    <Frame>
      <Img img={prueba} wSize={200} />
      <Img img={segundaImg} wSize={200} />
      HOLA COMO ESTAS PERREKE
    </Frame>
  )
}
