import { RTM_EVENTS, CLIENT_EVENTS } from '@slack/client'

import { connection, message, command, error } from 'coffea'

export default function events (instance, config, dispatch) {
  const { rtm } = instance // { rtm, web } for web api

  rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () =>
    dispatch(connection())
  )

  rtm.on(RTM_EVENTS.MESSAGE, (evt) => {
    const { text, channel } = evt
    const options = { from: evt.user, team: evt.team }

    dispatch(message({ chat: channel, text, options }))

    if (text.charAt(0) === config.prefix) { // example: .nw name
      let args = text.substring(1).split(' ') // [ 'nw', 'name' ]
      let cmd = args.shift() // nw
      // args is now [ 'name' ]
      return dispatch(command({ chat: channel, cmd, args, options }))
    }
  })

  rtm.on('error', (err) => dispatch(error(err)))
}
