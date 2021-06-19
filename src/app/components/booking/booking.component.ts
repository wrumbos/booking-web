import { Component, OnInit } from '@angular/core';

import { BookingService } from '../../services/booking.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Booking} from "../../models/booking.model";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookings?: Booking[];

  columnDefs = [
    { field: 'id', headerName:'BookingId', sortable: true, filter: true },
    { field: 'name', headerName:'Cliente' },
    { field: 'time', headerName:'Fecha de Creación'},
    { field: 'address', headerName:'Dirección'},
    { field: 'price', headerName:'Precio', sortable: true, filter: true}
  ];

  constructor(private bookingService: BookingService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.retrieveBooking();
  }

  retrieveBooking(): void{
    let array = [];
    this.bookingService.get(this.tokenStorageService.getUser().email, this.tokenStorageService.getToken())
      .subscribe(
      data => {
        data.forEach(function(value, key) {
          let booking = new Booking();
          booking.id = value.bookingId;
          booking.name = value.tutenUserClient.firstName + ' ' + value.tutenUserClient.lastName;
          booking.address = value.locationId.streetAddress;
          booking.price = value.bookingPrice;
          booking.time = new Date(value.bookingTime).toDateString();
          array.push(booking);
        });
        this.bookings = array;
        console.log(this.bookings);
      }, err => {
        console.log(err);
      }
    );

  }

}
