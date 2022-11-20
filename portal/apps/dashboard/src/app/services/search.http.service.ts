import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {map, Observable} from 'rxjs';
import {SearchRequest} from "../entities/search/search-request";
import {SearchResponse} from "../entities/search/search-response";

@Injectable({
  providedIn: 'root'
})
export class SearchHttpService {

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  search(request: SearchRequest): Observable<SearchResponse[]> {
    return this.configService.readConfig().pipe(
      map(config => config.searchEngineHost),
      map(host => `${host}/search`),
      // switchMap(url => this.http.post(url, request))
      map(() => [
        {
          id: 'angular',
          name: 'Angular',
          description: 'Linee guida per lo sviluppo dei progetti Angular'
        },
        {
          id: 'java',
          name: 'Java',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores\n' +
            '                    deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a\n' +
            '                    veritatis pariatur minus consequuntur'
        },
        {
          id: 'ticket',
          name: 'Ticket',
          description: 'Portale dei ticket'
        }
      ])
    );
  }
}
