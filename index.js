const visit = require('unist-util-visit');

const regex = new RegExp(/([\u4E00-\u9FFC])\n([\u4E00-\u9FFC])/, 'gm');

function joinCKJLines(tree) {
  visit(tree, 'text', node => {
    if (node.type === 'text') {
      node.value = node.value.replace(regex, '$1$2');
    }
  })
}

module.exports = () => joinCKJLines
