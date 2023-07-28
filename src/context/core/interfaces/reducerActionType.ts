import { ContextActionProps } from './contextActionProps'

type ReducerActionType = <T>(
  state: T,
  action: ContextActionProps<unknown>
) => T

export type { ReducerActionType }
