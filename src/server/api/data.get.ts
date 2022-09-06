import fs from 'fs'
export const dataFile = './src/assets/data.json'

export default defineEventHandler(() => {
  const data = JSON.parse(fs.readFileSync(dataFile).toString())
  return { ...data }
})
