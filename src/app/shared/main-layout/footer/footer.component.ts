import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(".toggle").on("click", function () {
      $(".notification").toggleClass('active');
    });
    $(".cancel").on("click", function () {
      $(this).parent().toggleClass('gone');
    });



    //Jquery function to change Bakcground of body only 
    $(function () {
      $("#color_mode").on("change", function () {
        colorModePreview(this);
      })
    });

    //uses checkbox for status updated
    function colorModePreview(ele: HTMLElement) {
      if ($(ele).prop("checked") == true) {
        $('body').addClass('dark');
        $('body').removeClass('light');
      }
      else if ($(ele).prop("checked") == false) {
        $('body').addClass('light');
        $('body').removeClass('dark');
      }
    }

    //Jquery fucntion for toggle sidebar width expansion 

    $(document).ready(function () {
      $("#menu-btn").on("click", function () {
        $(".sidebar").toggleClass("extend");
      });
    });
  }

}
