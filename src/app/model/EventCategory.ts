export class EventCategory{
  private _id: number;
  private _name: string;
  
  constructor() {
    this._id = 0;
    this._name = "";
  }

  public get id() {
    return this._id;
  }
  public get name() {
    return this._name;
  }
}