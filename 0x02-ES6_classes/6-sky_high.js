import Building from './5-building'

export default SkyHighBuilding extend Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }


 evacuationWarningMessage () {
}
}