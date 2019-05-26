import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    ready: function () {
        let element = document.getElementById('init-preloader');
        element.parentElement.removeChild(element);
    },
    Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
