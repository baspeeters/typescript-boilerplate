# TypeScript Boilerplate

A template to quickly get started with a TypeScript project.

[![Build Status](https://travis-ci.org/baspeeters/typescript-boilerplate.svg?branch=master)](https://travis-ci.org/baspeeters/typescript-boilerplate)  [![codecov](https://codecov.io/gh/baspeeters/typescript-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/baspeeters/typescript-boilerplate)

# Usage

1. Clone this repository

```shell
git@github.com:baspeeters/typescript-boilerplate.git [repo-name]
```

2. Remove the `.git` directory

```shell
rm -Rf .git
```

3. Replace project title and repo name strings

```shell
sed -i 's/TypeScript Boilerplate/[project-name]/g' **/*.*
sed -i 's/typescript-boilerplate/[repo-name]/g' **/*.*
```

4. Update `README.md` contents

5. Make initial commit

```shell
git init
git add -A
git commit -m "Initial commit"
```

5. Add remote repository

``shell
git remote add origin [repo-url]
git push -u origin master
```

# Testing

Run tests:
```
npm test
```

Run tests with coverage:
```
npm run test:coverage
```

Lint:
```
npm run lint
```
