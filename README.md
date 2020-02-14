# TopCoder Challenge Notifier FrontEnd

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

FrontEnd for [TopCoder Challenge Notifier Backend](https://github.com/charan2628/TopCoderChallengeNotifierBackend).

TRY IT OUT [https://custom-built.dev/app/tpcn](https://custom-built.dev/app/tpcn)

**Framework**: Angular.

## Usage

* Add Tags to filter out challenges.

![](http://g.recordit.co/CGBG4JMYoX.gif)

* Update notification time

![](http://g.recordit.co/wvJqQ0i6xO.gif)

* Unsubscribe from notifications by clicking un-schedule link in dashboard.

![](http://g.recordit.co/hVlFVO2KMD.gif)

## Responsive web design

![](http://g.recordit.co/vPmL6ppMr6.gif)

## Setup
* Make sure you have `@angular/cli` npm package installed globally.
```
npm install -g @angular/cli
```

## Installation
```
npm install
```
* Update `apiUrl` in [environment.prod.ts](.src/environment/environment.prod.ts) and [environment.ts](.src/environment/environment.ts) to point it to backend server.
* To serve locally
```
ng serve
```
* To build
```
ng build --prod
```
