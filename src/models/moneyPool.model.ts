import {User} from './user.model';

export class MoneyPool {
  constructor(public ownerId: number, public title: string, public aimedAmount: number,
              public description: string, public contributor?: User[], public currentAmount?: number, public id?: number) {

  }

}
