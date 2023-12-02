type Ref<T extends Element> =
  | React.RefCallback<T>
  | React.MutableRefObject<T>
  | React.ForwardedRef<T>

export type { Ref }
