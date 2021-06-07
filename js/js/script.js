// Данные для передачи на сервер допустим id товаров и его количество
let from = 1;
let to = 1;
 
// Создаём объект класса XMLHttpRequest
const request = new XMLHttpRequest();
 
const url = "news.php?from=" + from + "&to=" + to;

/* Здесь мы указываем параметры соединения с сервером, т.е. мы указываем метод соединения GET, 
а после запятой мы указываем путь к файлу на сервере который будет обрабатывать наш запрос. */ 
request.open('GET', url);

// Указываем заголовки для сервера, говорим что тип данных, - контент который мы хотим получить должен быть не закодирован. 
request.setRequestHeader('Content-Type', 'application/x-www-form-url');
 
// Здесь мы получаем ответ от сервера на запрос, лучше сказать ждем ответ от сервера 
request.addEventListener("readystatechange", () => {
	
	if (request.readyState === 4 && request.status === 200) {
	
      // выводим в консоль то что ответил сервер
      var jsonData1 = JSON.parse(request.responseText);
      console.log(request.responseText);
      console.log(jsonData1);
        var jsonData = jsonData1;
        for (var i = 0; i < jsonData.length; i++) {
            var post = jsonData[i];
            let newsBody = document.createElement('div');
            newsBody.className = "news-body";

            // let header2 = document.createElement('h2');
            // header2.className = "secondary-heading";
            // header2.innerHTML = post.id;
            // newsBody.append(header2);

            let newsContent = document.createElement('div');
            newsContent.className = "news-content";

            let newsContentImg = document.createElement('div');
            newsContentImg.className = "content-img";
            if (post.media.includes('.mp4')) {
                newsContentImg.innerHTML = "<video id='my-video' class='video-js' controls preload='auto' data-setup='{}'><source src='./media/"+post.media+"' type='video/mp4' /><p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to aweb browser that<a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a></p></video>";
            } else {
                newsContentImg.innerHTML = "<img src='./media/"+ post.media +"' alt='фото контента''>";
            }
            
            newsContent.append(newsContentImg);
            var desc = "";
            if (post.description.length > 0) {
                desc = post.description[0];
            }
            let newsContentDesc = document.createElement('div');
            newsContentDesc.className = "content-desc";
            newsContentDesc.innerHTML = "<div class='desc-text'>"+desc+"</div>";
            
            let newsContentH = document.createElement('div');
            newsContentH.className = "desc-title";
            newsContentH.innerHTML = post.name;

            newsContent.append(newsContentH);
            newsContent.append(newsContentDesc);
            newsBody.append(newsContent);

            var newsGlobal = document.getElementById('containerGlobal');
            newsGlobal.append(newsBody);

        }
    }
});
 
request.send();

 
// // Создаём объект класса XMLHttpRequest
// const request1 = new XMLHttpRequest();
 
// const url1 = 'addpost.php?login=uploadpost&pass=upload111&post={"id":1,"name": "**Синдром барабанных палочек** ", "description": [" Это увеличение кончиков пальцев и наклон ногтей вниз. Хотя это не вызвано хронической обструктивной болезнью легких (ХОБЛ).Немедик👨‍⚕️"], "media": ""}';

// /* Здесь мы указываем параметры соединения с сервером, т.е. мы указываем метод соединения GET, 
// а после запятой мы указываем путь к файлу на сервере который будет обрабатывать наш запрос. */ 
// request1.open('GET', url1);

// // Указываем заголовки для сервера, говорим что тип данных, - контент который мы хотим получить должен быть не закодирован. 
// request1.setRequestHeader('Content-Type', 'application/x-www-form-url');
 
// // Здесь мы получаем ответ от сервера на запрос, лучше сказать ждем ответ от сервера 
// request1.addEventListener("readystatechange", () => {
    
//     if (request1.readyState === 4 && request1.status === 200) {
    
//       // выводим в консоль то что ответил сервер
      
//       console.log(request.responseText);
//     }
// });
 
// request1.send();

