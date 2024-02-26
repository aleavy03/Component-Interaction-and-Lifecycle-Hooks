import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <h2>Parent Component</h2>
      <p>Data from Child: {{ dataFromChild }}</p>
      <app-child [parentData]="dataToSend" (childEvent)="handleChildEvent($event)"></app-child>
    </div>
  `,
})
export class ParentComponent {
  dataFromChild: string = ''; // Initialize with an empty string or a default value

  dataToSend = "Hello from Parent";

  handleChildEvent(data: string) {
    this.dataFromChild = data;
  }
}
