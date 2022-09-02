export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'authorization')
  if (token === 'Bearer logintoken')
    return { user: { data: ['todo1'] } }

  return { user: {} }
})
