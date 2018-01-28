import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

export const restConfig = {
  protocol: 'http',
  host : 'localhost',
  port: '4201',
  get url() { return `${this.protocol}://${this.host}:${this.port}`}
}

@Injectable()
export class Rest {
  constructor(private http: Http) {}

  GET = (path:string) => {
    return this.http.get(`${restConfig.url}${path}`).map((resp: Response) => resp.json())
  }

  POST = (path:string, body) => {
    return this.http.post(`${restConfig.url}${path}`, body).map((resp: Response) => resp.json())
  }

}
