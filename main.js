class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
  }

  matches(arg) {
    let str = '';

    for (let key in this) {
      str += this[key];
    };
    
    return str.indexOf(arg) !== -1 ? true : false;
  }
}


let newAtricle = new Article('query Title', 'Gabe', 'Lorem Lorem Lorem LOrem Lorem Lorem Lorem');

console.log(newAtricle.matches('query'))