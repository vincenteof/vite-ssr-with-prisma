import ReactDOMServer from 'react-dom/server'
import { App } from './App'
import { prisma } from './prisma'

export function render(url) {
  console.log('url: ', url)
  console.log('prisma.user.promise: ', prisma.user.findMany())
  return ReactDOMServer.renderToString(<App />)
}
