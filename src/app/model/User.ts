import { Role } from './Role';
import { Event } from './Event'; 

export class User {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _password: string;
  private _roles: Role[];
  private _registeredEvents: Event[];

  constructor() {
    this._id = 0;
    this._firstName = "";
    this._lastName = "";
    this._email = "";
    this._password = "";
    this._roles = [];
    this._registeredEvents = [];
  }

  public get id() {
    return this._id;
  }

  public get firstName() {
    return this._firstName;
  }
  public get lastName() {
    return this._lastName;
  }
  public get email() {
    return this._email;
  }
  public get password() {
    return this._password;
  }
  public get roles() {
    return this._roles;
  }
  public get registeredEvents() {
    return this._registeredEvents;
  }

}