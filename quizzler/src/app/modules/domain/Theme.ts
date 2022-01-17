export enum Themes{
  Light, Dark, None
}
export function parseTheme(themeString: string): Themes{
  switch(themeString){
    case "light": return Themes.Light;
    case "dark": return Themes.Dark;
    default: return Themes.None;
  }
}

export function themeToString(theme: Themes): string{
  switch(theme){
    case Themes.Light: return "light";
    case Themes.Dark: return "dark";
    default: return "none";
  }
}