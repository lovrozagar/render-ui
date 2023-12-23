function isWindow(value: unknown): value is Window {
  return typeof window !== 'undefined' && value instanceof Window
}

export { isWindow }
