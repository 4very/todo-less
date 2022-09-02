export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'authorization')
  console.log('token', token)
  if (token === 'Bearer logintoken')
    return { user: { data: ['todo1'] } }

  return { user: {} }
})
