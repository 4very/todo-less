export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  return { user: body, token: 'logintoken' }
})
