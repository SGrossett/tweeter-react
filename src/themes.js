import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#fff',
  text: '#000',
  navImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
  navBg: 'rgb(46, 155, 223, 0.98)',
  header: '#2e9bdf',
  textarea: '#000',
  articleBdr: '3px solid #000',
  articleBS: '0px 6px 10px rgb(0 0 0 / 50%)',
  articleHover: '13px 13px #cfdae2',
  icon: '#fff',
  iconToggle: '#000',
  iconBorder: 'none',
  darkModeBorder: 'none',
  dmRadius: '50%',
  dots: '#000',
  option: '#f00',
  optionExtra: 'transparent'
}

export const darkTheme = {
  body: '#000',
  text: '#fff',
  navImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
  navBg: '#000',
  header: '#000',
  textarea: '#545149',
  articleBdr: '3px solid #657786',
  articleBS: '0px 6px 10px',
  articleHover: '13px 13px 21px rgb(46 155 223)',
  icon: '#000',
  iconToggle: 'rgb(239, 239, 239)',
  iconBorder: '1px solid #fff',
  dmBorder: '1px solid #fff',
  dmRadius: '50%',
  dots: '#fff !important',
  option: '#113a54 !important',
  optionExtra: '#113a54'
}

export const GlobalStyles = createGlobalStyle `
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  nav {
    background-image: ${({ theme }) => theme.navImage};
    background-color: ${({ theme }) => theme.navBg};
  }
  header.header {
    background-color: ${({ theme }) => theme.header};
  }
  textarea {
    border-color: ${({ theme }) => theme.textarea};
  }
  article {
    border: ${({ theme }) => theme.articleBorder};
    box-shadow: ${({ theme }) => theme.articleBS};
  }
  article:hover {
    box-shadow: ${({ theme }) => theme.articleHover};
  }
  .icon {
    background-color: ${({ theme }) => theme.icon};
    padding: 0.5em;
  }
  .icon.btn-toggle {
    border: ${({ theme }) => theme.iconBorder};
  }
  .btn-toggle > i {
    color: ${({ theme }) => theme.iconToggle};
  }
  .darkMode {
    border: ${({ theme }) => theme.dmBorder};
    border: ${({ theme }) => theme.dmRadius};
  }
  .css-f6nuwn {
    background-color: ${({ theme }) => theme.option}
  }
  .css-1hqmh00::before, .css-1hqmh00::after {
    background-color: ${({ theme }) => theme.optionExtra}
  }
  .css-7no60z-ButtonBase {
    color: ${({ theme }) => theme.dots}
  }
`