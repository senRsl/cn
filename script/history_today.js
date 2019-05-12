var xhr_ht = new XMLHttpRequest();
  xhr_ht.open('get', 'https://api.66mz8.com/api/today.php?format=json');
  xhr_ht.onreadystatechange = function () {
    if (xhr_ht.readyState === 4) {
      var data = JSON.parse(xhr_ht.responseText);
      if(200 == data.code){
      var ht_title = document.getElementById('ht_title');
      ht_title.innerText = data.day ;

      var ht_content = document.getElementById('ht_content');
      var arrContent = data.content;

      for (var i = arrContent.length - 1; i >= 0; i--) {
        ht_content.innerText += arrContent[i]+"\n";
      }
      }

    }
  }
  xhr_ht.send();