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

## Как выглядит внутри

```jsx
import React from 'react';

import { Form, Input, Button, Title, CardInput } from 'our-design-system';

const AuthFormContext = React.createContext(undefined);

function AuthForm(props) {
    const { theme } = props;
    const memoizedContextValue = React.useMemo(
        () => ({
            theme,
        }),
        [theme],
    );

    return (
        <AuthFormContext.Provider value={ memoizedContextValue }>
            <Form>
                { props.children }
            </Form>
        </AuthFormContext.Provider>
    );
}

function useAuthForm() {
    const context = React.useContext(AuthFormContext);

    if (!context) {
        throw new Error('This component must be used within a <AuthForm> component.');
    }

    return context;
}

AuthForm.Input = function FormInput(props) {
    const { theme } = useAuthForm();
    return <Input theme={theme} {...props} />
};
AuthForm.CardInput = function FormCardInput(props) {
    const { theme } = useAuthForm();
    return <CardInput theme={theme} {...props} />
};
AuthForm.Field = function Field({ children, title }) {
    const { theme } = useAuthForm();
    return (
        <div>
            <Title theme={ theme }>{ title }</Title>
            { children }
        </div>
    )
};
AuthForm.SubmitButton = function SubmitButton(props) {
    const { theme } = useAuthForm();
    return <Button theme={theme} {...props} type="submit" />
};


export default AuthForm;
```

## Когда стоит использовать

Паттерн Compound Components хорошо подходит, если вы делаете какую-то единую структуру, 
части которой хотелось бы сделать как отдельные компоненты, но в отрыве от этой структуры 
они использоваться не будут.

