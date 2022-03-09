/**
 * Получите атрибут (важность: 5)
 *
 * Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
 *
 * <!DOCTYPE html>
 * <html>
 * <body>
 *
 *   <div data-widget-name="menu">Choose the genre</div>
 *
 *   <script>
 *
 *   </script>
 * </body>
 * </html>
 *
 *
 */

const element = document.querySelector('[data-widget-name]')
const widgetName = element.dataset.widgetName

