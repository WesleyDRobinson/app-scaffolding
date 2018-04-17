# An Application Framework

[![framework screenshot](./public/assets/screenshot.png)](https://app-scaffolding.now.sh)

### Motivation

a small framework for constructing web platform applications and sites

### Requirements

- pleasant, high-velocity prototyping experience
- delightful for the end user

## How to

0. Fork and clone this repo!
1. `yarn install` or `npm install`
1. `yarn run develop` and open a browser window to `localhost:8080`
1. Update title, description, favicons, custom scripts to be loaded clientside, etc., to `public/index.html`, the browser's 'entry point'
2. Add custom scripts to `src/app.js`
3. Build custom elements in `src/components`
4. Set up client side routes in `routing.js`

### Deploy

There are npm scripts for 2 types of deployment on now. It is likely you need to do some additional research to understand.
1. `yarn run deploy`

    spin up server instance(s) supports deeply nested links

2. `yarn run deploy:static`, use if you have only need a single entry point to your app. And don't want to count against your instances limit only want to only pay for bandwidth!

#### Alias

After the deployment is tested, update the now alias list in package.json and `yarn run alias`
