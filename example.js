import connect, { message } from 'coffea'
import slack from './src/index'

const networks = connect([
  {
     protocol: slack,
     token: '...'
  }
])

networks.on('event', e => console.log(e))

const reverse = (msg, send) => {
  const reversedText = msg.text.split('').reverse().join('')
  const reversedMessage = message(msg.channel, reversedText)

  send(reversedMessage)
}

networks.on('message', reverse)
