export const GA_TRACKING_ID = 'G-K9ZM8XNRM9';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  //@ts-ignore
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  //@ts-ignore
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}