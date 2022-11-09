import { Component, Injector, OnInit } from '@angular/core';
import { AppInjector } from './app-injector.service';
import { BaseService } from './base.service';
import { UserModel, ValidatorsModel } from './models/user.model';
import { LoggerService } from './logger.service';

@Component({
  template: ''
})

export class BaseComponent {

  protected baseService: BaseService
  protected logger: LoggerService;
  public readonly current_user: UserModel
  public form_validators: ValidatorsModel = new ValidatorsModel;

  constructor() {
    this.baseService = AppInjector.getInjector().get(BaseService)
    this.logger = AppInjector.getInjector().get(LoggerService)
    this.current_user = this.baseService.current_user
  }

  ngOnInit(): void {
  }

}
