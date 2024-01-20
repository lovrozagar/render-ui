import { Primitive as primitive } from '@radix-ui/react-primitive'

type FormPrimitive = typeof primitive.form

type FormRef = React.ElementRef<FormPrimitive>

// Custom event type with allowDefault method
type FormEvent = Omit<React.FormEvent<HTMLFormElement>, 'preventDefault'> & {
  allowDefault: () => void
}

type FormOnSubmit = (event: FormEvent) => void

type FormProps = Omit<React.ComponentPropsWithoutRef<FormPrimitive>, 'onSubmit'> &
  Readonly<{
    onSubmit?: FormOnSubmit
  }>

export type { FormEvent, FormProps, FormRef }
