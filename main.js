let users = document.querySelector('.users-box');

async function getUsers() {
    try {
        let ans = await fetch('https://dummyjson.com/users'),
        response = await ans.json(),
        data = response.users;
        console.log(data);
        data.forEach((user) => {
            let userItem = document.createElement('div'),
            firstName = document.createElement('p'),
            lastName = document.createElement('p'),
            age = document.createElement('p'),
            email = document.createElement('a'),
            phone = document.createElement('a')

            userItem.classList.add('users-box__item');
            firstName.classList.add('users-box__text');
            lastName.classList.add('users-box__text');
            age.classList.add('users-box__text');

            firstName.textContent = `Имя: ${user.firstName}`;
            lastName.textContent = `Фамилия: ${user.lastName}`;
            age.textContent = `Возраст: ${user.age}`;
            email.textContent = `Почта: ${user.email}`;
            phone.textContent = `Телефон: ${user.phone}`;

            email.setAttribute('href', `mailto: ${user.email}`);
            phone.setAttribute('href', `mailto: ${user.phone}`);

            

            firstName.style.fontSize = '20px';
            lastName.style.fontSize = '20px';
            
            userItem.append(firstName);userItem.append(lastName);userItem.append(age);userItem.append(email);userItem.append(phone);users.append(userItem);
        })    
    } catch {
        console.error(error);
    }
    
}

getUsers();
