import React, { FC, useReducer, createContext, useMemo } from 'react'
import { ContextActionsProps } from './interfaces/contextActionsProps'
import { ContextFunctionType } from './interfaces/contextFunctionType'
import { ReducerActionType } from './interfaces/reducerActionType'
import { ContextActionsType } from './interfaces/contextActionsType'

const createDataContext = <T, A = ContextActionsType>(
  reducer: ReducerActionType,
  actions: { [K in keyof A]: ContextFunctionType },
  initialState: T
) => {
  const ContextState = createContext(initialState)
  const ContextActions = createContext({} as A)

  const ActionsProvider: FC<Record<'value', A>> = ({ value, children }) => {
    return (
      <ContextActions.Provider value={value}>
        {children}
      </ContextActions.Provider>
    )
  }

  const ContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions = useMemo(() => {
      const boundActions: ContextActionsType = {}

      for (const key in actions) {
        boundActions[key] = ((actions as unknown) as ContextActionsProps)[key](
          dispatch
        )
      }

      return boundActions as unknown
    }, [])

    return (
      <ContextState.Provider value={state as T}>
        <ActionsProvider value={boundActions as A}>{children}</ActionsProvider>
      </ContextState.Provider>
    )
  }

  return { ContextState, ContextActions, ContextProvider }
}

export { createDataContext }
