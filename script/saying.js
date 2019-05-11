var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var saying_content = document.getElementById('saying_content');
      saying_content.innerText = data.hitokoto ; 
       var saying_from = document.getElementById('saying_from');
      saying_from.innerText = "--"+data.from ;
    }
  }
  xhr.send();