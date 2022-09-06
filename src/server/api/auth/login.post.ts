export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const email = body.email
  const password = body.password

  const users = await $fetch('/api/users', { method: 'get', responseType: 'json' })

  if (!(email in users)) {
    return {
      errorCode: 400,
      error: 'User not found!',
    }
  }

  if (users[email].password !== password) {
    return {
      errorCode: 400,
      error: 'Wrong password!',
    }
  }

  return {
    token: users[email].token,
  }
})
