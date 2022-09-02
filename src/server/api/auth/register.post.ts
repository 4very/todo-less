import fs from 'fs'

export const usersFile = './src/assets/users.json'
export const dataFile = './src/assets/data.json'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const email = body.email
  const password = body.password
  const name = body.name

  const users = JSON.parse(fs.readFileSync(usersFile).toString())
  if (email in users) {
    return {
      errorCode: 400,
      error: 'User already created!',
    }
  }

  const token = Math.random().toString(36).slice(2)

  users[email] = {
    name,
    password,
    token,
  }

  const data = JSON.parse(fs.readFileSync(dataFile).toString())
  data[token] = {
    todos: [],
  }

  fs.writeFileSync(dataFile, JSON.stringify(data))
  fs.writeFileSync(usersFile, JSON.stringify(users))

  return { token }
})
