import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page-not-found',
  templateUrl: './error-page-not-found.component.html',
  styleUrls: ['./error-page-not-found.component.scss']
})
export class ErrorPageNotFoundComponent implements OnInit {

  constructor(private router:Router) { }

   ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
