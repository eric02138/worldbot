import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpService {
  /**
   * Creates an instance of http service.
   */
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Makes a GET call to the given url (AWS STS, in this case)
   * @param url string
   */
  // callHttpGet(url: string): Observable<Object> {
  //   return this.http.get(url).pipe(catchError(this.handleError));
  // }
}