import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.signOut().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
        alert(error);
      }
    );
    
  }

}
