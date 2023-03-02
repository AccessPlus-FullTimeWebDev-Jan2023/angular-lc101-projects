import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff() {
    let result =
      window.confirm('Are you sure the shuttle is ready?')
    if (result) {
      this.color = 'blue'
      this.height = 10000
      this.width = 0
      this.message = 'Shuttle in flight.'
    }
  }

  handleLanding() {
    let result = window.confirm('Confirm landing?')
    if (result) {
      window.alert('Shuttle is landing.')
      this.color = 'green'
      this.height = 0
      this.width = 0
      this.message = 'Space shuttle ready for takeoff!'
    }
  }

  handleAbort() {
    let result = window.confirm('Are you sure you want to abort?')
    if (result) {
      this.color = 'red'
      window.alert('Mission aborted, return to base.')
      this.color = 'green'
      this.height = 0
      this.width = 0
      this.message = 'Space shuttle ready for takeoff!'
    }
  }
}
