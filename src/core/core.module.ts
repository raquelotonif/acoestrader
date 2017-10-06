import {NgModule} from "@angular/core";
import {HttpModule} from '@angular/http'
import {PostServices} from './post.service'

@NgModule({
  imports: [HttpModule],
  declarations: [],
  exports: [],
  providers: [PostServices]
})
export class CoreModule {
  constructor(){
    //todo Ensure that CoreModule is only loaded once, into AppModule
  }
}
