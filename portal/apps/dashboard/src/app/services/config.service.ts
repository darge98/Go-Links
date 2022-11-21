import {Injectable} from '@angular/core';
import {Config} from "../entities/config/config";
import {Observable, ReplaySubject, take} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config$ = new ReplaySubject<Config>(1);

  constructor(private http: HttpClient) {
    this.http.get<Config>('/assets/configs/config.json').pipe(
      take(1)
    ).subscribe({
      next: (data: Config) => this.config$.next(data),
      error: (error: Error) => console.error('Errore durante il reperimento delle configurazioni', error)
    });
  }

  public readConfig(): Observable<Config> {
    return this.config$.asObservable();
  }
}
