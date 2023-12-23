interface Props {
  [key: string]: any
}

type PropsArgument = Props | null | undefined

type NullToObject<T> = T extends null | undefined ? Readonly<{}> : T

type TupleTypes<T> = { [P in keyof T]: T[P] } extends { [key: number]: infer V }
  ? NullToObject<V>
  : never


type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never

export type { Props, PropsArgument, TupleTypes, UnionToIntersection }
