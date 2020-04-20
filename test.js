const remark = require('remark');
const joinCJKLines = require('.');

describe('remark-join-cjk-lines', () => {
  const processor = remark().use(joinCJKLines);

  it('without joining', () => {
    const input = ['汉字换', '行'].join('\n');
    const output = remark().processSync(input).toString().trim();
    expect(output).toBe(input);
  });

  it('should join lines', () => {
    const input = ['汉字换', '行'].join('\n');
    const output = processor.processSync(input).toString().trim();
    expect(output).toBe('汉字换行');
  })
});

