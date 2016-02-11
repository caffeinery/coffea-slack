import init from './init'
import events from './events'

export default function slack (config, dispatch) {
  const instance = init(config.token)

  const { rtm, web } = instance
  events(instance, dispatch)

  rtm.start()

  // TODO: implement web api with special calling events
  // web.team.info((err, channels) => {
  //   if (err) return console.log('Error:', err)
  //   console.log('Team info:', channels)
  // })

  // expose slack rtm api via calling events
  return event => rtm.send(event)
}
