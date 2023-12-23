function isDocumentDarkModePreferred() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export { isDocumentDarkModePreferred }
