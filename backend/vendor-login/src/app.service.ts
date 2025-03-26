import { Injectable } from '@nestjs/common';
import {medoDb, usersTable} from '@medo-com/database/dist/src/main'
@Injectable()
export class AppService {
  async getHello() {
    const users = await medoDb.db.select().from(usersTable);
    return users
  }
}
