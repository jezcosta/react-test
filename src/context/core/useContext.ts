import { Context, useContext as useContextReact } from 'react'

export const useContext = <T>(name: string, context: Context<T>) => {
  return () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ctx = useContextReact<T>(context)

    if (!ctx) {
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`
      )
    }

    return ctx
  }
}
