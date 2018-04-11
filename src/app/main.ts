import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/observable/fromPromise';

import 'rxjs/add/operator/switchMap';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
