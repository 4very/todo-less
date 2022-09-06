export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const email = body.email
  const password = body.password
  const name = body.name

  const users = await $fetch('/api/users', { method: 'get', responseType: 'json' })

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

  const data = await $fetch('/api/data', { method: 'get', responseType: 'json' })

  data[token] = {
    name,
    todos: {},
    index: 0,
  }

  $fetch('/api/data', { method: 'post', body: { ...data } })
  $fetch('/api/users', { method: 'post', body: { ...users } })

  return { token }
})
