$(() => {
  const contentList = [
    "Pamela Kaylin Chen", 
    'Full-stack engineer', 
    'Welcome to my universe', 
    'I create my own world.'
  ];

  let text = $('#type-text')[0];
  let cursor = $('.cursor')[0];
  let intervalFunc;
  let sentence = 0;
  let index = 0;
  cursor.style.display = 'none';

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
      } else cursor.style.display = 'inline-block';

    }

  }

  function deleteText () {
    let written = text.innerHTML.substring(0,index-1);
    console.log(written)
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
