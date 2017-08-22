import { Injectable } from '@angular/core';
import { Report } from '../models/report';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {
    encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) {
  }

    getEncounters(): Promise<Report[]> {
      return this.http.get(this.encountersUrl)
                 .toPromise()
                 .then((response) => response.json().encounter)
                 .catch(this.handleError);
    }

    private handleError(error: any) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}