import {Component, OnInit} from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'initiative';
  public currentTick = 1;
  public users: Array<User> = [];
  public windowlength = 20;

  public defaultUsers = [
    'Susan',
    'Tori',
    'Bry',
    'Susan',
    'Si'
  ];

  ngOnInit(): void {
    this.defaultUsers.forEach( user => {
      this.users.push(new User(user));
    })
  }

  public addUser() {
    this.users.push(new User(''));
  }

  public removeUser(index) {
    this.users.slice(index, 1);
  }

  public upTick() {
    this.currentTick++;
  }

  public downTick() {

    if (this.currentTick > 0) {
      this.currentTick--;
    }
  }
}

