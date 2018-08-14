import { Observable } from "rxjs";

export interface HttpServiceInterface {

    getHttpRequest(url: string): Observable<any>;
}
