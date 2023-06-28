import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, getFactAndUpdate } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    getFactAndUpdate()
  }

  return (
    <main className='flex flex-col justify-center items-center m-[5%]'>
      <button onClick={handleClick}>New Fact</button>
      {fact && <p className='text-white m-4 text-2xl'>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cat image extracted from first three words of cat fact' />}
    </main>
  )
}
