import { WebClient, RtmClient } from '@slack/client'

export default function init (token) {
  const rtm = new RtmClient(token, {})
  const web = new WebClient(token)
  return { web, rtm }
}
