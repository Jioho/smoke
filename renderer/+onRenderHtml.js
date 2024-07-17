export { onRenderHtml }

import { renderToString as renderToString_ } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { createApp } from './app'

async function onRenderHtml(pageContext) {
  const { Page, pageProps, config } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const app = createApp(Page, pageProps, pageContext)

  const appHtml = await renderToString(app)

  // See https://vite-plugin-ssr.com/head
  const documentProps = config.documentProps || {}
  const title = documentProps.title || ''
  const desc = documentProps.description || ''
  const icon = documentProps.icon || ''
  const baseUrl = import.meta.env.VITE_BASE_PATH || ''
  const ssr = typeof config.ssr == 'boolean' ? config.ssr : true
  const documentHtml = escapeInject`<!DOCTYPE html><html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <link rel="icon" href="${icon}">
        <meta name="description" content="${desc}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Cache-Control" content="no-cache,no-store,must-revalidate">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="0">
        <script src="${baseUrl}/amfe-flexible.min.js"></script>
      </head>
      <body><div id="app">${ssr ? dangerouslySkipEscape(appHtml) : ''}</div></body></html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}

async function renderToString(app) {
  let err
  // Workaround: renderToString_() swallows errors in production, see https://github.com/vuejs/core/issues/7876
  app.config.errorHandler = (err_) => {
    err = err_
  }
  const appHtml = await renderToString_(app)
  if (err) throw err
  return appHtml
}
