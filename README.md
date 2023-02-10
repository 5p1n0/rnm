# Rnm API
Rick &amp; Morty API web app.

https://rnm.netlify.app

## How to run

```
  npm i 
  npm start
```

### Scripts

```
  npm run prettify && npm run lint && npm run check
```

## Tests

### Unit
coverage report in `coverage/` dir

```
  npm test
```

### E2e
Cypress require a running dev server
```
  npm start
```
```
  npx cypress run
```

### Visual Regression
Component screenshots are uploaded to argos-ci while doing e2e tests in CI\
From argos dashboard i'm able to review and reject/approve commits with detected changes\
Screenshot samples are in `cypress/screenshots/`
