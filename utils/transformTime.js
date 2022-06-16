function timestampIntoDbFormat(timestamp) {
  if(!timestamp)return null
  const year = new Date(timestamp).getUTCFullYear()
  const month = new Date(timestamp).getUTCMonth()
  const day = new Date(timestamp).getUTCDate()
  console.log(`${year}-${month}-${day}`)
  return `${year}-${month}-${day}`
}

function transformIntoTimestamp(time) {
   console.log(time)
  if(!time) return null

  const timestamp =  time.getTime()

  return timestamp
}

module.exports={
  timestampIntoDbFormat,
  transformIntoTimestamp
}