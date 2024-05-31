# playwright

## Instructions to run Playwright tests

Beginning in the directory `playwright`:

Install dependencies:

```
npm ci
```

Run all tests on staging server/production server (see `package.json` scripts):

```
 npm run pw:staging
 npm run pw:production

```

Run this command if you need to see html reports

```
 npx playwright show-report
```

To run a single test file, pass in the name of the test file that you want to run.

```
npx playwright test landing-page.spec.ts
```

To run a Reports if all tests pass run.

```
npx playwright show-report
```

For more information https://playwright.dev/
