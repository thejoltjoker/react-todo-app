const getRandomId = () => {
  return Math.random().toString(36).slice(2, 8);
};

export class Task {
  readonly id: string = getRandomId();

  constructor(
    public name: string,
    public description: string = "",
    public priority: number = 0,
    public isDone: boolean = false,
    public dateAdded: string = new Date().toJSON(),
  ) {}
}
