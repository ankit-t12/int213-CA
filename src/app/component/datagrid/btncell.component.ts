import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'btn-cell-renderer',
  template: `
    <button type="button" class="btn btn-success mt-1"><i class="bi bi-plus-lg" data-action="Add"></i></button>
    <button type="button" class="btn btn-primary mx-2 mt-1"  data-bs-toggle="modal" data-bs-target="#editModal"><i class="bi bi-pencil-square" data-action="Edit"></i></button>
    <button type="button" class="btn btn-danger mt-1"><i class="bi bi-trash" data-action="delete"></i></button>  `,
})
export class BtnCellRenderer implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    console.log(event)
    this.params.clicked(this.params.value);
  }

  refresh() {
    return false;
  }

}
