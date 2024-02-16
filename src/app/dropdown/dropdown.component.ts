import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  dropdownOptions = [
    { label: 'Books', route: '/category/1' },
    { label: 'Electronics', route: '/category/2' },
    { label: 'Gaming & Media', route: '/option3' },
    { label: 'Home & Appliances', route: '/option2' },
    { label: 'Office & Stationery', route: '/option3' },
    { label: 'Toys', route: '/option2' }
  ];


  

}
