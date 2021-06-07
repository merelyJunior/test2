function getJsonNews(from, to) {
  // Создаём объект класса XMLHttpRequest
  const request = new XMLHttpRequest();

  const url = "news.php?from=" + from + "&to=" + to;

  /* Здесь мы указываем параметры соединения с сервером, т.е. мы указываем метод соединения GET, 
    а после запятой мы указываем путь к файлу на сервере который будет обрабатывать наш запрос. */
  request.open("GET", url);

  // Указываем заголовки для сервера, говорим что тип данных, - контент который мы хотим получить должен быть не закодирован.
  request.setRequestHeader("Content-Type", "application/x-www-form-url");

  // Здесь мы получаем ответ от сервера на запрос, лучше сказать ждем ответ от сервера
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // выводим в консоль то что ответил сервер
      var jsonData1 = JSON.parse(request.responseText);
      // console.log(request.responseText);
      console.log("load from=" + from + " to=" + to);
      var jsonData = jsonData1;
      for (var i = 0; i < jsonData.length; i++) {
        var post = jsonData[i];
        let newsBody = document.createElement("div");
        newsBody.className = "news-body";

        let header2 = document.createElement("h2");
        header2.className = "secondary-heading";
        header2.innerHTML = post.name;
        newsBody.append(header2);

        let newsContent = document.createElement("div");
        newsContent.className = "news-content";

        let newsContentImg = document.createElement("div");
        newsContentImg.className = "content-img";
        if (post.media.includes(".mp4")) {
          newsContentImg.innerHTML =
            "<video id='my-video' class='video-js' controls preload='auto' data-setup='{}'><source src='./media/" +
            post.media +
            "' type='video/mp4' /><p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to aweb browser that<a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a></p></video>";
        } else {
          newsContentImg.innerHTML =
            "<img src='./media/" + post.media + "' alt='фото контента''>";
        }

        newsContent.append(newsContentImg);

        let newsContentDesc = document.createElement("div");
        newsContentDesc.className = "content-desc";
        newsContentDesc.innerHTML =
          "<div class='desc-text'><p>" + post.description + "</p></div>";

        // let newsContentH = document.createElement('div');
        // newsContentH.className = "desc-title";
        // newsContentH.innerHTML = post.name;

        // newsContent.append(newsContentH);
        newsContent.append(newsContentDesc);
        newsBody.append(newsContent);

        var newsGlobal = document.getElementById("containerGlobal");
        newsGlobal.append(newsBody);
      }
    }
  });

  request.send();
}
var from1 = 1;
getJsonNews(from1, 10);
from1 += 10;
var repeat1 = false;
window.addEventListener("scroll", function () {
  var arr = document.getElementsByClassName("news-body");
  var last = arr[arr.length - 1];

  if (
    last.getBoundingClientRect().top <= window.innerHeight - 230 &&
    last.getBoundingClientRect().bottom >= 250 &&
    !repeat1
  ) {
    // console.log('kek');
    repeat1 = true;
    getJsonNews(from1, from1 + 10);
    from1 += 10;
  }
  setTimeout("repeat1 = false;", 1000);
});

$(document).ready(function () {
  // Slider owl--------------------------------------
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    margin: 20,
    center: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='./img/icons/Button1.png'>",
      "<img src='./img/icons/Button2.png'>",
    ],
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
        margin: 10,
      },
      1000: {
        items: 5,
      },
    },
  });
  // Magnific popup--------------------------------------
  $(".show-popup").magnificPopup({
    type: "inline",
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});
