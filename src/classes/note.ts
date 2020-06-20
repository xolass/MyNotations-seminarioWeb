export class Note {
  constructor(
    private _id,
    private _title,
    private _content,
    private _preview,
    private _isFavorite
  ) {
    this._id = Math.random();
  }


  set title(newTitle) {
    this._title = newTitle;
  }
  set content(newContent: string) {
    if (newContent.length > 35) {
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