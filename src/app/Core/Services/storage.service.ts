import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this._storage = await this.storage.create();
    console.log(this._storage);
  }

  public async set(key: string, value: any): Promise<any> {
    // @ts-ignore
    this.storage = await this.init();
    await this.storage.set(key, value);

  }
  public async get(key: string): Promise<any> {
    // @ts-ignore
    const name = await storage.get('name');

    return await this.storage.get(key);
  }
}
