import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {map, Observable, switchMap} from 'rxjs';
import {SearchRequest} from "../entities/search/search-request";
import {SearchResponse} from "../entities/search/search-response";

@Injectable({
  providedIn: 'root'
})
export class SearchHttpService {

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  search(request: SearchRequest): Observable<SearchResponse> {
    return this.configService.readConfig().pipe(
      map(config => config.searchEngineHost),
      map(host => `${host}/_search`),
      switchMap(url => this.http.post<SearchResponse>(url, request))
    );
  }
}
