
import App from 'next/app'
import Router from 'next/router'

import * as gtag from '../util/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default App;