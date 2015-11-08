(function() {
  var NUM_FLOOR = 700;
  var NUM_CEILING = 1000;
  var number;
  var userSolution;
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
    return num === 1;
  }

  function verifySolution(solution) {
    solution = solution.reverse();
    return solution.reduce(function(prev, next) {
      switch (next) {
        case '+1':
          return prev - 1;
        case '-1':
          return prev + 1;
        case '/3':
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
      return minute + ":" + second;
  }

  function generateSolution() {

  }

  $(document).ready(function() {
    startTime = new Date();
    timer();
    userSolution = [];
    number = makeNewNum(NUM_FLOOR, NUM_CEILING);
    console.log('Start', number);
    updateNumber(number);

    $('#plus-one').on('click', function(e) {
      number++;
      userSolution.push('+1');
      updateNumber(number);
    });

    $('#sub-one').on('click', function(e) {
      number--;
      userSolution.push('-1');
      updateNumber(number);
    });

    $('#divide').on('click', function(e) {
      if (number % 3 === 0) {
        number /= 3;
        userSolution.push('/3');
        if (checkWinState(number)) {
          console.log('Winner winner chicken dinner!!');
          console.log('Solution', userSolution.join(' '));
          console.log('Verify', verifySolution(userSolution));
          $(location).attr('href','/victory?time=' + getTime() + '&solution=' + userSolution.join('_'));
        }
        updateNumber(number);
      } else {
        console.log('Incorrect');
      }
    });

  });
})();
