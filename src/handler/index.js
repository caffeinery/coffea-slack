import makeMessageHandler from './message'

export default function makeHandler (instance) {
  'message': makeMessageHandler(instance)
  // TODO: list others here
}
