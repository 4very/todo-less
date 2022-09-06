export default defineEventHandler(async (event) => {
  const index = await useBody(event)
  const token = getHeader(event, 'authorization')?.toString()?.replace('Bearer ', '') as string

  const data = await $fetch('/api/data', { method: 'get', responseType: 'json' })

  delete data[token].todos[index]

  $fetch('/api/data', { method: 'post', body: { ...data } })

  return {}
})
