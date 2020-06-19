import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@app/user/user.service';
import { User } from '@app/api/models/user';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.currentUserValue;
    this.userService.currentUserSubject.subscribe((user: User | null) => {
      this.user = user;
    });
  }

  get userLoggedIn(): boolean {
    return !!this.user;
  }
}
