/**
 * Перепишите, используя async/await
 *
 * Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
 * В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
 */

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url)

    if (response.status !== 200) {
        throw new Error(response.status)
    }

    return response.json()
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let user
    let name

    while (true) {
        name = prompt("Введите логин?", "iliakan")

        user = await loadJson(`https://api.github.com/users/${name}`).catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err
            }
        })

        if (user) break
    }

    alert(`Полное имя: ${user.name}.`)
    return user
}

demoGithubUser();