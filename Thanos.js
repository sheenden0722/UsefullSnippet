[].forEach.call($$('*'),
  function (a) {
    let booool = Boolean(Math.round(Math.random()))
    let temp = booool ? 'visible' : 'hidden'
    a.style.transition = 'all ease 1s';
    //a.style.filter = 'contrast(10)';
    /* if(booool) {
        a.style.filter = 'blur(6px)';
    } */
    a.style.visibility = temp;
  });