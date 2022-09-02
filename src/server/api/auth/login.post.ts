// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '~~/src/plugins/firebase'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  // createUserWithEmailAndPassword(auth, 'username@gmail.com', 'password')

  return { user: body, token: 'logintoken' }
})
