export default Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constuctor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  get sqft() {
    return this._sqft;
  }

  set sqrt(sq) {
}


  }
