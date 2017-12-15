export const SET_BREADCRUMB = 'SET_BREADCRUMB'

export const setBreadcrumb = breadcrumb => {
  return { type: SET_BREADCRUMB, breadcrumb: breadcrumb.toUpperCase() }
}
