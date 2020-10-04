import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlugoService {
  localURL = 'http://localhost:8081/api/v2/goblin';
  stgURL = 'http://staging.plugo.io/api/v2/goblin';
  authHeaderToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTE5NzEyNTg2MzY1IiwiY3JlYXRlZCI6MTU4NzQ1NDA2NzA4N30.wmvkBGlsWZyCB9vCRUSQRU1iKA-IxXcvdfN5CqUD2jtfX8BIxaMiASBs_3jUEk-img3KQFXOgyxpRwCGqxpnhA';
  vipulstgToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTE3ODYwOTUzOTcyIiwiY3JlYXRlZCI6MTU4Nzk3NzAyNjU3NX0.gNw010xyg0prnTewr-SwjYkgBPifRZFHIS3493r6lH7LZPBXcJGDew1RfB1B7z-KibPedfncA0UiuSJw9Y77dw';
  localtoken =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTE3ODYwOTUzOTUzIiwiY3JlYXRlZCI6MTU4OTg2OTk5NzMxMH0.IlqqjhMfBmIvhvMWYSkfnc4-0FLKr0k8wpDnPOF0Zo1teAWkKRx0lNB4comUY_AhWIRehxuUgIYsJIlxnd3RFg';
  initializeChatSession() {
    const headers: HttpHeaders = new HttpHeaders().append('Authorization', this.localtoken);
    return this.http.get(this.localURL + '/scs/session', {
      headers
    });
  }

  
  getChildCommands(sessionId: string, id: string) {
    const headers: HttpHeaders = new HttpHeaders().append('Authorization', this.localtoken);
    const params: HttpParams = new HttpParams().append('id', id).append('sessionId', sessionId);

    return this.http.get(this.localURL + '/scs/session/process-command', {
      headers,
      params
    });
  }

  getAllCommands() {
    const headers: HttpHeaders = new HttpHeaders().append('Authorization', this.localtoken);
    return this.http.get(this.localURL + '/scs/commands', {
      headers
    });
  }

  saveCommand(value: any) {
    const headers: HttpHeaders = new HttpHeaders().append('Authorization', this.localtoken);
    return this.http.post(this.localURL + '/scs/commands', value, {
      headers
    });
  }

  constructor(private http: HttpClient) { }
}
//http://staging.plugo.io/api/v2/goblin/scs/session/process-command?id=f03878f7-cc2d-49bb-85f2-c54bd237101c&sessionId=5a385de2-1c10-46c1-b258-3cc3467c7918



/*

1. left navigation show/colapse on hower
2. colapse main modules
3. put the logo
4. logged in user and current location
5. common dashboard for everyone
6. session management for 30 mins
7. identifying icon for left side menu items
8. level of standardization
*/