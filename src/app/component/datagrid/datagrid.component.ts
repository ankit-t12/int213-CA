import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, GridApi, RowHeightParams, SelectionChangedEvent } from 'ag-grid-community';
import { BtnCellRenderer } from './btncell.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  gridOptions: any;
  private gridApi: GridApi = new GridApi();
  listdata: any = []
  AddClientDetails: any = FormGroup;
  submitted: any;
  route: any;
  index: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.AddClientDetails = this.formBuilder.group({
      first_name: ["", Validators.compose([Validators.required])],
      last_name: [""],
      age: ["", Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      department: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
      date: ["", Validators.compose([Validators.required])],
      country: ["", Validators.compose([Validators.required])],
      gender: [""],
      playing: [""],
      cooking: [""]

    }
    );
  }

  ngOnInit(): void {
    this.gridOptions = {
      pagination: true,
      paginationPageSize: 10
    }
    this.gridOptions.onCellClicked = ((event: CellClickedEvent) => {
      console.log(event)
      const rowId = event.rowIndex;
      const colId = event.column;
    });

  }
  get getControl() {
    return this.AddClientDetails.controls;
  }
  defaultColDef = {
    sortable: true,
    filter: true
  };
  columnDefs = [
    { headerName: 'First Name', field: 'first_name', width:100, cellStyle:{ textAlign: 'right'}},
    { headerName: 'Last Name', field: 'last_name', width:100},
    { headerName: 'Age', field: 'age', width:70},
    { headerName: 'Gender', field: 'gender', width:80},
    { headerName: 'Playing', field: 'playing', width:90},
    { headerName: 'Cooking', field: 'cooking', width:90},
    { headerName: 'Email Address', field: 'email', width:120},
    { headerName: 'Department', field: 'department', width:100},
    { headerName: 'Country', field: 'country', width:90},
    { headerName: 'Date Of Birth', field: 'date', width:130 },
    {
      headerName: 'Action', field: 'delete', cellRenderer: BtnCellRenderer,
      cellRendererParams: {
        clicked: (field: any) => {

        }
      },
    }
  ];


  rowData = JSON.parse(localStorage.getItem("users") || "[]")

  onclickRowAction(params: any) {
    const colId = params;
    console.log('colId: ', colId, colId.colDef.field, colId.rowIndex, params.event.target.dataset.action);
    if (params.event.target.dataset.action == "delete") {
      const array = JSON.parse(localStorage.getItem("users") || "[]")
      const index = colId.rowIndex
      if (index > -1) {
        array.splice(index, 1)
      }
      alert("Do you want to delete this!!");
      localStorage.setItem("users", JSON.stringify(array))
      this.rowData = JSON.parse(localStorage.getItem("users") || "[]")
      this.toastr.success('Deleted Sucessfully');
    }
    else if (params.event.target.dataset.action == "Add") {
      this.router.navigate(["registration"])
    }
    else if (params.event.target.dataset.action == "Edit") {
      let data = colId.data
      this.index = colId.rowIndex
      this.AddClientDetails.patchValue({
        first_name: data.first_name,
        last_name: data.last_name,
        age: data.age,
        email: data.email,
        department: data.department,
        phone: data.phone,
        date: data.date,
        country: data.country,
        gender: data.gender,
        playing: data.playing,
        cooking: data.cooking

      });
    
      
      
      console.log(params.event.target.dataset,colId.data)
    }
    

  }
  public getRowHeight: (
    params: RowHeightParams
  ) => number | undefined | null = (params: RowHeightParams) => {
    if (params.node.level === 0) {
      return 50;
    }
    if (params.node.level === 1) {
      return 60;
    }
    return 40;
  };
  

  onSelectionChanged() {
    const selectedRows = this.gridOptions.api.getSelectedRows();
    console.log(selectedRows);

  }


  onSubmit() {
    this.toastr.success('Updated Sucessfully');
    console.log(this.AddClientDetails.value)
    if (this.index !== -1) {
      const array = JSON.parse(localStorage.getItem("users") || "[]")
      array[this.index] = this.AddClientDetails.value;
      console.log(array)
      localStorage.setItem("users", JSON.stringify(array ))
      this.rowData = JSON.parse(localStorage.getItem("users") || "[]")
    

    }
    this.submitted = true;
    if (this.AddClientDetails.invalid) {
      return
    }



  }

  go() {
    this.route.navigate(['/registration'])
  }

  // Successtoast() {
  //   this.toastr.success('Login Sucessfully');
  // }

  // Errortoast() {
  //   this.toastr.error('Wrong Credidential ');
  // }

}

