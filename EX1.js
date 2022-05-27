class Dates {

  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // ba set akhele maghadir itrate mikonim
  set year(value) {
    if (value >= 1900 && value < 2022) {
      this._year = value;
    } else {
      console.log("input is out of range");
      return;
    }
  }
  get year() {
    return this._year;
  }

  // here we set month and its value
  set month(value) {
    if (value >= 1 && value <= 12) {
      this._month = value;
    } else {
      console.log("input is out of range");
      return;
    }
  }
  get month() {
    return this._month;
  }

  // here set day //  31 roozo nashod handle konam
  set day(value) {
    if (this._month >= 1 && this._month <= 6) {
      if (value >= 1 && value <= 30) {
        this._day = value;
      } else {
        console.log("input is out of range");
        return;
      }
    } 
  }
  get day() {
    return this._day;
  }


  // to string nashod // az split estefade she


// ghesmate 2  compare date 
  compareDate(date1, date2) {
    let dateOne = new Date(date1).getTime();
    let dateTwo = new Date(date2).getTime();
    if (dateOne > dateTwo) {
      return 1;
    } else if (dateOne < dateTwo) {
      return -1;
    } else {
      return 0;
    }
  }
}


let MyDate = new Dates(2000, 5, 31);
MyDate.year = 2010;
MyDate.month = 7;
MyDate.day = 31;
console.log(MyDate);

////



class Times {

  constructor(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  set hour(value) {
    if (value >= 0 && value <= 23) {
      this._hour = value;
    } else {
      console.log("input is out of range");
      return;
    }
  }
  get hour() {
    return this._hour;
  }
  set minute(value) {
    if (value >= 0 && value <= 59) {
      this._minute = value;
    } else {
      console.log("input is out of range");
      return;
    }
  }
  get minute() {
    return this._minute;
  }
  set second(value) {
    if (value >= 0 && value <= 59) {
      this._second = value;
    } else {
      console.log("input is out of range");
      return;
    }
  }
  get second() {
    return this._second;
  }
  

  // to string ghesmate 2 nashod

  compareTime(time1, time2) {
    if (time1 > time2) {
      return 1;
    } else if (time1 < time2) {
      return -1;
    } else {
      return 0;
    }
  }
}
let timeTest = new Times(20, 4, 59);
console.log(timeTest);


console.log(timeTest.compareTime("12:11:11", "12:12:11"));


/// timeStamp 
class TimeStamp {
  constructor(year, month, day, hour, minute, second) {
    this.dates = new Dates(year, month, day);
    this.times = new Times(hour, minute, second);
  }
 

  compares(timeStamp1, timeStamp2) {

    let temp = timeStamp1.split(" ");
    let temp2 = timeStamp2.split(" ");
    let compareTime = this.times.compareTime(temp[1], temp2[1]);
    let compareDate = this.dates.compareDate(temp[0], temp2[0]);

    if (compareDate === 0) {
      return compareTime;
    } 
  }
}
let timeStamp1 = new TimeStamp(2020, 10, 2, 22, 54, 20);
let timeStamp2 = new TimeStamp(2020, 11, 23, 22, 25, 10);
console.log(timeStamp1);
console.log(timeStamp1.compares("2000/4/11 11:20:13", "2008/7/20 20:20:13"));
