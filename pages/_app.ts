import App from 'next/app'
import Router from 'next/router'
const isProd = process.env.NODE_ENV === 'production' && !process.env.IS_VERCEL_DEPLOY;

import * as gtag from '../Modules/GoogleAnalytics'

if(true || isProd) {
    Router.events.on('routeChangeComplete', url => gtag.pageview(url))
}

export default App;
