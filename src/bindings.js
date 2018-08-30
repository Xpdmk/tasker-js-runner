// @flow
import { 
  fcupper,
  fclower,
  prepareParameter
} from './utils'

import type { TaskParameterType } from './tasker'

import type { 
  TaskOptions, 
  TaskManagerTaskPrepareFunctionType, 
  TaskManagerTaskOptionsFunctionType
} from './pipe'

import {
  taskBindings,
  globalVariableBindings
} from './bindingDefs'

import type { 
  TaskBindingType,
  TypeCheckFunctionType
} from './bindingDefs'

const convertTaskNameStringToParamNames = (taskName: string): Array<string> => {
  const match: ?Array<string> = taskName.match(/.+\((.+)\)/)
  if (!match || match.length < 1) return []

  const argsStr: string = match[0]
  const matchParam = "\{[a-zA-Z]\}|[a-zA-Z]+"
  const argNames: ?Array<string> = argsStr.match(
    new RegExp(`\s?(${matchParam})\s?;\s?(${matchParam})\s?`, "g")
  )
  if (!argNames || argNames.length < 1) return []

  return argNames.map((arg, i) => {  
    const getGeneratedName = () => "par" + (i + 1)

    if (arg === "" || arg.includes('{')) return getGeneratedName()
    if (arg === arg.toUpperCase()) return arg.toLowerCase()
    if (arg === fcupper(arg)) return fclower(arg)
    
    return getGeneratedName()
  })
}

const generateBindedFunctions = 
  (prepareTask: TaskManagerTaskPrepareFunctionType) =>
  Object.keys(taskBindings).reduce((obj, key: string) => ({
    ...obj,
    [key]: (function() {
      const task: TaskBindingType = taskBindings[key]

      if (typeof task === 'string') {
        const args = convertTaskNameStringToParamNames(task)

        declare function eval(str: string): (?string, ?string) => TaskManagerTaskOptionsFunctionType

        return eval(`function(${args.join(', ')}) {
          return callback("${task}", arguments[0], arguments[1])
        }`)
      } else {
        return task(prepareTask)
      }
    })()
  }), {})

export const getBindedFunctions = (
  setTask: (name: string, par1: ?string, par2: ?string) => TaskManagerTaskOptionsFunctionType
) => {
  return {
    bindedTask: generateBindedFunctions(
      (name: string, par1: TaskParameterType, par2: TaskParameterType) =>
        setTask(name, prepareParameter(par1), prepareParameter(par2))
    ),
    ...globalVariableBindings
  }
}