const loadDOM = (path) => {
    alert(1);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", path, false);
    alert(1);
    xhr.send();
    document.write(xhr.response);
};
