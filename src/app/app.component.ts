import { Component } from '@angular/core';

@Component({ //aşağıda Component olduğunu anlatan bir ön ek (C# Attribute gibi)
  selector: 'app-root', //Single Page uygulamalar angular ile geliştirilir. //Index.html'de app root var.
  templateUrl: './app.component.html', //appcomponent çalışınca bu html dizini de çalışır ve alttaki css
  styleUrls: ['./app.component.css'] // (View gibi)
})


export class AppComponent { //Export -> başka componentler buraya erişebilsin. (public)
  title = 'Semih Kaya'; //Bu componentin içinde tanımlı her şey html tarafında erişilebilir oluyor. Title'a
  //html tarafta erişiyoruz. (appcomponent.html)
  city:string = "İstanbull";
  
}
