# remark-join-cjk-lines

![Node.js CI](https://github.com/purefun/remark-join-cjk-lines/workflows/Node.js%20CI/badge.svg)
![Node.js Package](https://github.com/purefun/remark-join-cjk-lines/workflows/Node.js%20Package/badge.svg)

  `remark-join-cjk-lines` is a [remark](https://github.com/remarkjs/remark) plugin
  to remove extra space between [CJK Characters](https://en.wikipedia.org/wiki/CJK_characters).

## Installation

  ```shell
  npm install remark-join-cjk-lines
  # or
  yarn add remark-join-cjk-lines
  ```

## Usage

### With Remark directly

  ```js
  const remark = require('remark');
  const joinCJKLines = require('remark-join-cjk-lines');
  remark()
    .use(joinCJKLines)
    .processSync(/*...*/);
  ```

### With Gatsby

  With `gatsby-transformer-remark`:
  
  ```js
  // gatsby-config.js
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [require('remark-join-cjk-lines')],
      },
    },
  ],
  ```

  With `gatsby-plugin-mdx`:
  ```js
  // gatsby-config.js
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.md', '.mdx'],
          remarkPlugins: [require('remark-join-cjk-lines')],
          gatsbyRemarkPlugins: [],
       },
    },
  ],
  ```

### With Docusaurus v2

  ```js
  // docusaurus.config.js
  module.exports = {
    // ...
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            remarkPlugins: [require('remark-join-cjk-lines')],
          },
        },
      ],
    ],
  };
  ```

## License

[MIT licensed](./LICENSE)
