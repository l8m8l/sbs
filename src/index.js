import { render } from 'react-dom'
import Lineup from './lineup'
import Stats from './stats'
import './index.css'

const urlSearchParams = new URLSearchParams(location.search)
const { type, id, home, away } = Object.fromEntries(urlSearchParams.entries())

if (type && id) {
  const Widget = type === 'lineup' ? Lineup : type === 'stats' ? Stats : null
  if (Widget) {
    const $root = document.getElementById('root')
    render(<Widget id={id} home={home} away={away} />, $root)
  }
}

/* eslint-disable-next-line no-console */
console.log(`${app.env.NAME} - ${app.env.REVISION}`)
