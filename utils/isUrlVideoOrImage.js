const getExtensionFromUrl = url =>
  url
    .split(/[#?]/)[0]
    .split('.')
    .pop()
    .trim()

export default url => {
  const videoTypes = ['mp4', 'mov', 'wmv', 'avi']
  const imageTypes = ['jpeg', 'jpg', 'png', 'gif']
  const type = getExtensionFromUrl(url)
  if (videoTypes.includes(type.toLowerCase())) return 'video'
  if (imageTypes.includes(type.toLowerCase())) return 'image'
  return null
}
