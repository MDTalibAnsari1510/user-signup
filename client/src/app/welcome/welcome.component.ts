import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {

  username!: string;
  wish: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.setWish();
    });
  }

  setWish(): void {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.wish = 'Good Morning';
    } else if (hour < 18) {
      this.wish = 'Good Afternoon';
    } else {
      this.wish = 'Good Evening';
    }
  }

}
