export interface IDatabase {
  get(key: string): Promise<string | undefined>;
  put(key: string, value: string): Promise<void>;
  select(regExp: RegExp): Promise<string[]>;
}

export class Database implements IDatabase {
  private storage = new Map<string, string>();

  async get(key: string): Promise<string | undefined> {
    await this.waitTime(100);
    return this.storage.get(key);
  }

  async put(key: string, value: string) {
    await this.waitTime(100);
    this.storage.set(key, value);
  }

  async select(regExp: RegExp): Promise<string[]> {
    await this.waitTime(100);
    return Object.keys(this.storage).filter((key) => {
      return regExp.test(key);
    });
  }

  private waitTime(time: number): Promise<void> {
    return new Promise<void>((resolve: () => void) => {
      setTimeout(resolve, time);
    });
  }
}

export class Calendar {

  constructor(private db: IDatabase) {}

  async add({
    date,
    subject,
  }: {
    date: Date,
    subject: string,
  }) {
    await this.db.put(
      this.getKey(date),
      subject,
    );
  }

  async listup({
    condition = new RegExp('.*')
  }: {
    condition: RegExp,
  }) {
    return await this.db.select(condition);
  }

  async get({
    key,
  }: {
    key: string,
  }) {
    return await this.db.get(key);
  }

  private getKey(date: Date): string {
    const YYYY = date.getFullYear().toString();
    const MM = (date.getMonth() + 1).toString().padStart(2, '0');
    const DD = date.getDate().toString().padStart(2, '0');
    return `${YYYY}${MM}${DD}`;
  }
}