import { Component } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from './post.service';
import { UserService } from './user.service';

//Built in pipe

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService] //Bu compoenent her çağrımında postservice çalışacak insstance oluşcak
})
export class PostComponent { //Http Get Request //Bir api'den data çekilecekse o apinin karşılığı olan client modeli tanımlayın. UserId vb. nesneleri tutan bir obje,nesne oluşturun

  constructor(private http: HttpClient, 
    private activatedRoute: ActivatedRoute,
    private alertifyService:AlertifyService,
    private postService:PostService,
    private userService:UserService) { } //Injection

  path: string = "https://jsonplaceholder.typicode.com/"
  posts: Post[];
  users: User[];

  ngOnInit() { //Observable?
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"]);
    })

    //Aktif route'un(linkin) pparametrelerine subscribe ol.
  }

  getPosts(userid: number) {
    this.postService.getPosts(userid).subscribe(data=>{
      this.posts = data
    })
    //Subscribe(İşlem sonucunda ne olduğu hakkında bilgi veriyor) Gelen datayı response ile izliyor
  }

  getUsers() {
    //Subscribe(İşlem sonucunda ne olduğu hakkında bilgi veriyor) Gelen datayı response ile izliyor

    this.userService.getUsers().subscribe(data=>{
      this.users = data
    })

    // this.http.get<User[]>(this.path + "users").subscribe(response => {
    //   this.users = response;
    // })
  }

  addToFavorites(post: Post) {
    this.alertifyService.success("Added to favs " + post.title)
  }

}
