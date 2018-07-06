import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Filter1SharedModule } from 'app/shared';
import { Filter1AdminModule } from 'app/admin/admin.module';
import {
    PostComponent,
    PostDetailComponent,
    PostUpdateComponent,
    PostDeletePopupComponent,
    PostDeleteDialogComponent,
    postRoute,
    postPopupRoute
} from './';

const ENTITY_STATES = [...postRoute, ...postPopupRoute];

@NgModule({
    imports: [Filter1SharedModule, Filter1AdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [PostComponent, PostDetailComponent, PostUpdateComponent, PostDeleteDialogComponent, PostDeletePopupComponent],
    entryComponents: [PostComponent, PostUpdateComponent, PostDeleteDialogComponent, PostDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Filter1PostModule {}
