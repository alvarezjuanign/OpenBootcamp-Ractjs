import { useEffect, useState } from 'react'

const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'
// const ENDPOINT_CAT_IMAGE = `https://cataas.com/cat/says/${firstThreeWords}?size=:50&color=:red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(ENDPOINT_CAT_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstThreeWords = fact.split(' ', 3).join(' ')
        console.log(firstThreeWords)

        fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=:50&color=:red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      }
      )
  }, [])

  return (
    <main>
      {fact && <p className='text-white m-4 text-2xl'>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='cat image extracted from first three words of cat fact' />}
    </main>
  )
}
