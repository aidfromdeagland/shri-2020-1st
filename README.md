  ### Ну вроде бы всё ###

  #### Заводим пепелац: ####
1. Установить зависимости: npm i;
2. Сборка запускается командой  npm run build. 
<hr>

  Привет!

  Исходники расположены в папке `/src`. Бандлы - в папке `/build`.

  Захотелось набрать дополнительных баллов за препроцессоры/сборку/минификацию, поэтому решил использовать sass и webpack. Знакомство у меня с этим поверхностное, вряд ли мои решения эталонны, но, вроде, работают)

  Из функционала препроцессора использовал только конкатенацию вложенных селекторов. Препроцессорные переменные не трогал, использовал css custom properties. Декларацию css-свойств оформил в виде `style.scss` в корне `/src`, в котором подключил все модули из папки `/blocks` с помощью `@import`. Для обработчиков на `<body>` не нашел ничего лучше, как оформить это отдельным модулем `body.js`, стилевой нормалайз типа `body {margin: 0}` и `box-sizing` оформил тоже в модуле `body.scss` хотя, полагаю, это не вяжется с БЭМ.

  Было мучительно сложно в авральном режиме разбираться с webpack, поэтому старался по возможности его избегать. Порадовало, что webpack в production-mode сам оптимизирует бандлы - не пришлось заморачиваться с минификаторами/обфускаторами.

  Задание классное, спасибо)
