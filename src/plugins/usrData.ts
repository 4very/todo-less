import { mainStore } from '~/store/main'

export default defineNuxtPlugin((nuxtApp) => {
  const main = mainStore()
  if (nuxtApp.$auth.loggedIn && Object.keys(main.usrData).length === 0) {
    main.$patch({
      usrData: nuxtApp.$auth.user,
      token: nuxtApp.$auth.strategy.token.get(),
    })
  }
})
