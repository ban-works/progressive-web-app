// export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
export const GTM_ID = 'GTM-PFCM7MZ'
export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}