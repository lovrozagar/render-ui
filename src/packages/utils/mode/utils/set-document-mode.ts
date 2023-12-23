'use client'

import { isDocumentDarkModePreferred } from '@/packages/utils/mode/utils/is-document-dark-mode-preferred'

type Mode = 'light' | 'dark' | 'system'

function setDocumentMode(theme: Mode) {
  const documentElement = document.documentElement

  if (theme === 'light' || theme === 'dark') {
    documentElement.className = theme
    return
  }

  const systemTheme = isDocumentDarkModePreferred() ? 'dark' : 'light'

  documentElement.className = systemTheme
}

export { setDocumentMode }
