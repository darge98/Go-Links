import {TestBed} from '@angular/core/testing';

import {SearchService} from './search.service';
import {SearchHttpService} from "./search.http.service";
import {MockProvider} from "ng-mocks";
import {of, take} from "rxjs";
import {SearchResponse} from "../entities/search/search-response";

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockProvider(SearchHttpService, {
          search: (_) => of<SearchResponse>({
            totalItem: 2,
            items: [
              {id: 'angular', name: 'Angular', description: '', redirectUrl: '', tags: []},
              {id: 'elastic', name: 'Elastic', description: '', redirectUrl: '', tags: []},
              {id: 'test', name: 'prova', description: 'asd', redirectUrl: '', tags: ['pippo']},
            ]
          })
        })
      ]
    });

    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter all links', (done) => {
    service.search('elast').pipe(
      take(1)
    ).subscribe(data => {
      expect(data).toHaveLength(1);
      expect(data[0].name).toBe('Elastic');
      expect(data[0].id).toBe('elastic');
      done();
    })
  })

  it('should filter by name', (done) => {
    service.search('prova').pipe(
      take(1)
    ).subscribe(data => {
      expect(data).toHaveLength(1);
      expect(data[0].name).toBe('prova');
      expect(data[0].id).toBe('test');
      done();
    })
  })

  it('should filter by description', (done) => {
    service.search('asd').pipe(
      take(1)
    ).subscribe(data => {
      expect(data).toHaveLength(1);
      expect(data[0].name).toBe('prova');
      expect(data[0].id).toBe('test');
      done();
    })
  })

  it('should filter by tags', (done) => {
    service.search('pippo').pipe(
      take(1)
    ).subscribe(data => {
      expect(data).toHaveLength(1);
      expect(data[0].name).toBe('prova');
      expect(data[0].id).toBe('test');
      done();
    })
  })
});
