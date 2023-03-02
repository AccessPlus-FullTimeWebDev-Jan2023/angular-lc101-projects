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
  message: string = 'Space shuttle ready for takeoff!'
  takeOffEnabled: boolean = true

  takeOffCheck():void {
    if (window.confirm('Confirm that the shuttle is ready for takeoff.')) {
      this.message = 'Shuttle is in flight!'
      this.color = 'blue'
      this.height += 10000
      this.takeOffEnabled = false
    }
  }

  resetAll(rocketImage, color: string) {
    this.takeOffEnabled = true
    this.height = 0
    this.color = color
    rocketImage.style.left = 0
    rocketImage.style.bottom = 0
  }

  landShuttle(rocketImage): void {
    window.alert('The shuttle is landing. Landing gear engaged.')
    this.message = 'Space shuttle ready for takeoff!'
    this.resetAll(rocketImage, 'green')
  }

  abortMission(rocketImage): void {
    if (window.confirm('Are you sure you want to abort?')) {
      this.message = 'Mission aborted: Shuttle returning home.'
      this.resetAll(rocketImage, 'red')
    }
  }

  // pasted - take anotehr stab at it
  gutterCheck(width, height) {
    if (width > 260000 || width < 0 || height < 0 || height > 340000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  moveRocket(rocketImage, direction: string) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width= this.width - 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } else {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    this.gutterCheck(this.width, this.height);
  }

}
