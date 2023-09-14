import { overwriteFile, readDirectoryRecursivelyAndExtractText, readFileSync } from './utilFiles';
import { fileContainsMarker, replaceSpecMarkerWithSuccess, searchForMarks } from './utils';

export const processFile = (filePathDir: string, pathFileSpecs: string) => {
  const textFiles = readDirectoryRecursivelyAndExtractText(filePathDir);
  const textSpecFile = readFileSync(pathFileSpecs);
  const marksInSpecFile = searchForMarks(textSpecFile);

  let newTextSpecFile = textSpecFile;

  textFiles.forEach((textFile) => {
    marksInSpecFile.forEach((marker) => {
      if (fileContainsMarker(marker, textFile)) {
        newTextSpecFile = replaceSpecMarkerWithSuccess(marker, newTextSpecFile);
      }
    });
  });

  overwriteFile(pathFileSpecs, newTextSpecFile);
};
