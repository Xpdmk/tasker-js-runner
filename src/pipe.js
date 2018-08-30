import tasker from './tasker'
import type { TaskParameterType, EnhancedTaskerType } from './tasker'
import { getBindedFunctions } from './bindings'
import type { TypeCheckFunctionType } from './bindingDefs'

export type TaskOptions = {
  returnLocalPropName: string
}

export type TaskManagerTaskOptionsFunctionType = (options: TaskOptions) => void


export type TaskManagerTaskPrepareFunctionType = (
  name: string, par1: ?string, par2: ?string,
) => TaskManagerTaskOptionsFunctionType

export type CreateTaskManagerTaskPrepareFunctionType = (TaskManagerTaskPrepareFunctionType) => TaskManagerTaskPrepareFunctionType

export type TaskType = {
  name: string,
  par1?: string,
  par2?: string,
  options: TaskOptions
}

export type SafeTaskerType = $Diff<EnhancedTaskerType, {
  setLocal: Function,
  setGlobal: Function
}>

export type PipeFunctionType = 
  (locals: Object, tasker: Object, returnValue?: TaskParameterType) => TaskParameterType

export default function runPipe(
  functions: Array<PipeFunctionType>, locals: Object, 
  index: number = 0, frozenValues: {returnValue?: TaskParameterType} = {}
) {
  if (index >= functions.length) return

  const taskManager: TaskManager = new TaskManager()

  const safeTasker: SafeTaskerType = {
    ...['setLocal', 'setGlobal'].reduce(
      (t, propName) => {
      delete t[propName]
      return t
    }, {...tasker}),
    ...getBindedFunctions(
      (...args) => 
      (options) => {taskManager.addTask(...args, options)}
    )
  }

  let returnValue: TaskParameterType = frozenValues.returnValue
  for (let i = index; i < functions.length; i++) {
    returnValue = functions[i]({...locals}, {...safeTasker}, returnValue)

    if (taskManager.hasTasks()) {
      taskManager.extractTasks(i + 1)
      tasker.setLocal('frozen_pipe_values', JSON.stringify({returnValue}))

      return
    }
  }
}

export const setTypedFunction = (
  taskName: string,
  callback: CreateTaskManagerTaskPrepareFunctionType
): CreateTaskManagerTaskPrepareFunctionType => (prepareTask: TaskManagerTaskPrepareFunctionType) => callback((par1, par2) => prepareTask(taskName, par1, par2))

class TaskManager {
  tasks: Array<TaskType>

  constructor() {
    this.tasks = []
  }

  hasTasks(): boolean {
    return this.tasks.length !== 0
  }

  addTask(name: string, par1: ?string, par2: ?string, options: TaskOptions) {
    let o = {name, options}
    if (par1) o = {...o, par1}
    if (par2) o = {...o, par2}
    this.tasks.push(o)
  }

  extractTasks(nextIndex?: number): void {
    const vars: {
      task_run_payload: string,
      restore_index?: number
    } = { task_run_payload: JSON.stringify({ tasks: this.tasks }) }

    if (nextIndex !== undefined) vars.restore_index = nextIndex

    Object.keys(vars).forEach((prop: string) => {
      if (vars[prop] === undefined) return

      tasker.setLocal(prop, vars[prop])
    })
  }
}