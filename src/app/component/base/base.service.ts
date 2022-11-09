import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserModel, ValidatorsModel } from './models/user.model';
import { FakeDb } from './base.service.fake';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppInjector } from './app-injector.service';
@Injectable({
  providedIn: 'root'
})

export class BaseService {

  genericError = "Some error occured ";
  protected loggerSevice: LoggerService
  private userDb: FakeDb;
  private email:string="";
  private pswd:string="";
  public requestOptions = {}
  public current_user: UserModel = new UserModel()
  public form_validators: ValidatorsModel = new ValidatorsModel()

  constructor(private http: HttpClient) {
    this.loggerSevice = AppInjector.getInjector().get(LoggerService)
    this.userDb = new FakeDb()

    let headers = new HttpHeaders();
    let authHeaders = headers.set('Authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTgwMDU0NjYsInN1YiI6Ijk1MWYzNzZhLTMwNTYtNGU3My1hZjExLTA1YWM2NWI1NmNjZCJ9.LiNh0H2B6ysnTDVjW4lcUNCbX5rD0HIs1oNmDEXu1K4");
    this.requestOptions = {
      headers: authHeaders
    }
    this.current_user = this.userDb.get_current_user(this.email, this.pswd)
  }

  get<T>(url: string): Promise<T> {
    {
      let response = this.http
        .get<T>(url).toPromise();
      return response
    }
  }
  post<T>(url: string, body: object): Promise<T> {
    let response = this.http
      .post<T>(url, body, this.requestOptions).toPromise();
    return response;
  }
  put<T>(url: string, body: object): Promise<T> {
    let response = this.http
      .put<T>(url, body, this.requestOptions).toPromise();
    return response;
  }
  delete<T>(url: string): Promise<T> {

    let response = this.http
      .delete<T>(url, this.requestOptions).toPromise();
    return response
  }
}

