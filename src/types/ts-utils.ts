type OrUndefined<T> = {
  [K in keyof T]: T[K] | undefined
}

export type { OrUndefined }
