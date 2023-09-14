import { overwriteFile, readDirectoryRecursivelyAndExtractText, readFileSync } from './utilFiles';
import { fileContainsMarker, replaceSpecMarkerWithError, replaceSpecMarkerWithSuccess, searchForMarks } from './utils';

const resetAllMarkers = (marksInSpecFile: string[], textSpecFile: string): string => {
  let newTextSpecFile = textSpecFile;

  marksInSpecFile.forEach((marker) => {
    newTextSpecFile = replaceSpecMarkerWithError(marker, newTextSpecFile);
  });

  return newTextSpecFile;
};

export const processFile = (filePathDir: string, pathFileSpecs: string) => {
  const textFiles = readDirectoryRecursivelyAndExtractText(filePathDir);
  const textSpecFile = readFileSync(pathFileSpecs);
  const marksInSpecFile = searchForMarks(textSpecFile);

  let newTextSpecFile = resetAllMarkers(marksInSpecFile, textSpecFile);

  textFiles.forEach((textFile) => {
    marksInSpecFile.forEach((marker) => {
      if (fileContainsMarker(marker, textFile)) {
        newTextSpecFile = replaceSpecMarkerWithSuccess(marker, newTextSpecFile);
      }
    });
  });

  overwriteFile(pathFileSpecs, newTextSpecFile);
};
