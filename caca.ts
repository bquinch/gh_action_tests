class Caca {
  private type: string;
  private color: string;

  public constructor(type: string, color: string) {
    this.type = type;
    this.color = color;
    this.init();
  }

  private init() {
    console.log(`I pooped a ${this.type} ${this.color} LOL`);
  }
}
