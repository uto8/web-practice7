$('.accordion-title a').on('click', (e) => {
  // hrefにページ遷移しない
  e.preventDefault();

  // 同じsection内の.accordion-contentを選択
  const content = $(e.target)
    .closest('section')
    .find('.accordion-content');

  // .accordion-contentが非表示の場合は
  if (!content.is(':visible')) {
    // 表示中のコンテンツを閉じる
    $('.accordion-content:visible').slideUp();

    // クリックされたコンテンツを表示
    content.slideDown();
  }
});


$('.main8-item-img a').on('click', (e) => {
  // hrefにページ遷移しない
  e.preventDefault();

  // 同じsection内の.accordion-contentを選択
  const content = $(e.target)
    .closest('.main8-item')
    .find('.main8-item-explanation');

  // .accordion-contentが非表示の場合は
  if (!content.is(':visible')) {
    // 表示中のコンテンツを閉じる
    $('.main8-item-explanation:visible').slideUp();

    // クリックされたコンテンツを表示
    content.slideDown();
  }
});





const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    // 300px以上スクロールされた
    // ボタンを表示
    $('.back-to-top').fadeIn();
  } else {
    // ボタンを非表示
    $('.back-to-top').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);

// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();

  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 600);
});

// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
updateButton();




$('.down-to-bottom').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();

  const contentsTop = $('#main13').offset().top;
  $('html, body').animate({ scrollTop: contentsTop }, 600);
});
