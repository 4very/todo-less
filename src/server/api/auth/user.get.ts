export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'authorization')?.toString()?.replace('Bearer ', '')

  if (token === undefined) {
    return {
      user: {},
    }
  }

  const data = await $fetch('/api/data', { method: 'get', responseType: 'json' })

  if (token in data) {
    return {
      user: data[token],
    }
  }

  return { user: {} }
})
