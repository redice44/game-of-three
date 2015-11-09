(function() {
  var NUM_FLOOR = 700;
  var NUM_CEILING = 1000;
  var ACTIONS = {
    divide: 0,
    add: 1,
    sub: 2
  };
  var errors = 0;
  var startingNumber;
  var number;
  var startTime;
  var now;
  var second;
  var minute;

  function makeNewNum(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor)) + floor;
  }

  function updateNumber(num) {
    $('#current').html(num);
  }

  function checkWinState(num) {
    if (num === 1) {
      $(location).attr('href','/victory?time=' + getTime() +
        '&number=' + startingNumber +
        '&errors=' + errors);
    }
  }

  function verifySolution(solution) {
    solution = solution.reverse();
    return solution.reduce(function(prev, next) {
      switch (next) {
        case '1':
          return prev - 1;
        case '-1':
          return prev + 1;
        case '0':
          return prev * 3;
      }
    }, 1);
  }

  function timer() {
    setInterval(function() {
      $('#timer').html(getTime);
    }, 1000);
  }

  function getTime() {
      now = Date.now() - startTime.getTime();
      second = parseInt(now / 1000);
      minute = parseInt(second / 60);
      second = second % 60;
      if (minute < 10) {
        minute = '0' + minute;
      }

      if (second < 10) {
        second = '0' + second;
      }
      return minute + ':' + second;
  }

  function generateSolution(num) {
    var solution = [];
    while (num !== 1) {
      switch (num % 3) {
        case 0:
          num /= 3;
          solution.push(ACTIONS.divide);
          break;
        case 1:
          num = (num - 1) / 3;
          solution.push(ACTIONS.sub);
          break;
        case 2:
          num = (num + 1) / 3;
          solution.push(ACTIONS.add);
          break;
      }
    }
    return solution;
  }

  function flashIncorrect(item) {
    errors++;
    $(item).addClass('incorrect')
    window.setTimeout(function() {
      $(item).removeClass('incorrect');
    }, 1000);
  }

  function isDivisible(num) {
    return num % 3 === 0;
  }

  $(document).ready(function() {
    startTime = new Date();
    timer();
    number = makeNewNum(NUM_FLOOR, NUM_CEILING);
    startingNumber = number;
    updateNumber(number);
    console.log('Start', number);

    $('#plus-one').on('click', function(e) {
      if (isDivisible(number + 1)) {
        number = (number + 1) / 3;
        checkWinState(number);
        updateNumber(number);
      } else {
        flashIncorrect(this);
        // flash incorrect somehow
      }
    });

    $('#sub-one').on('click', function(e) {
      if (isDivisible(number - 1)) {
        number = (number - 1) / 3;
        checkWinState(number);
        updateNumber(number);
      } else {
        flashIncorrect(this);
        // flash incorrect
      }
    });

    $('#divide').on('click', function(e) {
      if (isDivisible(number)) {
        number /= 3;
        checkWinState(number);
        updateNumber(number);
      } else {
        flashIncorrect(this);
        // flash incorrect
      }
    });

  });
})();
