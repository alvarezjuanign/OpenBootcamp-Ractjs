import { useEffect, useState } from 'react'
import { getImageCat, getRandomFact } from './services/facts'

// const ENDPOINT_CAT_IMAGE = `https://cataas.com/cat/says/${firstThreeWords}?size=:50&color=:red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    getImageCat(fact).then(setImageUrl)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main className='flex flex-col justify-center items-center m-[5%]'>
      <button onClick={handleClick}>New Fact</button>
      {fact && <p className='text-white m-4 text-2xl'>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='cat image extracted from first three words of cat fact' />}
    </main>
  )
}
