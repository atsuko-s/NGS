$('.slider').slick({
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    speed: 500, //スライドのスピード。初期値は300。
    slidesToShow: 3, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    centerMode: true, //要素を中央ぞろえにする
    variableWidth: true, //幅の違う画像の高さを揃えて表示
    dots: true, //下部ドットナビゲーションの表示
  });
  
  $(document).ready(function(){
    $('.slider').slick({
        // Slick Slider options here
    });
});

$(window).on('load orientationchange', function() {
  setTimeout(function() {
    var w = window.innerWidth;
    var point = 1000;
    if (w > point) {
      // PC版の処理
      $("body").addClass("pc").removeClass("spn");
      $(".Nav > ul").removeClass("open close").css("display", "block");
      $(".Nav .navbtn a").removeClass("open close").html("<span>メニューを閉じる</span>");
      // メニュー項目の順番を変更
      $(".Nav > ul > li:eq(0)").after($(".Nav > ul > li:eq(1)"));
    } else {
      // 携帯版の処理
      $("body").addClass("spn").removeClass("pc");
      $(".Nav > ul").addClass("close").removeClass("open").css("display", "none");
      $(".Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    }
  }, 100);
});

//resize
$(window).resize(function() {
  var windowWidth = window.innerWidth;
  var point = 1000;
  var timer = false;
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    var ww = $(window).width();
    if (windowWidth != ww) {
      if (windowWidth > point) {
        $("body").addClass("pc").removeClass("spn");
        $(".Nav > ul").removeClass("open close").css("display", "block");
        $(".Nav > ul > li").css("display","inline-block");
        $(".Nav .navbtn a").removeClass("open close").html("<span>メニューを閉じる</span>");
        $(".Nav ul li.parent a").removeClass("open").addClass("close");
        $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      } else { //画面サイズが1000px未満のときの処理
        $("body").addClass("spn").removeClass("pc");
        $(".Nav > ul").addClass("close").removeClass("open").css("display", "none");
        $(".Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
        $(".Nav ul li.parent a").removeClass("open").addClass("close");
        $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      }
    } else {}
  }, 50);
});

//SP nav
$(function() {
  $(".Nav .navbtn a").click(function() {
    if ($(".Nav > ul").css("display") == "none") {
      $(".Nav > ul").addClass("open").removeClass("close").slideDown("fast");
      $(".Nav > ul > li").css("display","block");
      $(this).removeClass("close").addClass("open").html("<span>メニューを閉じる</span>");
    } else {
      $(".Nav > ul").addClass("close").removeClass("open").slideUp("fast");
      $(".Nav ul li.parent").removeClass("open").addClass("close");
      $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      $(this).addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    }

    // ハンバーガーメニュー時にニュースとゲーム概要の順序を逆にする
    if ($(".Nav > ul").hasClass("open")) {
      var newsElement = $(".Nav > ul > li.parent:eq(0)");
      var gameElement = $(".Nav > ul > li.parent:eq(1)");
      if ($("body").hasClass("pc")) {
        // PC版の場合は順序を逆にする
        if (!newsElement.hasClass("game-first")) {
          newsElement.addClass("game-first");
          newsElement.after(gameElement);
        }
      } else {
        // 携帯版の場合は順序を元に戻す
        if (newsElement.hasClass("game-first")) {
          newsElement.removeClass("game-first");
          gameElement.after(newsElement);
        }
      }
    }
  });
});


//SP アンカーリンク
$(function() {
  $("ul.submenu a[href^='#']").click(function(event) {
    $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
    $(".Nav ul li.parent a").removeClass("open").addClass("close");
    $(".spn .Nav > ul").addClass("close").removeClass("open").slideUp("fast");
    $(".spn .Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
  });
});








