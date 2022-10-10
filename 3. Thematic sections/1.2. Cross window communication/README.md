# Общение между окнами

Политика «Одинакового источника» (Same Origin) ограничивает доступ окон и фреймов друг к другу.

Идея заключается в том, что если у пользователя открыто две страницы: 
`john-smith.com` и `gmail.com`, то у скрипта со страницы `john-smith.com` не будет возможности прочитать письма из `gmail.com`.

> Два URL имеют «одинаковый источник» в том случае, если они имеют совпадающие протокол, домен и порт.

## Доступ к содержимому iframe

Внутри `<iframe>` находится по сути отдельное окно с 
собственными объектами `document` и `window`.

Мы можем обращаться к ним, используя свойства:

- `iframe.contentWindow` ссылка на объект `window` внутри `<iframe>`.
- `iframe.contentDocument` – ссылка на объект `document` внутри `<iframe>`, короткая запись для `iframe.contentWindow.document`.

## Окна на поддоменах: document.domain

Если в окнах открыты страницы с поддоменов одного домена 2-го уровня, 
например `john.site.com`, `peter.site.com` и `site.com` (так что их общий домен `site.com`), 
то можно заставить браузер игнорировать это отличие. Так что браузер сможет считать их пришедшими с одного источника 
при проверке возможности доступа друг к другу.

Для этого в каждом таком окне нужно запустить:

```javascript
document.domain = 'site.com';
```

## iframe, подождать документ

> Нам не следует работать с документом ещё не загруженного ифрейма, так как это не тот документ.

Как поймать момент, когда появится правильный документ?

Можно проверять через `setInterval`:

```html
<iframe src="/" id="iframe"></iframe>

<script>
  let oldDoc = iframe.contentDocument;

  // каждый 100 мс проверяем, не изменился ли документ
  let timer = setInterval(() => {
    let newDoc = iframe.contentDocument;
    if (newDoc == oldDoc) return;

    alert("New document is here!");

    clearInterval(timer); // отключим setInterval, он нам больше не нужен
  }, 100);
</script>
```

## Коллекция window.frames

Другой способ получить объект window из `<iframe>` – 
забрать его из именованной коллекции `window.frames`:

- По индексу: `window.frames[0]` – объект `window` для первого фрейма в документе.
- По имени: `window.frames.iframeName` – объект `window` для фрейма со свойством `name="iframeName"`.

```html
<iframe src="/" style="height:80px" name="win" id="iframe"></iframe>

<script>
  alert(iframe.contentWindow == frames[0]); // true
  alert(iframe.contentWindow == frames.win); // true
</script>
```

## Атрибут iframe sandbox

Атрибут sandbox позволяет наложить ограничения на действия внутри `iframe`, 
чтобы предотвратить выполнение ненадёжного кода. 
Атрибут помещает `iframe` в «песочницу», отмечая его как имеющий другой источник и/или накладывая 
на него дополнительные ограничения.

- `allow-same-origin`
  - `sandbox` принудительно устанавливает «другой источник» для ифрейма. 
  - Эта опция отключает это ограничение.
- `allow-top-navigation`
  - Позволяет ифрейму менять `parent.location`
- `allow-forms`
  - Позволяет отправлять формы из ифрейма.
- `allow-scripts`
  - Позволяет запускать скрипты из ифрейма.
- `allow-popups`
  - Позволяет открывать всплывающие окна из ифрейма с помощью `window.open`.

Есть еще опции, но это основные.

## Обмен сообщениями между окнами

Интерфейс `postMessage` позволяет окнам общаться между собой независимо от их происхождения.

Это способ обойти политику «Одинакового источника». 
Он позволяет обмениваться информацией, скажем `john-smith.com` и `gmail.com`, 
но только в том случае, если оба сайта согласны и вызывают соответствующие JavaScript-функции. 
Это делает общение безопасным для пользователя.

Интерфейс имеет две части:

### postMessage

Окно, которое хочет отправить сообщение, должно вызвать метод `postMessage` окна получателя.

Другими словами, если мы хотим отправить сообщение в окно `win`, тогда нам следует 
вызвать `win.postMessage(data, targetOrigin)`.

```html
<iframe src="http://example.com" name="example">

<script>
  let win = window.frames.example;

  win.postMessage("message", "http://example.com");
</script>
```

### Событие message

```javascript
window.addEventListener("message", function(event) {
  if (event.origin != 'http://javascript.info') {
    // что-то пришло с неизвестного домена. Давайте проигнорируем это
    return;
  }

  alert( "received: " + event.data );

  // can message back using event.source.postMessage(...)
});
```

> #### Без задержек
>
> Между `postMessage` и событием `message` не существует задержки. 
> Событие происходит синхронно, быстрее, чем `setTimeout(...,0)`.

