import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const getFactAndUpdate = () => {
    getRandomFact().then(setFact)
  }

  useEffect(getFactAndUpdate, [])

  return { fact, getFactAndUpdate }
}
