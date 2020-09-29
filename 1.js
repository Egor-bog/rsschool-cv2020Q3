
function getSeason(date) {
  if (date === undefined) {return rezult = 'Unable to determine the time of year!';}
  if (date  == null) { 
    throw new Error('Error');
  }
  let fake = new Date(date.toString());
  if (fake.getFullYear() == date.getFullYear && fake.getMonth() == date.getMonth() &&
 fake.getDate() == date.getDate()) {throw new Error('Error FAKE');}

 else {
   
  console.log('Я Здесь');
  console.log(fake.getFullYear() , date.getFullYear());
  console.log(fake.getMonth() , date.getMonth());
  console.log(fake.getDate() , date.getDate());

  
  let result = '';
  let month = date.getMonth()
  
  if (month >= 0 && month < 2 || month === 11) {
    rezult = 'winter';
  }
  else if (month >= 2 && month < 5) {
    rezult = 'spring'
  }
  else if (month >= 5 && month < 8) {
    rezult = 'summer'
  }
  else if (month >= 8 && month < 11) {
    rezult = 'autumn'
  }

 }

 return rezult;
  }

  
  const deeperFakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    getMonth() {
        return Date.prototype.getMonth.call(new Date());
    },
    getFullYear() {
        return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
    },
    getDate() {
        return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
    },
    getHours() {
        return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
    },
    getMinutes() {
        return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
    },
    getSeconds() {
        return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
    },
    getMilliseconds() {
        return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
    },
    getDay() {
        return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
    }
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));



console.log(getSeason(new Date(1664, 1, 17, 13, 41, 10, 345)));
console.log(getSeason(deeperFakeDate));





