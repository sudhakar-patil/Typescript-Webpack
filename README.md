# Typescript-Webpack
### Demonstrates Typesript-Webpack configuration

###### Install Typscript. If already installed, check version & if req. update it.Install Typscript. If already installed, check version & if req. update it.
    npm i -g typescript   (install)
    tsc --version (check version)
    npm update typescript@latest (update)

###### Initialize new typescript configInitialize new typescript config
    tsc --init
    Change target  to 'es6' and module to 'es2015'

###### Create package.json using npm to manage dependenciesCreate package.json using npm to manage dependencies
    npm init

###### Install webpack & webpack-cli(required to interact with webpack)
    npm i webpack webpack-cli  -D

###### Install ts-loader, it is required to how typscript is compiled to javascriptInstall ts-loader, it is required to how typscript is compiled to javascript
    npm i ts-loader -D

###### Install typscript as local dependency
    npm i typescript -D

###### Create a new webpack.config.js, name needs to be exact to work it properlyCreate a new webpack.config.js, name needs to be exact to work it properly

Add "scripts": {
    "build":"webpack",  <-- Add into package.json to run webpack
    "test": "echo \"Error: no test specified\" && exit 1"
  }

###### Install webpack-dev-server to see changes in realtimeInstall webpack-dev-server to see changes in realtime
    npm i webpack-dev-server -D

    -In package.json file under "scripts" add "serve:"webpack-dev-server"
    -Reference script file in index.html

Using es6 modules 






## 