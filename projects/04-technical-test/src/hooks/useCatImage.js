import { useEffect, useState } from 'react'
import { getImageCat } from '../services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')
    getImageCat(firstThreeWords).then(setImageUrl)
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
