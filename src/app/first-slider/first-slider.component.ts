import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-slider',
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.scss']
})
export class FirstSliderComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
