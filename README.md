# coffea-slack

Work in progress :wink:


## Installation

```
npm install --save coffea-slack
```


## Example

```js
import connect, { message } from 'coffea'
const networks = connect([
  {
     protocol: 'slack',
     token: 'PUT_YOUR_SLACK_TOKEN_HERE'
  }
])

// log all events
networks.on('event', e => console.log(e))

// reverse: reply with reversed message
const reverse = (msg, send) => {
  const reversedText = msg.text.split('').reverse().join('')
  const reversedMessage = message(msg.channel, reversedText)

  // you can send any slack RTM events via `send`
  send(reversedMessage)
}

// listen to messages and call `reverse`
networks.on('message', reverse)
```


## Implementation Details

 * The `send` function (`networks.send` or in event listeners `(event, send)`) is a wrapper for the [node-slack-client](https://github.com/slackhq/node-slack-client) `rtm.send` function.
 * Only `message` and `error` events are forwarded right now.
