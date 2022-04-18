import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }


  a(){
      this.router.navigate(['aboutUs'], { relativeTo: this.route });
  }
  

}