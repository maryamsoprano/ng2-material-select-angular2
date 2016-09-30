/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */

(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': '/app', // 'dist',
    '@angular': '/node_modules/@angular',
    'angular2-in-memory-web-api': '/node_modules/angular2-in-memory-web-api',
    'rxjs': '/node_modules/rxjs',
    'reflect-metadata': '/node_modules/reflect-metadata',
    '@angular2-material': '/node_modules/@angular2-material',
    //   'Ng2Select': '/node_modules/ng2-material-select',
    'ng2-material-select': '/node_modules/ng2-material-select',
    'traceur': '/node_modules/traceur',
    'typescript': '/node_modules/typescript',

    'ng2-select': '/node_modules/ng2-select',
    'ng2-material': '/node_modules/ng2-material',
    'ng2-translate': 'node_modules/ng2-translate',
    'moment': '/node_modules/moment',
    'ng2-charts': '/node_modules/ng2-charts',
    'chart.js': '/node_modules/chart.js/dist',
    'enum-values': '/node_modules/enum-values'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'reflect-metadata': { defaultExtension: 'js' },
    'ng2-translate': { defaultExtension: 'js' },
    'ng2-select': { main: 'ng2-select.js', defaultExtension: 'js' },
    'ng2-material': { main: 'index.js', defaultExtension: 'js', format: 'cjs' },
    'Ng2SelectModule': { defaultExtension: 'js' },
    'ng2-material-select': { main: 'dist/index.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'moment': { main: 'moment.js', defaultExtension: 'js' },
    'ng2-charts': { defaultExtension: 'js' },
    'chart.js': { main: 'Chart.min.js', defaultExtension: 'js' },
    'enum-values': { main: 'index.js', defaultExtension: 'js' },
    'traceur': { main: 'bin/traceur.js', defaultExtension: 'js' },
    'typescript': { main: 'lib/typescript.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade'
  ];
  // put the names of any of your Material components here
  var materialPkgs = [
    'core',
    'button',
    'button-toggle',
    'card',
    'checkbox',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'tabs',
    'toolbar',
    'tooltip'
  ];

  // materialPkgs.forEach(packMaterials);
  // function packMaterials(pkg, index) {
  //   packages['@angular2-material/' + pkg] = { format: 'cjs', main: pkg + '.js' };
  // }

  materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = {
      format: 'cjs',
      main: `${pkg}.umd.js`,
      defaultExtension: 'js'
    };
  });
  // materialPkgs.forEach((pkg) => {
  //   packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
  // });
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages,
    defaultExtension: 'ts',
    transpiler: 'typescript'
  }
  // var config = {
  //   map: map,
  //   packages: packages
  // }
  // var config = {
  //   map: map,
  //   packages: packages,
  //   defaultExtension: 'ts',
  //   transpiler: 'typescript'
  // }
  System.config(config);
})(this);
