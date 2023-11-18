import { EventCategory } from './EventCategory';
import { User } from './User';
export class Event {
  private _id: number;
  private _name: string;
  private _category: EventCategory[];
  private _location: string;
  private _start: Date;
  private _end: Date;
  private _adultCost: number;
  private _childCost: number;
  private _image: string;
  private _canRegister: boolean;
  private _maxCapacity: number;
  private _currentPeople: number;
  private _attendees: User[];

  constructor() {
    this._adultCost = 0;
    this._attendees = [];
    this._canRegister = false;
    this._category = [];
    this._id = 0;
    this._name = "";
    this._location = "";
    this._start = new Date();
    this._end = new Date();
    this._childCost = 0;
    this._image = "";
    this._maxCapacity = 0;
    this._currentPeople = 0;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }
  public get category() {
    return this._category;
  }
  public get location() {
    return this._location;
  }

  public get start() {
    return this._start;
  }
  public get end() {
    return this._end;
  }
  public get childCost() {
    return this._childCost;
  }
  public get adultCost() {
    return this._adultCost;
  }
  public get image() {
    return this._image;
  }
  public get canRegister() {
    return this._canRegister;
  }
  public get maxCapacity() {
    return this._maxCapacity;
  }
  public get currentPeople() {
    return this._currentPeople;
  }
  public get attendees() {
    return this._attendees;
  }
}