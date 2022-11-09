import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AppInjector } from './app-injector.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
 
  constructor()
  {
    
  }

  log(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
  info(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
  debug(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
  error(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
  warn(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
}
