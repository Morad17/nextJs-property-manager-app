import axios from "axios";



const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c433fbdd9cmshb778d9443e01b92p102a18jsnaa87bc28776b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
}