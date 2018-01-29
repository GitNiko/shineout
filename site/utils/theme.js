let theme = 'default'

function getParameterByName(name) {
  const { search } = window.location
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(search)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const THEMES = ['default', 'antd']

function init(callback) {
  theme = getParameterByName('theme') || 'default'
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', `${theme}.css`)
  link.onload = callback

  document.head.appendChild(link)
}

export default {
  init,

  getTheme: () => theme,
}