export default function stringToId(string) {
  return string.replace(/\s+/g, '-').toLowerCase()
}
