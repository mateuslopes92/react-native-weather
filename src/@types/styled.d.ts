// styled.d.ts
import 'styled-components';
import {tokens} from '../tokens';

declare module 'styled-components' {
  type ThemeType = typeof tokens

  export interface DefaultTheme extends ThemeType {}
}