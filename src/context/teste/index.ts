import { createContext } from "../core/createContext"
import { ContextActionProps } from "../core/interfaces/contextActionProps"
import { registerAction } from "../core/registerAction"

interface ITesteContext {
    nome?: string,
    email?: string,
  }

interface ITesteActionsContext {
    setName: (param: string) => void
}

enum TesteReducerType {
    setName = 'setName',
  }
  

const initialState: ITesteContext = {
    nome: '',
    email: ''
}

const testeReducer = (
    state: ITesteContext,
    action: ContextActionProps<TesteReducerType>
  ) => {
    switch (action.type) {
      case TesteReducerType.setName:
        return { ...state, ...action.payload }
      default:
        return state
    }
  }

const setName = registerAction<TesteReducerType>()

const {useActionsContext: useTesteContextActions, useContext: useTesteContext, ContextProvider: TesteContextProvider} = createContext<ITesteContext, ITesteActionsContext, TesteReducerType>("TesteContext",testeReducer, {setName}, initialState)

export {
    useTesteContextActions,
    TesteContextProvider,
    useTesteContext,
}