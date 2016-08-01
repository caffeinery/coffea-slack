# coffea-slack

_slack plugin for [coffea 1.0-beta](https://github.com/caffeinery/coffea/tree/1.0-beta)_


## Setup

 * Make sure to use the latest *beta* version of coffea by running: `npm install --save coffea@beta`
 * Install `coffea-slack`: `npm install coffea-slack`


## Usage

Specify the slack protocol in your network config:

```js
{
  "protocol": "slack",
  "token": "xoxb-XXX", // required
  "prefix": "." // optional, default: !
}
```

coffea will automatically load `coffea-slack` when it's needed! Thus, using slack (or other protocols) this way should work on **any** coffea project, **without any tweaks** (other than installing `coffea-slack` and specifying the config).

`coffea-slack` aims to be compatible with coffea. Of course, features that slack doesn't have (like audio messages) aren't available for slack protocols, they will just be ignored.


## API

You can use the [Slack RTM API](https://api.slack.com/rtm) when sending events
(make sure to use `chat` instead of `channel` for consistency with other protocols):

```js
networks.send({
  type: 'message',
  chat: 'D0KT6J8S3',
  text: 'Hello world!'
})
```

But for simple events, like `message`, you should use the coffea helper instead:

```js
import { message } from 'coffea'
networks.send(message('Hello world!', 'D0KT6J8S3'))
```
