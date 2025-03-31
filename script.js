const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html", "color": "#e74c3c" }, 
    "task2": { "title": "Project 2", "url": "works/task2/index.html", "color": "#3498db" }, 
    "task3": { "title": "Project 3", "url": "works/task3/index.html", "color": "#2ecc71" }  
};

function createNavBar() {
    const navbar = document.querySelector('.navbar');
    Object.keys(works).forEach((key, index) => {
        const button = document.createElement('button');
        button.textContent = works[key].title;
        button.style.backgroundColor = works[key].color; 
        button.style.color = "white";
        button.style.border = "none";
        button.style.padding = "10px 15px";
        button.style.cursor = "pointer";
        button.style.borderRadius = "5px";
        button.style.fontSize = "16px";
        button.style.transition = "background 0.3s ease, transform 0.2s ease";
        button.onmouseover = () => button.style.opacity = "0.8";
        button.onmouseout = () => button.style.opacity = "1";
        button.onclick = () => changeContent(key);
        navbar.appendChild(button);
    });
}

function changeContent(projectKey) {
    const content = document.querySelector('.content');
    content.innerHTML = `<iframe src="${works[projectKey].url}" width="100%" height="500px" frameborder="0"></iframe>`;
}

createNavBar();
