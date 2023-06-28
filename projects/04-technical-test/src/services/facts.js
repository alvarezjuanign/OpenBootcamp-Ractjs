const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(ENDPOINT_CAT_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getImageCat = async (fact) => {
  if (!fact) return
  const firstThreeWords = fact.split(' ', 3).join(' ')

  const res = await fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=:50&color=:red&json=true`)
  const response = await res.json()
  const { url } = response
  return url
}
