import fakeTasker from './fakeTasker'

export type EnhancedTaskerType = typeof fakeTasker & {
  // Custom props
  inspect: (target: mixed) => string,
  console: {
    log: (...args: Array<mixed>) => void
  },
  getParams: () => Array<TaskParameterType>,
  locals: {[string]: TaskParameterType},
  tasker: EnhancedTaskerType
}

export type TaskParameterType =
  | ?string
  | number
  | boolean
  | {[string]: TaskParameterType}

declare var window: EnhancedTaskerType
declare var global: EnhancedTaskerType

const tasker: EnhancedTaskerType = window || fakeTasker

global.tasker = tasker;

// Injecting development functions
tasker.inspect = target => {
  const cache: Array<mixed> = [];
  return JSON.stringify(target, function(key: string, value: TaskParameterType) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
}

tasker.console = {
  log: (...params: Array<mixed>) => {
    tasker.flash(
      params
        .map(param=> (typeof param === 'string') ? param : tasker.inspect(param))
        .join(' ')
    );
  },
};

tasker.getParams = () => {
  return [
    tasker.local('par1'),
    tasker.local('par2'),
  ].map((rawParam: string)=> {
      // Test if param is a json
      let parsedParam: ?TaskParameterType
      try {
        parsedParam = JSON.parse(rawParam); // will fail if param is not a JSON
      } catch {
        parsedParam = rawParam;
      }
      return parsedParam === 'undefined' ? undefined : parsedParam;
    });
};

// Attempt to restore param from upstream
let par1: TaskParameterType = tasker.getParams()[0];
if (par1 !== undefined && typeof par1 !== 'object') par1 = { par1 }

declare var local_keys: Array<string>

tasker.locals = par1 || local_keys
  .reduce((acc: Object, key: string) => {
    const keyName: string = key.slice(1);
    acc[keyName] = tasker.local(keyName);
    return acc;
  }, {});


export default tasker;
