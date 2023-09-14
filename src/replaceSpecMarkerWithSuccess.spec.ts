import { replaceSpecMarkerWithSuccess } from './utils';

const expectedResponseOnMark = '[✅](#example#)';

describe('test #replaceSpecMarkerWithSuccess#', () => {
  it('should mark as success empty marker', () => {
    expect(replaceSpecMarkerWithSuccess('example', '[](#example#)')).toEqual(expectedResponseOnMark);
  });

  it('should mark with success error marker', () => {
    expect(replaceSpecMarkerWithSuccess('example', '[❌](#example#)')).toEqual(expectedResponseOnMark);
  });

  it('should continue checked success marker', () => {
    expect(replaceSpecMarkerWithSuccess('example', '[✅](#example#)')).toEqual(expectedResponseOnMark);
  });

  it('should mark inside marker', () => {
    expect(replaceSpecMarkerWithSuccess('example', '[](#example2#)\n\n[](#example#) [](#example3#)')).toEqual(
      '[](#example2#)\n\n[✅](#example#) [](#example3#)',
    );
  });

  it('should mains text, because not found marker inside marker', () => {
    expect(replaceSpecMarkerWithSuccess('example10', '[](#example20#)')).toEqual('[](#example20#)');
  });
});
