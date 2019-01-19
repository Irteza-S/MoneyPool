export class MoneyPoolService {
  moneyPoolList = [
    {
    id: 1,
    ownerId: 1,
    status: 'allumé'
    }
  ];

  addMoneyPool(ownerId: number, title: string, aimedAmount: number, description: string) {
    const moneyPoolObject = {
      id: 0,
      ownerId: 0,
      title: '',
      description: '',
      aimedAmount: 0
    };
    moneyPoolObject.ownerId = ownerId;
    moneyPoolObject.title = title;
    // @ts-ignore
    moneyPoolObject.id = this.moneyPoolList[(this.moneyPoolList.length - 1)].id + 1 ;
    moneyPoolObject.aimedAmount = aimedAmount;
    moneyPoolObject.description = description;

    // @ts-ignore
    this.moneyPoolList.push(moneyPoolObject);
  }

}
