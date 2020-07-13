export interface IBgColor {
  transparent: string;
  white: string;
  black: string;
  gray: string;
  darkGray: string;
  red: string;
  lightRed: string;
}

export interface IFontColor {
  black: string;
  white: string;
  gray: string;
}

export interface IFontFamilies {
  proximaNova: string;
  sanFrancisco: string;
}

export interface IFontSizes {
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

export interface IFontWeight {
  thin: number;
  light: number;
  base: number;
  medium: number;
  bold: number;
}

export interface ITheme {
  bgColor: IBgColor;
  fontColor: IFontColor;
  fontFamily: IFontFamilies;
  fontSizes: IFontSizes;
  fontWeight: IFontWeight;
}

export interface IProps {
  theme: ITheme;
}
