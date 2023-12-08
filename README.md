# next-kata-docs

> Documentation website for Kata Products

Welcome to the GitHub project for [Kata](https://kata.ai) Documentations (Kata Docs 2.0) using [Next.js](https://nextjs.org/).
We've built this site from the ground-up with performance, accessibility, and fanciness in mind.
It contains documentation from all across the Kata Products:

-   [Kata Platform](https://docs.kata.ai/kata-platform)
-   [Kata CLI](https://github.com/kata-ai/kata-cli)
-   [Kata Omnichat](https://docs.kata.ai/kata-omnichat)
-   [Business Dashboard](https://docs.kata.ai/business-dashboard)
-   [Qios](https://docs.kata.ai/qios)

Mainly, you can access the documentation website at https://docs.kata.ai

---

## How to run

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (8.0.0+)
-   [Yarn](https://yarnpkg.com) (Optional. You can still use `npm` if you want)

### Initial setup

Clone this repository.

```
git clone `link here`
```

`cd` to the generated project. Here we'll have to install our node dependencies. To do so, run (one of) the following command(s).

```bash
# npm
npm install
# yarn
yarn
```

### Running the server

To start working on this documentation, you need to start a development server.

```bash
# npm
npm run dev
# yarn
yarn dev
```

### Commit message guidelines

We use [Commitizen](https://github.com/commitizen/cz-cli) with the [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) standard. We included the Commitizen CLI inside the repository so that you can generate a formatted commit message simply by typing `yarn commit` (or `npm commit`).

#### Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The first line must contain a commit type, an _optional_ scope, and the subject of the commit.

The message body contains a longer description of the change. This is reserved for any information that won't fit inside the subject line of a commit message. Note that each line of the commit message should not be longer than 72 characters.

Footer is optional, and contains any additional information for the commit (e.g. issues fixed, breaking changes).

#### Commit types

We use the following conventional-changelog commit types:

```
feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf:     A code change that improves performance
test:     Adding missing tests or correcting existing tests
build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci:       Changes to our CI configuration files and scripts (example scopes: travis, circle)
chore:    Other changes that don't modify src or test files
revert:   Reverts a previous commit
```

---

### Helper Scripts

Helper scripts are scripts collection that helps in kata docs development. All of them are included in the `scripts` folder. You could contact the creator of the scripts if you need more explanation. There are three scripts in the folder.

1. Steven Evan - `addDimensionImage.js`

    This script helps to add property `naturalHeight` and `naturalWidth` on Image component in `.mdx` files. You ask why we manually add the dimension into the component. The answer is that we use `next/image` for the image component that contains the lazy load feature to improve performance significantly. In the next documentation, we must define the dimension in the `next/image` component or the container (if using the `fill` layout). Additional note:

    - One of the authors, Steven Evan, had tried to create a solution for not defining `naturalWidth` and `naturalHeight` using the `onLoadingComplete` function on `next/image`. But, a major bug showed up that made the author makes this script. That bug was a navigation scrolling bug. When the user clicks the accordion item on the navigation sidebar, the page will scroll into the wrong position. That could happen because the image will have zero height and zero-width initially before we define the image using the `onLoadingComplete` function.

2. Steven Evan - `linkingToc.js`

    This script will generate a `JSON` file that defines the relationship of each markdown or MDX (next and previous docs). You can see the outputs in this [link](./docs/linking-toc). This approach improves the performance of the previous one for the markdown relationship issue that used BFS or DFS search.

3. Steven Evan - `sanitize.js`

    This script is related to JSON outputs from the `markdown2json` library. These outputs will be used in the searching feature using [Fusejs](https://fusejs.io/). `markdown2json` will get the content and all the frontmatter based on the settings of each kata product setting in the `markdown-to-json/settings` folder. Besides the settings folder, there is the output folder. This folder contains each output in the `markdown-to-json/outputs` folder (that will be sanitized by this script later).

    Using this script, you will get additional properties in the json output. Those properties will help for showing the data in the search result.

## Authors

-   Izzan Nuruddin ([@IzzanNurdin](https://github.com/IzzanNurdin)) – [Kata.ai](https://kata.ai)
-   Steven Evan ([@stevenevan](https://github.com/stevenevan)) - [Kata.ai](https://kata.ai)
-   Mirza Zanuar ([@zanuarmirza](https://github.com/zanuarmirza)) - [Kata.ai](https://kata.ai)
