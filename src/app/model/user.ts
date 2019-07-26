export class User {
  public initiative = 0;
  constructor(public name) {
  }

  public actOnTick(currentTick) {
    const actOn = 10 - Math.min(this.initiative, 9);
    return currentTick % actOn === 0 ? 'x' : '';
  }
}
