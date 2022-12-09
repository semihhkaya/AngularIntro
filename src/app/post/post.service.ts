import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({ //Service Attribute'u Injectable
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  path: string = "https://jsonplaceholder.typicode.com/"

  getPosts(userid: number): Observable<Post[]> {

    //Subscribe(İşlem sonucunda ne olduğu hakkında bilgi veriyor) Gelen datayı response ile izliyor
    if (userid) {
      let newPath = this.path + "posts?userId=" + userid
      //debugger;
      return this.http.get<Post[]>(newPath);
    }
    else {
      return this.http.get<Post[]>(this.path + "posts");
    }
  }
}
