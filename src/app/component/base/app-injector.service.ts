import { Injector } from '@angular/core';
import { BaseService } from './base.service';
import { LoggerService } from './logger.service';

export class AppInjector {

    private static injector: Injector;
    static setInjector() {
    }

    static getInjector(): Injector {
        let injector = Injector.create([
            { provide: BaseService, deps: [] },
            { provide: LoggerService, deps: [] }

        ]);
        AppInjector.injector = injector;
        return AppInjector.injector;
    }

}    
