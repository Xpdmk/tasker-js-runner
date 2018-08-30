import { createGlobalVariableManager } from './utils'
import type { GlobalVariableManagerType } from './utils'
import type { TaskParameterType } from './tasker'
import { setTypedFunction } from './pipe'
import type { CreateTaskManagerTaskPrepareFunctionType } from './pipe'

export type TypeCheckFunctionType = (?TaskParameterType, ?TaskParameterType) => void

export type TaskBindingType =
  | string 
  | CreateTaskManagerTaskPrepareFunctionType

export type TaskBindingsType = {
  [string]: TaskBindingType
}

export type VariableBindingsType = {
  [string]: GlobalVariableManagerType
}

export const taskBindings: TaskBindingsType = {
  getSecondsToHumanDuration: "Tools.Func.SecondsToHumanDuration(Seconds)",
  datetimeToEpoch: setTypedFunction(
    "Tools.Func.DatetimeToEpoch(Datetime)",
    (callback) => (datetime: string) => callback(datetime)
  )
}

export const globalVariableBindings: VariableBindingsType = {
  powerState: createGlobalVariableManager("G_POWER")
}