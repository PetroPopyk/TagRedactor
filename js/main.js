  var form2 = document.forms.form2;
  var form3 = document.forms.form3;
  var form4 = document.forms.form4;
  btn1.onclick = function () {
      if (btn3.style.display != "block" && btn4.style.display != "block" && txt2.style.display != "block") {
          btn3.style.display = "block";
          btn4.style.display = "block";
          txt2.style.display = "block"
          form2.style.display = "none";
          form3.style.display = "none";
          form4.style.display = "none";
          bcol.style.display = "none";
          fcol.style.display = "none";
          colors.style.display = "none";
          bim.style.display = "none";
      }
      else {
          btn3.style.display = "none";
          btn4.style.display = "none";
          txt2.style.display = "none";
      }
      txt2.innerHTML = document.getElementsByClassName('first')[0].innerHTML;
  }
  btn2.onclick = function () {
      if (form2.style.display != "block" && form3.style.display != "block" && form4.style.display != "block" && bcol.style.display != "block" && fcol.style.display != "block") {
          form2.style.display = "block";
          form3.style.display = "block";
          form4.style.display = "block";
          bcol.style.display = "block";
          fcol.style.display = "block";
          bim.style.display = "block";
          btn3.style.display = "none";
          btn4.style.display = "none";
          txt2.style.display = "none";
      }
      else {
          form2.style.display = "none";
          form3.style.display = "none";
          form4.style.display = "none";
          bcol.style.display = "none";
          fcol.style.display = "none";
          colors.style.display = "none";
          bim.style.display = "none";
      }
  }
  for (var i = 0; i < form2.radio.length; i++) {
      form2.radio[i].onclick = function () {
          document.getElementsByClassName('first')[0].style.fontSize = this.value;
      }
  }
  form3.ch1.onchange = function () {
      if (form3.ch1.checked) {
          document.getElementsByClassName('first')[0].style.fontStyle = this.value;
      }
      else {
          document.getElementsByClassName('first')[0].style.fontStyle = "normal";
      }
  }
  form3.ch2.onchange = function () {
      if (form3.ch2.checked) {
          document.getElementsByClassName('first')[0].style.fontWeight = this.value;
      }
      else {
          document.getElementsByClassName('first')[0].style.fontWeight = "normal";
      }
  }
  form3.ch3.onchange = function () {
      if (form3.ch3.checked) {
          document.getElementsByClassName('first')[0].style.textDecoration = this.value;
      }
      else {
          document.getElementsByClassName('first')[0].style.textDecoration = "none";
      }
  }
  form4.select.onchange = function () {
      for (var i = 0; i < form4.select.options.length; i++) {
          if (form4.select.options[i].selected) {
              document.getElementsByClassName('first')[0].style.fontFamily = form4.select.options[i].value;
          }
      }
  }
//  зміна кольору блоку
  bcol.onclick = function () {
      if (colors.style.display != "block") {
          colors.style.display = "block";
      }
      else {
          colors.style.display = "none";
      }
      red.onclick = function () {
          firstd.style.background = "red";
          colors.style.display = "none";
      }
      blue.onclick = function () {
          firstd.style.background = "blue";
          colors.style.display = "none";
      }
      green.onclick = function () {
          firstd.style.background = "green";
          colors.style.display = "none";
      }
      coral.onclick = function () {
          firstd.style.background = "coral";
          colors.style.display = "none";
      }
      violet.onclick = function () {
          firstd.style.background = "darkviolet";
          colors.style.display = "none";
      }
      wheat.onclick = function () {
          firstd.style.background = "wheat";
          colors.style.display = "none";
      }
      brown.onclick = function () {
          firstd.style.background = "brown";
          colors.style.display = "none";
      }
      yellow.onclick = function () {
          firstd.style.background = "yellow";
          colors.style.display = "none";
      }
      grey.onclick = function () {
          firstd.style.background = "grey";
          colors.style.display = "none";
      }
  }
