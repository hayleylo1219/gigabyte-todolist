import axios from 'axios'


/**
 * API: 取得隨機貓咪圖片
 * @return {Promise<string>}
 **/

const getRadomImageApi =  async() : Promise<string> => {
  return await axios.get('https://api.thecatapi.com/v1/images/search')
    .then((response) => {
      return response.data[0].url
    }).catch((error) => {
      console.log(error)
    })
}

export { getRadomImageApi }