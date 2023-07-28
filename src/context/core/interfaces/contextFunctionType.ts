import { Dispatch } from 'react'
import { ContextActionProps } from './contextActionProps'
import { GenericFunction } from './genericFunction'

type ContextFunctionType = (
  dispatch: Dispatch<ContextActionProps<any>>
) => GenericFunction

export type { ContextFunctionType }
