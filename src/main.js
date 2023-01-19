import { createApp, render } from 'terezzu'

import { userCreator } from '@/components/userCreator'
// import { mockServiceFactory } from '@/mocks'

const appUser = createApp({
  appName: 'userCreator',
  mount: () => {
    // mockServiceFactory().init()
    render(userCreator)
  }
})

export { appUser }
