# vue1-vue2
This is an example of running Vue.js 1.x and 2.x on the same page.

## Why
I am sure this is not best practice but it is something that I needed during the transition.

## Install & Run
```shell
$ git clone git@github.com:jameymcelveen/vue1-vue2.git
$ cd vue1-vue2
$ npm install
$ make build
$ make start
```

In the example `index.html`  
Vue.js 1.x is referenced:    
-  as the file `vue1.js`  
-  as the Global variable `Vue1`

Vue.js 2.x is referenced as normal from a CDN.