import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[user-row]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() tick: any;
  @Input() windowlength: any;
  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }
}
