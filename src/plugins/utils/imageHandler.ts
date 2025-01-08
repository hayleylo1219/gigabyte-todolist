/**
 * 等待圖片完全載入顯示後的處理
 * @param {string} url 圖片網址
 * @return {Promise<void>}
 **/

const preloadImage = (url: string) => {
  return new Promise<void>((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => resolve()
    img.onerror = () => reject()
  })
}


export { preloadImage }