import { Component } from '@angular/core';

import { Task } from './model/task';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css']
})

export class AppComponent {
  private tasks = [
    new Task(
      "This is a task",
      false
    ),

    new Task(
      "Another one...",
      false
    ),

    new Task(
      "Do Something!",
      false
    )
  ]

  private currentTask = new Task(null, false);
}
