import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.interface';

interface TableProps {
  shouldEnableBorders: boolean;
  shouldEnableStripes: boolean;
  shouldEnableNarrow: boolean;
  shouldEnableHover: boolean;
}

@Component({
  selector: 'ngr-topic-class-and-style',
  templateUrl: './topic-class-and-style.component.html',
  styleUrls: ['./topic-class-and-style.component.scss'],
})
export class TopicClassAndStyleComponent implements OnInit {
  /*
    switch (user.type) {  ngSwitch
      case 'USR':         *ngSwitchCase
        break;
      case 'ADM':
        break;
      default:            *ngSwitchDefault
        break;
    }
  */
  students: Student[] = [
    {
      username: 'anupvasudeva',
      firstName: 'Anup',
      lastName: 'Vasudeva',
      marks: 50,
      type: 'ADM', // is an admin
    },
    {
      username: 'ramprasad',
      firstName: 'Ram',
      lastName: 'Prasad',
      marks: 80,
      type: 'USR', // is a user
    },
    {
      username: 'kumargaurav',
      firstName: 'Gaurav',
      lastName: 'Kumar',
      marks: 90,
      type: 'USR',
    },
    {
      username: 'sharmanitin',
      firstName: 'Nitin',
      lastName: 'Sharma',
      marks: 50,
      type: null,
    },
  ];
  tableProperties: TableProps;

  constructor() {}

  get tableClasses() {
    return {
      'is-bordered': this.tableProperties.shouldEnableBorders,
      'is-striped': this.tableProperties.shouldEnableStripes,
      'is-narrow': this.tableProperties.shouldEnableNarrow,
      'is-hoverable': this.tableProperties.shouldEnableHover,
    };
  }

  ngOnInit(): void {
    this.resetTableProperties();
  }

  enableBorders() {
    this.tableProperties.shouldEnableBorders = true;
  }

  enableStripes() {
    this.tableProperties.shouldEnableStripes = true;
  }

  enableNarrow() {
    this.tableProperties.shouldEnableNarrow = true;
  }

  enableHover() {
    this.tableProperties.shouldEnableHover = true;
  }

  enableAll() {
    this.enableBorders();
    this.enableHover();
    this.enableNarrow();
    this.enableStripes();
  }

  resetAll() {
    this.resetTableProperties();
  }

  getMarksStyles(student: Student) {
    let color: string;
    if (student.marks > 80) {
      color = 'green';
    } else if (student.marks > 70) {
      color = 'gray';
    } else if (student.marks <= 50) {
      color = 'red';
    }
    // object short-hand notation
    return {
      color,
    };
  }

  private resetTableProperties() {
    this.tableProperties = {
      shouldEnableBorders: false,
      shouldEnableStripes: false,
      shouldEnableNarrow: false,
      shouldEnableHover: false,
    };
  }
}
