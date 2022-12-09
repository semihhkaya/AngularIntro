import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({ //Bir class'ın servis olabilmesi için Bu ifade ile süslenmesi gerekiyor
  //attribute mantığı gibi düşün. C#'daki.
  providedIn: 'root'
})

//Service içerisinde 4 operasyon yazdık örn. aşağıda 

export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertify.success(message)
  }
  error(message: string) {
    alertify.error(message)
  }
  warning(message: string) {
    alertify.warning(message)
  }
  message(message: string) {
    alertify.message(message)
  }




}

