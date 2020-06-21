export class Note {
  _id;
  _preview;
  _title;
  _content;
  _isFavorite;

  constructor(title, content, isFavorite) {
    this._id = Math.random();
    this._title = title;
    this._isFavorite = isFavorite;
    this.setContent(content);
  }


  set title(newTitle) {
    this._title = newTitle;
  }

  setContent(newContent: string) {
    if (newContent.length > 35) {
      this._preview = `${newContent.slice(0, 35)}...`;
    } else {
      this._preview = newContent;
    }
    this._content = newContent;
  }

  set isFavorite(newIsFavorite) {
    this._isFavorite = newIsFavorite;
  }


  get id() {
    return this._id;
  }

  get preview() {
    return this._preview;
  }

  get title() {
    return this._title;
  }
  get content() {
    return this._content;
  }
  get isFavorite() {
    return this._isFavorite;
  }
};