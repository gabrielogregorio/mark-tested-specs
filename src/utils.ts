const NAME_MARKER_POSITION = 2;

export const searchForMarks = (originalItem: string): string[] => {
  // eslint-disable-next-line prefer-regex-literals
  const regex = new RegExp('\\[(❌|✅|)\\]\\(#([\\w\\d\\-_]{1,})#\\)', 'g');
  let items;
  const matches: string[] = [];

  // eslint-disable-next-line no-cond-assign
  while ((items = regex.exec(originalItem)) !== null) {
    const group = items[NAME_MARKER_POSITION];
    if (!matches.includes(group)) {
      matches.push(group);
    }
  }

  return matches;
};

export const fileContainsMarker = (marker: string, fileString: string): boolean =>
  !!new RegExp(`test\\s*#${marker}#`).test(fileString);

export const replaceSpecMarkerWithSuccess = (marker: string, originalItem: string): string =>
  originalItem.replace(new RegExp(`\\[(❌|✅|)\\]\\(#${marker}#\\)`, 'g'), `[✅](#${marker}#)`);
