/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from "react"
import { createDataContext } from "./createDataContext"
import { ContextActionProps } from "./interfaces/contextActionProps"
import { ReducerActionType } from "./interfaces/reducerActionType"
import { useContext as useContextFn } from "./useContext"

export const createContext = <T, O, R>(contextName: string, reducer: (state: T, action: ContextActionProps<R>) => any, actions: any, defaultState: T) => {
    const {
        ContextActions,
        ContextProvider,
        ContextState
      } = createDataContext<T, O>(
        reducer as ReducerActionType,
        {
         ...actions
        },
        defaultState
      )

    const useContext = useContextFn(
        contextName,
    ContextState
    )
    
    const useActionsContext = useContextFn(
    `${contextName}Actions`,
    ContextActions
    )
    
    return {
        ContextProvider,
        useContext,
        useActionsContext
    }
}