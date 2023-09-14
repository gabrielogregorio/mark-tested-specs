import { fileContainsMarker } from './utils';

describe('test #fileContainsMarker#', () => {
  it('should returns with contains maker with test key', () => {
    expect(fileContainsMarker('example', 'this is a example with contains marker test #example#')).toEqual(true);
  });

  it('should returns with contains maker with test key and not exists spaces', () => {
    expect(fileContainsMarker('example', 'this is a example with contains marker test#example#')).toEqual(true);
  });

  it('should returns with contains maker with test key and many spaces', () => {
    expect(fileContainsMarker('example', 'this is a example with contains marker test   #example#')).toEqual(true);
  });

  it('should returns not contains maker, because maker is not completed', () => {
    expect(fileContainsMarker('example', 'this is a example with contains marker test #example')).toEqual(false);
  });
});
