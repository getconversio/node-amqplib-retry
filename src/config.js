const EXCHANGE_NAME = 'amqplib-retry'
const DELAYED_QUEUE_NAME = 'amqplib-retry.delayed'
const READY_QUEUE_NAME = 'amqplib-retry.ready'
const READY_ROUTE_KEY = 'ready'

module.exports = {
  exchangeName: EXCHANGE_NAME,
  delayQueueName: DELAYED_QUEUE_NAME,
  readyQueueName: READY_QUEUE_NAME,
  readyRouteKey: READY_ROUTE_KEY
}
