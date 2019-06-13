import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'index'],
        name: 'Dashboard',
        moduleId: PLATFORM.moduleName('./routes/home/index'),
        nav: true,
        title: 'Dashboard'
      },
      {
        route: 'client',
        name: 'Client - Dashboard',
        moduleId: PLATFORM.moduleName('./routes/client/client'),
        nav: true,
        title: 'Client'
      },
      {
        route: 'sites',
        name: 'Sites - Dashboard',
        moduleId: PLATFORM.moduleName('./routes/sites/sites'),
        nav: true,
        title: 'Sites'
      }
    ]);

    this.router = router;
  }
}
