import { Dispatch } from "react";
import { ContextActionProps } from "./interfaces/contextActionProps";

export const registerAction = <T>() => {
    return (dispatch: Dispatch<ContextActionProps<T>>, type: T, payload?: ContextActionProps<T>) => {
        dispatch({
            type: type,
            payload
          })
    }
}
