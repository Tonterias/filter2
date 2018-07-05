import { NgModule } from '@angular/core';

import { Filter1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Filter1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Filter1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Filter1SharedCommonModule {}
