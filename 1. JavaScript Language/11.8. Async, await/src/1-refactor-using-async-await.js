/**
 * Перепишите, используя async/await
 *
 * Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
 */

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

// После:

async function loadJson(url) {
    const response = await fetch(url)

    if (response.status !== 200) {
        throw new Error(response.status)
    }

    return response.json()
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404