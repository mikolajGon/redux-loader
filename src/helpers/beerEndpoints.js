
const BEER_LIST = 'https://api.punkapi.com/v2/beers'
const RANDOM_BEER = 'https://api.punkapi.com/v2/beers/random'
const singleBeer = id => `https://api.punkapi.com/v2/beers/${id}`

export {
  BEER_LIST,
  RANDOM_BEER,
  singleBeer
}