export function getAssetsImgService(url) {
  return new URL(`../assets/img/service/${url}`, import.meta.url).href;
}
export function getAssetsImg(url) {
  return new URL(`../assets/${url}`, import.meta.url).href;
}
export function getAssetsImgFile(file, url) {
  return new URL(`../assets/img/${file}/${url}`, import.meta.url).href;
}
