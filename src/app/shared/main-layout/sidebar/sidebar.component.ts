import { Component, OnInit } from '@angular/core';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      // Hide submenus
      ($('#body-row .collapse')as any).collapse('hide'); 
      
      // Collapse/Expand icon
      $('#collapse-icon').addClass('fa-angle-double-left'); 
      
      // Collapse click
      $('[data-toggle=sidebar-colapse]').click(function() {
          SidebarCollapse();
      });
      
      function SidebarCollapse () {
          $('.menu-collapsed').toggleClass('d-none');
          $('.sidebar-submenu').toggleClass('d-none');
          $('.submenu-icon').toggleClass('d-none');
          $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
          
          // Collapse/Expand icon
          $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
      }
      });
  }
 


}
