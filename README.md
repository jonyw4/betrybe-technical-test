# 💲 Crypto Index (betrybe-technical-test)
[![codecov](https://codecov.io/gh/jonyw4/betrybe-technical-test/branch/main/graph/badge.svg?token=ZCG023NWZW)](https://codecov.io/gh/jonyw4/betrybe-technical-test)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This app is a test application to betrybe and it's an example of how could be a real professional repository with unit and e2e test, CI, CD, and semantic release.

I try to use some common design patterns to resolve common problems like Chain of responsibility, facade, states, and I try to maintain and apply some SOLID concepts too.

## Stack
- Typescript
- React
- NextJS
- NodeJS

## How to use?
You can access the app [through this link](https://betrybe-technical-test.herokuapp.com/).


# Project Structure
- `cypress`: Cypress file and E2E tests
- `src`: Source code
  - `api`: API code
    - `btc`: Bitcoin handlers, services and validators
    - `errors`: Handler error response classes
    - `login`: Login handlers, services and validators
    - `utils`: Some utils code for api
  - `components`: React components
  - `pages`: NextJS pages and API
    - `api`: All api routes ( I use only to define which api handlers works on each route)
  - `styles`: All CSS code
  - `utils`: Some utils code to all app

## Test

### API unit test
All API functions are been testing using Jest.

### React Component test
All React Components are been testing using Cypress with `cypress-react-unit-test`. I choose that library because renders the components in a real browser, so is more reliable.

### E2E tests
All pages and the final app is been testing using Cypress.

## Continuos Integration
### Every Push
On every push the application is tested by Cypress, Jest and update the coverage to Codecov service.

### On Pull Request
On every PR the application is tested by ESLint.

### On Push Main
On every push to `main` branch GitHub action build and deploy the docs to GitHub pages of this repository. After that it uses semantic release to check all commits and create tag, releases and comments on GitHub .

## Deploy
I choose Heroku to deploy this application. I tried with Vercel and Netlify but the API didn't update the `currency.json` file because it was published to the AWS servers.
On the other side, Heroku maintains the file on the server, and then the API may update the file with success.
Heroku is configured to deploy automatically on every PR and on every push to main branch.

## Documentation
[All documentation is available through  this link](https://jonyw4.github.io/betrybe-technical-test/). Uses Typedoc to generate a page with all API based on Typescript `/src` folder.

## How to contribute
This repo is using VSCode dev container + Docker to create an dev environment, so its really easy to start developing. 

1. Clone this repo
2. [Open this repo as container on VScode](https://betrybe-technical-test.herokuapp.com/).

### Dev
Just run `yarn dev` and open `localhost:8008` on the browser to start using

### Test
To test locally you need to be running a dev on localhost using `yarn dev`. After that you can use `yarn test` or `yarn test:api` / `yarn test:e2e` 

### Lint
Use `yarn lint`

### Docs
Use `yarn docs`

### Build
Use `yarn docs`
