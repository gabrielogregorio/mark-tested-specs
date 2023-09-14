import { searchForMarks } from './utils';

describe('test #searchForMarks#', () => {
  it('should find markers', () => {
    expect(
      searchForMarks(
        'I am not marker, but I is #marker# and he is [](#marker2#) and [✅](#marker3#) and \n\n\r [❌](#marker4#) ',
      ),
    ).toStrictEqual(['marker2', 'marker3', 'marker4']);
  });

  it('should not find markers', () => {
    expect(searchForMarks('I am not marker')).toStrictEqual([]);
  });
});
