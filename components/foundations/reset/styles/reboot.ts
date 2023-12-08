import { theme } from '@aksara-ui/react';
import { css } from 'styled-components';

const reboot = css`
  /*!
   * Bootstrap Reboot v4.1.2 (https://getbootstrap.com/)
   * Copyright 2011-2018 The Bootstrap Authors
   * Copyright 2011-2018 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
   */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ${css`
    @-ms-viewport {
      width: device-width;
    }
  `}

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif !important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0e0e2c;
    text-align: left;
    background-color: ${theme.colors.greylight02};
  }

  [tabindex='-1']:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h1,
  h2,
  h3 {
    color: ${theme.colors.greydark05};
  }

  h4,
  h5,
  h6 {
    color: #404145;
  }

  article section h1::before,
  article section h2::before,
  article section h3::before,
  article section h4::before,
  article section h5::before,
  article section h6::before {
    display: block;
    content: ' ';
    visibility: hidden;
    pointer-events: none;
    height: 64px;
    margin-top: -64px;
  }

  p,
  ol,
  ul,
  li {
    font-family: 'Inter', sans-serif !important;
    color: #0e0e2c;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-family: 'Inter-bold';
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  section a {
    color: ${theme.colors.blue07};
    text-decoration: underline;
    background-color: transparent;
    overflow-wrap: anywhere;
    -webkit-text-decoration-skip: objects;
  }

  section a:hover {
    color: ${theme.colors.blue08};
    text-decoration: underline;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: Roboto Mono !important;
    font-size: 1em;
    font-weight: 500;
    background: ${theme.colors.greylight03};
    color: ${theme.colors.greydark02};
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    border-radius: 8px;
    padding: 12px;
    color: ${theme.colors.grey08};
    background: ${theme.colors.greylight03};
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }

  figure {
    margin: 0 0 1rem;
  }

  section img {
    margin: 24px auto;
    border: 1px solid ${theme.colors.greylight04};
    max-height: 65vh;
  }

  section img.borderless {
    border: none;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='radio'],
  input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  .info {
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
    padding: 14px 16px;
    border-left: 1px solid ${theme.colors.blue07};
    background-color: ${theme.colors.blue01};

    img {
      margin-left: 18px;
      margin-right: 13px;
    }
    p {
      margin-top: auto;
      margin-left: 12px;
      overflow: auto;
    }
    a {
      color: ${theme.colors.blue07};
    }
  }
`;

export default reboot;
