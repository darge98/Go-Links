import {Route} from '@angular/router';
import {SimpleLayoutComponent} from "./layouts/simple-layout/simple-layout.component";
import {SearchComponent} from "./pages/search/search.component";

export const appRoutes: Route[] = [
  {
    path: '', component: SimpleLayoutComponent, children: [
      {path: '', component: SearchComponent},
    ]
  }
];
