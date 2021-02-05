export class EatModel {
  constructor(id: number, name: string, icon: string, price: number) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.price = price;
  }

  id: number;
  name: string;
  icon: string;
  price: number;
}
