# Pipes

## ¿Qué aprenderemos en esta sección?

A continuación vamos a entrar a profundidad sobre el tema de los PIPES, que no es más que una transformación visual de la data.

En detalle veremos:

1. Pipes [uppercase](https://angular.io/api/common/UpperCasePipe) y [lowercase](https://angular.io/api/common/LowerCasePipe)
2. Pipe [Slice](https://angular.io/api/common/SlicePipe)
3. Pipe [Decimal](https://angular.io/api/common/DecimalPipe)
4. Pipe [Percent](https://angular.io/api/common/PercentPipe)
5. Pipe [Currency](https://angular.io/api/common/CurrencyPipe)
6. Pipe [Json](https://angular.io/api/common/JsonPipe)
7. Pipe [Async](https://angular.io/api/common/AsyncPipe)
8. Pipe [Date](https://angular.io/api/common/DatePipe)
9. Pipes personalizados
    * Capitalizar palabras y nombres
    * Creación de un pipe, que permite cargar recursos externos de forma segura.



### Cambiar pipe de Fecha a español

En la siguiente clase, aprenderemos como funciona el pipe de fecha, pero también una configuración necesaria para cambiarlo a español.

En la última actualización de Angular, ahora es necesario agregar el llamado de una función más... pero aquí les dejo la configuración necesaria en el ```app.module.ts```

```tsScript
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from '../src/app/app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Screenshots

![Pantalla principal](Documentation/mainscreen1.png)
![Pantalla principal](Documentation/mainscreen2.png)
![Pantalla principal](Documentation/mainscreen3.png)


## Referencias Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
