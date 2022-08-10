import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogitemsService } from '../services/blogitems.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  constructor(private blogItem:BlogitemsService , private router:Router) { }

  blogs:any = []
  
  ngOnInit(): void {
    this.blogItem.GetAllItems().subscribe(
      blogData => {
        this.blogs = blogData;
      }
    )
  }

  goToBlogDetails(id:any){
    //navigate to blog details
    this.router.navigate(['/blog',id]);
  }

}
