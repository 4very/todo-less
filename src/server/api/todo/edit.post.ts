export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const token = getHeader(event, 'authorization')?.toString()?.replace('Bearer ', '') as string

  const data = await $fetch('/api/data', { method: 'get', responseType: 'json' })

  data[token].todos[body.id] = {
    ...body,
  }

  $fetch('/api/data', { method: 'post', body: { ...data } })

  return {}
})
