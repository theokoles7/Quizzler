export enum Themes{
  Teal, Magenta, Tomato, Coffee, Brick, None
}

export function parseTheme(themeString: string): Themes{
  switch(themeString){
    case "teal": return Themes.Teal;
    case "magenta": return Themes.Magenta;
    case "tomato": return Themes.Tomato;
    case "coffee": return Themes.Coffee;
    case "brick": return Themes.Brick;
    default: return Themes.None;
  }
}

export function themeToString(theme: Themes): String{
  switch(theme){
    case Themes.Teal: return "teal";
    case Themes.Magenta: return "magenta";
    case Themes.Tomato: return "tomato";
    case Themes.Coffee: return "coffee";
    case Themes.Brick: return "brick";
    default: return "";
  }
}