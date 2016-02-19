import { error } from 'coffea'

export default function events (instance, dispatch) {
  const { rtm, web } = instance

  // TODO: connect event
  rtm.on('message', message => dispatch(message))
  rtm.on('error', err => dispatch(error(err)))
}
