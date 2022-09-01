import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogitemsService } from '../services/blogitems.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, 
              private blogitem: BlogitemsService , 
              private http:HttpClient,
              private router:Router
              ) { }

  blogId: any;
  blog:any = {};

   ngOnInit(): void {
    window.scrollTo(0, 0)
    this.blogId = this.activeroute.snapshot.paramMap.get('id');
    
    this.blogitem.GetAllItems().subscribe(
      (blogOne: any) => {
        this.blog = blogOne.find((x: { id: any; })=> x.id == this.blogId);
        if(this.blog === (null || undefined)){
          console.log("hellllllo");
          this.router.navigate(['/page-not-found/page']);
        }
      }
    )
  }

}
