/**
 * For more information about Unicode blocks, see
 * http://unicode-table.com/en/
 * https://github.com/vinta/pangu
 */

const visit = require('unist-util-visit');

const cjk_ranges = [
  '2e80-2eff', // CJK Radicals Supplement
  '2f00-2fdf', // Kangxi Radicals
  '3040-309f', // Hiragana
  '30a0-30ff', // Katakana
  '3100-312f', // Bopomofo
  '3200-32ff', // Enclosed CJK Letters and Months
  '3400-4dbf', // CJK Unified Ideographs Extension A
  '4e00-9fff', // CJK Unified Ideographs
  'f900-faff', // CJK Compatibility Ideographs
  '3000-303f', // https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation
  'FF00-FFEE', //  Halfwidth and Fullwidth Forms
];

const range = str => str.split('-').map(c => `\\u${c}`).join('-');

const CJK = cjk_ranges.map(range).join('');

const regex = new RegExp(`([${CJK}])\\n([${CJK}])`, 'gm');

function joinCKJLines(tree) {
  visit(tree, 'text', node => {
    if (node.type === 'text') {
      node.value = node.value.replace(regex, '$1$2');
    }
  })
}

module.exports = () => joinCKJLines
