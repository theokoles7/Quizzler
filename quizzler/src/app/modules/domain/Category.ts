export enum Categories {
  "Any", "General Knowledge", "Books", "Film", "Music",
  "Theater", "Television", "Video Games", "Board Games", "Science", "Computers",
  "Mathematics", "Mythology", "Sports", "Geography", "History", "Politics", "Art",
  "Celebrities", "Animals", "Vehicles", "Comics", "Anime/Manga", "Cartoons"
}

export function catToNum(cat: Categories): number {
  switch (cat) {
    case Categories["General Knowledge"]: return 9;
    case Categories.Books: return 10;
    case Categories.Film: return 11;
    case Categories.Music: return 12;
    case Categories.Theater: return 13;
    case Categories.Television: return 14;
    case Categories["Video Games"]: return 15;
    case Categories["Board Games"]: return 16;
    case Categories.Science: return 17;
    case Categories.Computers: return 18;
    case Categories.Mathematics: return 19;
    case Categories.Mythology: return 20;
    case Categories.Sports: return 21;
    case Categories.Geography: return 22;
    case Categories.History: return 23;
    case Categories.Politics: return 24;
    case Categories.Art: return 25;
    case Categories.Celebrities: return 26;
    case Categories.Animals: return 27;
    case Categories.Vehicles: return 28;
    case Categories.Comics: return 29;
    case Categories["Anime/Manga"]: return 31;
    case Categories.Cartoons: return 32;
    default: return 0;
  }
}

export function numToString(num: number): string{
  switch (Number(num)) {
    case 9: return "General Knowledge";
    case 10: return "Books";
    case 11: return "Film";
    case 12: return "Music";
    case 13: return "Theater";
    case 14: return "Television";
    case 15: return "Video Games";
    case 16: return "Board Games";
    case 17: return "Science";
    case 18: return "Computers";
    case 19: return "Mathematics";
    case 20: return "Mythology";
    case 21: return "Sports";
    case 22: return "Geography";
    case 23: return "History";
    case 24: return "Politics";
    case 25: return "Art";
    case 26: return "Celebrities";
    case 27: return "Animals";
    case 28: return "Vehicles";
    case 29: return "Comics";
    case 31: return "Anime/Manga";
    case 32: return "Cartoons";
    default: return "Any";
  }
}

export function numToCat(num: number): Categories {
  switch (num) {
    case 9: return Categories["General Knowledge"];
    case 10: return Categories.Books;
    case 11: return Categories.Film;
    case 12: return Categories.Music;
    case 13: return Categories.Theater;
    case 14: return Categories.Television;
    case 15: return Categories["Video Games"];
    case 16: return Categories["Board Games"];
    case 17: return Categories.Science;
    case 18: return Categories.Computers;
    case 19: return Categories.Mathematics;
    case 20: return Categories.Mythology;
    case 21: return Categories.Sports;
    case 22: return Categories.Geography;
    case 23: return Categories.History;
    case 24: return Categories.Politics;
    case 25: return Categories.Art;
    case 26: return Categories.Celebrities;
    case 27: return Categories.Animals;
    case 28: return Categories.Vehicles;
    case 29: return Categories.Comics;
    case 31: return Categories["Anime/Manga"];
    case 32: return Categories.Cartoons;
    default: return Categories.Any;
  }
}

export function shortCat(cat: string): string{
  switch(cat){
    case "Entertainment: Books": return "Books";
    case "Entertainment: Film": return "Film";
    case "Entertainment: Music": return "Music";
    case "Entertainment: Musicals & Theatres": return "Theater & Musicals";
    case "Entertainment: Television": return "Television";
    case "Entertainment: Video Games": return "Video Games";
    case "Entertainment: Board Games": return "Board Games";
    case "Science & Nature": return "Science";
    case "Science: Computers": return "Computers";
    case "Science: Mathematics": return "Mathematics";
    case "Entertainment: Comics": return "Comics";
    case "Entertainment: Japanese Anime & Manga": return "Anime/Manga";
    case "Entertainment: Cartoon & Animations": return "Cartoons";
    default: return cat;
  }
}