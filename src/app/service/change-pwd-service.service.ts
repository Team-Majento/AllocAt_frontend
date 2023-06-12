import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class ChangePwdServiceService {

  constructor() { }

  comparePasswords(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }
}
