<div align="center">

# mark-tested-specs - EXPERIMENTAL

![NPM package](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

</div>

## Getting Started

This CLI library helps you mark the specifications that were tested in a markdown file.

## How to Use

1. First, you need to install mark-tested-specs as a development or global dependency. You can do this using your preferred package manager:

```bash
npm install --global mark-tested-specs
```

```bash
npm install mark-tested-specs --save-dev
```

```bash
yarn add -D mark-tested-specs
```

```bash
pnpm install mark-tested-specs --save-dev
```

2. Then create a script in your package.json

```json
{
  "scripts": {
    "update:marks": "mark-tested-specs -d ./src/ -s ./src/example.md "
  }
}
```

3. About parameters

- **-d ** (required) The path where you will indicate that a specification was tested, it can be in a comment in your typings or in your specs
- **-s** (required) This is your file that contains your specifications, this file will be updated as you complete the specifications

4. For this to work, your spec file will have to have a syntax similar to this `[](#any-mark-name#)`, example:

```md
###Var

'Var' is test

update me [](#any-mark-name#)

| Name     | Type                  |                         |
| -------- | --------------------- | ----------------------- |
| text     | String                | [](#any-mark-name#)     |
| location | [Location](#location) | [✅](#any-mark-name#)   |
| location | [Location](#location) | [❌](#any-mark-name#)   |
| location | [Location](#location) | [❌](#any-mark-name-2#) |
```

And to make a mark updated, simply write `test #any-mark-name#` in one of your files specified with `-d`, example

```ts
it('should test #any-mark-name#', () => {
  // blah blah blah
});
```

5. You can use this however you want, but by giving a suggestion, you can integrate this at the end of your tests

```json
{
  "scripts": {
    "jest": "jest && npm run update:marks",
    "update:marks": "mark-tested-specs -d ./src/ -s ./src/example.md "
  }
}
```

## Contributing to the project

Would you like to contribute to the project? Excellent! In our [contributing.md](CONTRIBUTING.md) guide, you'll find information on how to create a Pull Request, code standards we follow, and how to report bugs. Your contribution is valuable and will help improve the tool for everyone.

I hope these explanations and examples are clear and useful!

# Known issues

To report issues, if possible, please provide a snippet or link to the code on GitHub where the issue can be replicated. You can report [issues here](https://github.com/gabrielogregorio/mark-tested-specs/issues/new).

You can make [suggestions here](https://github.com/gabrielogregorio/mark-tested-specs/discussions)

## Next steps

...
