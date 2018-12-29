import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.css']
})
export class TwoComponentComponent implements OnInit {
  isCollapsed = false;
  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  selectChild(num) {
    console.log(num);
    if (num === 1) {
      console.log(num + num);
      this._router.navigateByUrl('two/childOne');
    } else if (num === 2) {
      this._router.navigateByUrl('two/childTwo');
    } else if (num === 3) {
      this._router.navigateByUrl('two/childThree');
    }

  }

}
