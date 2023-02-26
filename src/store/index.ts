import {createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'

import user from './user'

export default createPinia().use(piniaPersist)

export {
  user,
}

