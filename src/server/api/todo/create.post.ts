export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const token = body.token?.replace('Bearer ', '') as string
  delete body.token

  const data = await $fetch('/api/data', { method: 'get', responseType: 'json' })

  data[token].todos[data[token].index] = {
    id: data[token].index,
    ...body,
  }

  data[token].index++

  $fetch('/api/data', { method: 'post', body: { ...data } })

  return data[token]
})
