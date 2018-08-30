import tasker from './tasker'
import type { TaskParameterType } from './tasker'

export function fcupper(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function fclower(string: string): string {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export type GlobalVariableManagerType = {
  get: () => string,
  set: (TaskParameterType) => void
}

export function createGlobalVariableManager(varname: string): GlobalVariableManagerType {
  return {
    get: () => tasker.global(varname),
    set: newValue => tasker.setGlobal(varname, newValue)
  }
}

export function prepareParameter(param: TaskParameterType): ?string {
  if (param === undefined || param === null) return

  if (typeof param === 'string') return param

  if (['boolean', 'number'].some(t => typeof param === t))
    return param.toString()
  
  if (typeof param === 'object')
    return JSON.stringify(param)

  return  
}