document.addEventListener('DOMContentLoaded', () => {
    const profile_avatar = document.querySelector('.profile-avatar');
    const profile_name = document.querySelector('.profile-name');
    const profile_username = document.querySelector('.profile-username');
    const profile_repositories = document.querySelector('.numbers-item__repositories');
    const profile_followers = document.querySelector('.numbers-item__followers');
    const profile_following = document.querySelector('.numbers-item__Following');
    const profile_link = document.querySelector('.profile-link')

    fetch('https://api.github.com/users/RodrigoRodrigues-dev')
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            profile_avatar.src = json.avatar_url;
            profile_name.innerHTML = json.name;
            profile_username.innerHTML = `@${json.login}`;
            profile_repositories.innerHTML = json.public_repos;
            profile_followers.innerHTML = json.followers;
            profile_following.innerHTML = json.following;
            profile_link.href = json.html_url;
        })
        .catch(error => {
            console.error('Erro:', error.message);
        });
});