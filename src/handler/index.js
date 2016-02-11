import message from './message'

export default function makeHandler (instance) {
  'message': message(instance)
  // TODO: list others here
}
