import init from './init'
import makeHandler from './handler'

export default function slack (config, dispatch) {
  const instance = init(config.token)
  const handler = makeHandler(instance)
  return forward(handler)
}
