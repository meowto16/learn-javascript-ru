# Улучшаем качество кода React-приложения с помощью Compound Components

- Автор: Александр Дунай (Альфа-Банк)
- Видео: https://www.youtube.com/watch?v=4BByJUk5x7M
- Статья на Habr: https://habr.com/ru/company/alfa/blog/647013/

## Compound Components

Общая идея заключается в том, что есть зависимые друг от друга компоненты. Например:

```jsx
<select name="office">
  <option value="Dwight">Dwight</option>
  <option value="Micheal">Micheal</option>
  <option value="Jim">Jim</option>
  <option value="Beesly">Beesly</option>
</select>
```

Как видно из примера выше, `<option />` не может использоваться вне `<select />`.

А вот уже пример автора:

```jsx
export default function LoginAuth() {
  return (
    <AuthForm theme="dark">
      <AuthForm.AuthTitle />
      <AuthForm.LoginInput />
      <AuthForm.PasswordInput />
      <AuthForm.SubmitButton />
    </AuthForm>
  )
}
```

Чем-то похоже на БЭМ. Элементы не существуют вне блока. Модификаторы - это пропсы.

