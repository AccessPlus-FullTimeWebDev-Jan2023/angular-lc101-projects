import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color: string = 'green';
  height: number = 0;
  width: number = 0;
  message: string = 'Space shuttle ready for takeoff!';
  image: string = 'assets/images/LaunchCode_rocketline_white.png';
  houston: string = 'Houston, we are ready when you are!';
  statusCheck: boolean = false;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
    this.image = 'assets/images/LaunchCode_rocketline_white.png'
  }

  handleLanding(image) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    image.style.bottom = '0px';
    image.style.left = '0px';
    this.image = 'assets/images/LaunchCode_rocketline_white.png'
  }

  handleAbort(image) {
    let result = window.confirm('Are you sure you want to abort?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted. This message will self-destruct in 3...2...BOOM!!!!';
      image.style.bottom = '0px'
      this.image = 'https://cdn4.vectorstock.com/i/1000x1000/84/78/cartoon-explosion-boom-effect-animation-game-vector-15208478.jpg'
      this.houston = 'oops.'
    }
  }

  gutterCheck(image) {
    if (parseInt(image.style.bottom) <= 10 || parseInt(image.style.left) <=10 || this.height >= 360000 || parseInt(image.style.left) >=360) {
      this.color = 'orange'
    } else {
      this.color = 'blue'
    }
  }

  moveRocket(image, direction: string) {
    if (direction === 'right') {
      let movement = parseInt(image.style.left) + 10 + 'px';
      image.style.left = movement
      this.width += 10000
    } else if (direction === 'left') {
      let movement = parseInt(image.style.left) - 10 + 'px';
      image.style.left = movement
      this.width -= 10000
    } else if (direction === 'up') {
      let movement = parseInt(image.style.bottom) + 10 + 'px';
      image.style.bottom = movement
      this.height += 10000
    } else {
      let movement = parseInt(image.style.bottom) - 10 + 'px';
      image.style.bottom = movement
      this.height -= 10000
    } 
    this.gutterCheck(image)
  }

}
