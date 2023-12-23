'use client'

import { isDocumentDarkModePreferred } from '@/packages/utils/mode/utils/is-document-dark-mode-preferred'

function toggleDocumentMode() {
  const documentElement = document.documentElement

  const isDark = documentElement.classList.contains('dark')
  const isStystemDarkModePreference = isDocumentDarkModePreferred()

  const isSystem =
    (isDark && isStystemDarkModePreference) || (!isDark && !isStystemDarkModePreference)

  if (isDark) {
    documentElement.classList.remove('dark')
    documentElement.classList.add('light')
  } else {
    documentElement.classList.remove('light')
    documentElement.classList.add('dark')
  }

  if (isSystem) {
    documentElement.classList.remove('system')
  } else {
    documentElement.classList.add('system')
  }
}

export { toggleDocumentMode }
