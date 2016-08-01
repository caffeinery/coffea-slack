import init from './init'
import events from './events'

export default function slack (config, dispatch) {
  const instance = init(config.token)

  if (!config.prefix) config.prefix = '!'

  const { rtm } = instance // { rtm, web } for web api
  events(instance, config, dispatch)

  rtm.start()

  // TODO: implement web api with special calling events
  // web.team.info((err, channels) => {
  //   if (err) return console.log('Error:', err)
  //   console.log('Team info:', channels)
  // })

  // expose slack rtm api via calling events
  return (evt) => rtm.send({ ...evt, channel: evt.chat })
}
