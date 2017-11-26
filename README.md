This was quite the battle but I am able to take data from a backend that has nested arrarys containing nested arrays and populate nested formArrays. 

I was not able to find any blogs or StackOverflow posts that went this deep. I refactored the Reactive Forms Heros example. In my case I only want one hero and I want multiple addresses. The problem was that I wanted each address to have multiple pets. So, the pets are children of the addresses. In my real-world problem, I have a questionnaire and that questionnaire has child topics and those topics have child questions. 

If you happen to know of a better way, please do let me know. 

The main meat here is in the Hero detail component and specifically the setAddresses() method. Also, the matching HTML structure in the view. 

# AngularReactiveForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
