$(() => {
  const color = $('.nav-circle').css('background-color');

  $('.nav-circle').hover(function () {
    console.log(this);
    this.innerHTML = '&#128640;';
    $(this).css('background-color','transparent');
    $(this).css('cursor','none');
  }, function () {
    this.innerHTML = '';
    $(this).css('background-color', color);
  })

  const contentList = [
    'Pamela Kaylin', 
    'Full-stack engineer', 
    'Welcome to my universe', 
    'I create my own world.'
  ];

  let text = $('#type-text')[0];
  let intervalFunc;
  let sentence = 0;
  let index = 0;

  function typeText () {
    let letter = contentList[sentence][index];
    text.innerHTML += letter;
    index++;

    if (text.innerHTML === contentList[sentence]) {
      clearInterval(intervalFunc);
      if (sentence < contentList.length-1) {
        setTimeout(() => {
          intervalFunc = setInterval(deleteText, 50);
        }, 1000);
      }
    }
  }

  function deleteText () {
    let written = text.innerHTML.substring(0,index-1);
    text.innerHTML = written;
    index--;

    if (written === '') {
      clearInterval(intervalFunc);
      sentence++;
      setTimeout(() => {
        intervalFunc = setInterval(typeText, 100);
      },500);
      
    }
  }

  setTimeout(() => {
    intervalFunc = setInterval(typeText, 100);
  }, 1000);



})
