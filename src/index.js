import tasker from './tasker'
import Router from './router'
import type { ProfileHandlerType } from './router'

const hotReload = (): Promise<void> => {
  const environment = tasker.global('TJS_ENV');

  if (environment !== 'development') return Promise.resolve();

  return fetch(tasker.global('TJS_DEV_REMOTE'))
    .then(res => res.text())
    .then((result) => {
      const existingFile = tasker.readFile(tasker.global('TJS_LOCAL_PATH'));

      if (existingFile !== result) {
        tasker.writeFile(tasker.global('TJS_LOCAL_PATH'), result);
        tasker.flash('script updated');
        tasker.performTask(
          'TJS:RunScript',
          tasker.local('priority'),
          JSON.stringify(tasker.locals)
        );
        tasker.exit();
      }

    })
    .catch((err: Error) => tasker.flash(err.message));
};

export default class TaskerJS {
  router: Router
  constructor(routes: { [string]: () => ProfileHandlerType }) {
    this.router = new Router(routes, tasker);

    hotReload()
      .then(() =>
        this.router.dispatch(tasker.locals)
          .catch(err => tasker.flash(err.message))
          .then(() => tasker.exit())
      );
  }
}
