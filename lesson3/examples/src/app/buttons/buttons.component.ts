import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean[] = [false, false, false, false]
   message: string = 'Frustration Incarnate!'
   locations: string[] = ['center', 'left', 'right']
   location: string = 'center'

   constructor() { }

   ngOnInit() { }

   resetButtons(): void {
      for (let i=0; i<this.inactive.length; i++) {
         this.inactive[i] = false
      }
   }

   moveButton(oldLocation: string): void {
      while (this.location === oldLocation) {
         this.location = this.locations[Math.floor(Math.random()*this.locations.length)]
      }
   }

}
