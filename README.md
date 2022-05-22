# cannan

## Code Conventions

Conventions in code that shows the best pratices in this project.

### Development case style

```
cameCase -> Data, variables and functions in all .vue .js files
snake_case -> Data(lower case) and mutation(upper case) in vuex files

PascalCase -> We don't use this one yet
kebab-case -> We don't use this one yet
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## Deploy to https://cannan.herokuapp.com/

### Login on heroku

```
heroku login
```

### Create a heroku project

```
heroku create
```

or

```
heroku create cannan
```

### Add a heroku remote

```
heroku git:remote --app cannan
```

### Push an deploy on heroku https://cannan.herokuapp.com/

```
git push heroku main
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
