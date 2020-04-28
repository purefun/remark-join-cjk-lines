const remark = require('remark');
const joinCJKLines = require('.');

describe('remark-join-cjk-lines', () => {
  const processor = remark().use(joinCJKLines);
  const process = input => processor.processSync(input).toString().trim();

  it('without joining', () => {
    const input = ['汉字换', '行'].join('\n');
    const output = remark().processSync(input).toString().trim();
    expect(output).toBe(input);
  });

  it('should join lines', () => {
    const input = ['汉字换', '行'].join('\n');
    const output = process(input);
    expect(output).toBe('汉字换行');
  });

  it('should join lines if some lines begin with spaces', () => {
    const input = ['汉字换', '   行'].join('\n');
    const output = process(input);
    expect(output).toBe('汉字换行');
  })


  it('should remove space between some punctuation', () => {
    const input = ['汉字换，', '行'].join('\n');
    const output = process(input)
    expect(output).toBe('汉字换，行');
  });

  it('should keep the space between non-cjk charactors', () => {
    const input = ['non-cjk', '行'].join('\n');
    const output = process(input);
    expect(output).toBe('non-cjk\n行');
  });
});

