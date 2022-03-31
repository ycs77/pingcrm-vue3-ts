import './global'
import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'

createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: name => require(`./Pages/${name}`),
  title: title => title ? `${title} - Ping CRM` : 'Ping CRM',
  setup({ App, props, plugin }) {
    return createSSRApp({
      render: () => h(App, props),
    }).use(plugin)
  },
}))
