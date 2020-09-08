import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-earnings-count',
  templateUrl: './earnings-count.component.html',
  styleUrls: ['./earnings-count.component.scss']
})
export class EarningsCountComponent implements OnInit {

  @Input() earningsCount;
  
  constructor() { }

  ngOnInit(): void {
  }

}
