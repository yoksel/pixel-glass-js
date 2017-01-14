# Pixel Glass

<a id="en">**EN**</a> | [RU &darr;](#ru)

**Pixel Glass** is a tiny JavaScript library, it can help you to check out how your markup fits your design. No need to jump to graphical editor and back, no need to leave page every time when you need to look at the design.

It will be very helpful if you make an adaptive design and have more than one design of the page.

## How does it work?

**Pixel Glass** just lets you control your page’s `<body>` opacity. When the `<body>` becomes semi-transparent, you can see designs through it.

Try it on the [**demo page**](https://yoksel.github.io/pixel-glass-js/).

## How to use Pixel Glass in your project?

**1.** Install the package into your project folder via npm:

  ```shell
  npm i pixel-glass --save-dev
  ```

**2.** Place your mock-ups into img (or any other) folder of your project.

**3.** Add this code into `<head>` element of your page:

  ```html
  <!-- Pixel Glass -->
  <style>
    HTML {
      background-repeat: no-repeat;
      background-position:  50% 0;
      /* Mobile layout by default */
      background-image: url( "img/320.png" );
    }
    /* Tablet */
    @media ( min-width: 760px ) {
      HTML {
        /* Tablet layout */
        background-image: url( "img/760.png" );
      }
    }
    /* Desktop */
    @media ( min-width: 960px ) {
      HTML {
        /* Desktop layout */
        background-image: url( "img/960.png" );
      }
    }
  </style>
  <link href="../node_modules/pixel-glass/styles.css" rel="stylesheet">
  <script src="../node_modules/pixel-glass/script.js"></script>
  <!-- // Pixel Glass -->
  ```

  Edit the code to make it fit your project: change media queries or add yours, change image URLs to actual files.

**4.** Save file, update a page and enjoy!

![alt ](https://img-fotki.yandex.ru/get/50623/5091629.a4/0_92173_27b6855f_orig)

[EN &uarr;](#en) | <a id="ru">**RU**</a>

**Pixel Glass** — маленькая библиотека на JavaScript, которая поможет вам проверить насколько разметка страницы соответствует макету, без необходимости запускать графический редактор или уходить со страницы всякий раз, когда вам нужно свериться с макетом.

Она будет полезна, если вы верстаете адаптивный дизайн и у вас есть несколько макетов для разных разрешений экрана.

## Как это работает?

**Pixel Glass** просто управляет прозрачностью элемента `<body>`. Когда `<body>` становится полупрозрачным, через него становятся видны макеты, заданные фоном для `<html>`.

Посмотрите в действии на [**демо-странице**](https://yoksel.github.io/pixel-glass-js/).

## Как использовать Pixel Glass в своём проекте?

**1.** Установите пакет в папку с проектом через npm:

  ```shell
  npm i pixel-glass --save-dev
  ```

**2.** Поместите макеты страниц в ваш проект в папку `img` (или в другую, какая вам нравится).

**3.** Добавьте этот код на вашу страницу в элемент `<head>`:

  ```html
  <!-- Pixel Glass -->
  <style>
    HTML {
      background-repeat: no-repeat;
      background-position:  50% 0;
      /* По умолчанию показывается мобильный макет */
      background-image: url( "img/320.png" );
    }
    /* Планшет */
    @media ( min-width: 760px ) {
      HTML {
        /* Планшетный макет */
        background-image: url( "img/760.png" );
      }
    }
    /* Десктоп */
    @media ( min-width: 960px ) {
      HTML {
        /* Десктопный макет */
        background-image: url( "img/960.png" );
      }
    }
  </style>
  <link href="../node_modules/pixel-glass/styles.css" rel="stylesheet">
  <script src="../node_modules/pixel-glass/script.js"></script>
  <!-- // Pixel Glass -->
  ```

  Отредактируйте код под ваш проект: настройте медиавыражения, поменяйте адреса картинок на рабочие.

**4.** Сохраните файл, обновите страницу и пользуйтесь! : )

![alt ](https://img-fotki.yandex.ru/get/50623/5091629.a4/0_92173_27b6855f_orig)
