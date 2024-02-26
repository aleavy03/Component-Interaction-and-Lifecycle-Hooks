import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h3>Child Component</h3>
      <p>Data from Parent: {{ parentData }}</p>
      <button (click)="sendDataToParent()">Send Data to Parent</button>
    </div>
  `,
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() parentData: string = ''; // Initialize with an empty string or a default value
  @Output() childEvent = new EventEmitter<string>();

  ngOnInit() {
    console.log('Child Component Initialized');
  }

  ngOnChanges() {
    console.log('Input properties changed');
  }

  ngOnDestroy() {
    console.log('Child Component Destroyed');
  }

  sendDataToParent() {
    this.childEvent.emit('Hello from Child');
  }
}
