import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Filter1PostModule } from './post/post.module';
import { Filter1CommentModule } from './comment/comment.module';
import { Filter1TopicModule } from './topic/topic.module';
import { Filter1TagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Filter1PostModule,
        Filter1CommentModule,
        Filter1TopicModule,
        Filter1TagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Filter1EntityModule {}
