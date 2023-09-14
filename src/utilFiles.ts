import pathNode from 'path';
import fsNode from 'fs';

export const overwriteFile = (filePath: string, body: string) => fsNode.writeFileSync(filePath, body, 'utf8');

export const readFileSync = (filePath: string): string => fsNode.readFileSync(filePath, 'utf-8');

export const readDirectoryRecursivelyAndExtractText = (dir: string, filesList: string[] = []) => {
  const files = fsNode.readdirSync(dir);

  files.forEach((file) => {
    const filePath = pathNode.join(dir, file);

    if (fsNode.statSync(filePath).isDirectory()) {
      if (file !== 'build' && file !== 'node_modules') {
        readDirectoryRecursivelyAndExtractText(filePath, filesList);
      }
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      filesList.push(readFileSync(filePath));
    }
  });

  return filesList;
};
