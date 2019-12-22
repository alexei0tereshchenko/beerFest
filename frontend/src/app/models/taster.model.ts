import {Group} from "./group.model";

export class Taster {
  idTasters: number;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
  birthDate: Date;
  groupByIdGroup: Group;

  constructor(firstName: string, lastName: string, fullName: string, phoneNumber: string, birthDate: Date, groupByIdGroup: Group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
    this.groupByIdGroup = groupByIdGroup;
  }
}
