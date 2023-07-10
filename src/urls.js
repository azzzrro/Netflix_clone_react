import { API_KEY } from "./Constants/constants"

export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const drama = `discover/movie?api_key=${API_KEY}&with_genres=18`

export const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

