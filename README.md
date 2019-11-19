![Quasar Framework logo](https://cdn.rawgit.com/quasarframework/quasar-art/863c14bd/dist/svg/quasar-logo-full-inline.svg)

# Quasar App Codesandbox Template
> A Template for using Quasar on Codesandbox.io.

![Codesanbox Entry Server Screen](https://cdn.quasar.dev/codesandbox/codesandbox-entry.jpg)

Это шаблон, используемый для шаблона сервера, находящегося на странице [Codesandbox.io](https://codesandbox.io). Шаблон создает полное приложение, работающее в режиме сервера разработки. С приложением, запущенным в Codesandbox, можно работать с приложением FULL Quasar, а не только с версией UMD, как это происходит с Codepen и JSFiddle.

## Цель

Цель этого шаблона на Codesandbox заключается в том, чтобы разработчики могли создавать более сложные примеры своего кода. Эти примеры затем могут быть использованы как для обучения и/или обучения других разработчиков по использованию Quasar, так и для устранения неполадок с основной командой разработчиков Quasar.

## Использование

Использование этого шаблона потребует от вас регистрации в качестве пользователя Codesandbox. Регистрация в настоящее время работает только на Github, поэтому вам понадобится учетная запись.

После того, как вы зарегистрировались в Codesandbox, чтобы запустить шаблон, просто нажмите на кнопку "создать песочницу" в верхней части экрана. [Codesandbox.io index page](https://codesandbox.io).

Затем нажмите на кнопку "шаблоны сервера", а затем на кнопку "Квазар".

![Codesanbox Start Server Screen](https://cdn.quasar.dev/codesandbox/codesandbox-start.jpg)

Сервер и контейнер запустятся автоматически. Как только вы внесете какие-либо изменения и сохраните их, Codesandbox автоматически раскроет песочницу для вас.

## Different Modes

Этот шаблон в настоящее время загружает режим приложения * SPA * Quasar.

Если вы хотите работать с PWA или SSR версиями Quasar, внесите следующие изменения в записи сценария 'start' в 'package.json'.

#### PWA

```json

 "scripts": {
    "start": "quasar dev -m pwa",

```

#### SSR

```json

 "scripts": {
    "start": "quasar dev -m ssr",

```

После изменения записи "start" сценариев в файле "package.json" необходимо просто перезапустить сервер контейнера.

![Codesanbox Restart Server Screen](https://cdn.quasar.dev/codesandbox/codesandbox-restart-server.jpg)

После этого потребуется около минуты, чтобы перезагрузить приложение в новом режиме.

## Quasar Repositories

* [Quasar Framework](https://github.com/quasarframework/quasar)

## Contributing

Мы будем рады, если вы захотите внести свой вклад в Quasar в любой форме (сообщить об ошибках, написать плагин, исправить проблему, написать новую функцию, помочь с документацией). Любая помощь очень ценится!

## License

Copyright (c) 2016-present Razvan Stoenescu

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
