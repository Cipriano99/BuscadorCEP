import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --primary-color: #2b52db;
  --secondary-color: #FFF;
  --background-color: #F0F5FD;
  --placeholder-color: #F0F5FDDD;
  --text-color: #1C2130;
  --field-color: #32A0DF
}

html{
  background-color: var(--background-color);
  color: var(--text-color);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

a{
  color: var(--primary-color);
  &:visited{
    color: var(--primary-color);

  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
