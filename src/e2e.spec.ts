import { execSync } from 'child_process';
import { overwriteFile, readFileSync } from './utilFiles';

const originalTextFile = `### Var

'Var' is test

| Nome     | Tipo                  |                |
| -------- | --------------------- | -------------- |
| text     | String                | [❌](#var#)    |
| location | [Location](#location) | [❌](#var#)    |
| location | [Location](#location) | [❌](#item-2#) |
`;

const expectedTextFile = `### Var

'Var' is test

| Nome     | Tipo                  |                |
| -------- | --------------------- | -------------- |
| text     | String                | [✅](#var#)    |
| location | [Location](#location) | [✅](#var#)    |
| location | [Location](#location) | [❌](#item-2#) |
`;

const folderExampleMd = './src/example.md';
describe('E2E', () => {
  it('should run app', () => {
    execSync('npm run build');

    overwriteFile(folderExampleMd, originalTextFile);

    const filePathDir = './src/example';
    const pathFileSpecs = './src/example.md';

    execSync(`node ./dist/index.js -d ${filePathDir} -s ${pathFileSpecs}`).toString();

    const content = readFileSync(folderExampleMd);
    expect(content).toEqual(expectedTextFile);
  });
});
