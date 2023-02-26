import * as user from './user'
import * as ip from  './ip'

import {get, head} from '../utils/request'

const ping = () => head(`/index.html`, {})

export {
  ping,
  user,
  ip
}
