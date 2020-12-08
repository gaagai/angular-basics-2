import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submited = new EventEmitter<string>();
  term = '';

  constructor() {}

  ngOnInit(): void {}
  onSubmit(event: any): void {
    event.preventDefault();
    this.submited.emit(this.term);
  }
}