//  зміна кольорів тексту
  fcol.onclick = function () {
      if (colors.style.display != "block") {
          colors.style.display = "block";
      }
      else {
          colors.style.display = "none";
      }
      red.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "red";
          colors.style.display = "none";
      }
      blue.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "blue";
          colors.style.display = "none";
      }
      green.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "green";
          colors.style.display = "none";
      }
      yellow.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "yellow";
          colors.style.display = "none";
      }
      grey.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "grey";
          colors.style.display = "none";
      }
      coral.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "coral";
          colors.style.display = "none";
      }
      violet.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "darkviolet";
          colors.style.display = "none";
      }
      wheat.onclick = function () {
          document.getElementsByClassName('first')[0].style.color = "wheat";
          colors.style.display = "none";
      }
  }
  bim.onclick = function () {
      if (image1.style.display != "block") {
          image1.style.display = "block";
      }
      else {
          image1.style.display = "none";
      }
  }
  btn4.onclick = function () {
      if (document.getElementsByClassName('third')[0].style.display != "block") {
          document.getElementsByClassName('third')[0].style.display = "block";
      }
      else {
          document.getElementsByClassName('third')[0].style.display = "none";
      }
  }
  rt1.onclick = function () {
      ftable.style.display = "block";
      ltable.style.display = "none";
  }
  rl1.onclick = function () {
      ltable.style.display = "block";
      ftable.style.display = "none";
  }
  btn3.onclick = function () {
      if (txt2.value) {
          document.getElementsByClassName('first')[0].innerHTML = txt2.value;
      }
  }
//  добавлення таблиці
  btnt.onclick = function () {
      var newTab = document.createElement('table');
      firstd.appendChild(newTab);
      for (var i = 0; i < selecty.options.length; i++) {
          if (selecty.options[i].selected) {
              newTab.setAttribute("bordercolor", selecty.options[i].value);
              newTab.setAttribute("border", '1');
          }
      }
 
      for (var i = 0; i < tt1.value; i++) {
          var newTr = document.createElement('tr');
          for (var j = 0; j < tt2.value; j++) {
              var newTd = document.createElement('td');
              newTd.innerHTML = "1";
              newTr.appendChild(newTd);
          }
          newTab.appendChild(newTr);
      }
      tt1.value='';
      tt2.value='';
  }
//  добавлення списку
  btnl.onclick = function () {
      var newUl = document.createElement('ul');
      for (var i = 0; i < selectx.options.length; i++) {
          if (selectx.options[i].selected) {
              newUl.setAttribute("type", selectx.options[i].value)
          }
      }
      firstd.appendChild(newUl);
      if (lt1.value > 0 && lt1.value < 99) {
          for (var i = 0; i < lt1.value; i++) {
              var newLi = document.createElement('li');
              newLi.innerHTML = "Hello!";
              document.getElementsByTagName("ul")[0].appendChild(newLi);
          }
          lt1.style.border = "1px solid grey";
          lt1.style.color = "black";
      }
      else {
          alert("Enter a NUMBER between 0 and 99!");
          lt1.style.border = "1px solid red";
          lt1.value = "Wrong input!";
          lt1.style.color = "red";
      }
            lt1.value='';
      lt2.value='';
  }
  //блокування сторінки
  blcb.onclick = function () {
      var pass = "admin";
      for (var i = 0; i < Infinity; i++) {
          var p = prompt("Enter password: ");
          if (p !== pass) {
              alert("Wrong pass! Re-enter!");
          }
          else {
              alert("Unblocked!");
              break;
          }
      }
  }
  //зміна бекграунду сторінки
  x.onclick = function () {
      document.body.style.backgroundImage = "url('./img/518079-background-hd.jpg')";
      image1.style.display = "none";
  }
  y.onclick = function () {
      document.body.style.backgroundImage = "url('./img/abstract-autumn-background.jpg')";
      image1.style.display = "none";
  }
  z.onclick = function () {
      document.body.style.backgroundImage = "url('./img/Alien_Ink_2560X1600_Abstract_Background_1.jpg')";
      image1.style.display = "none";
  }
  q.onclick = function () {
      document.body.style.backgroundImage = "url('./img/red-abstract-bg.jpg')";
      image1.style.display = "none";
  }
  b.onclick = function () {
      document.body.style.backgroundImage = "url('./img/backgrounds_2.jpg')";
      image1.style.display = "none";
  }
  v.onclick = function () {
      document.body.style.backgroundImage = "url('./img/1.jpg')";
      image1.style.display = "none";
  }
