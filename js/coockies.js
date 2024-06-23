var coockies = (decodeURIComponent(document.cookie)).split(';');

var size = 0;

getSize();
//alert(coockies);
loadUsersIntoTable();

function saveUser(pictureUrl, fullName, email, phoneNumber) {
    var user = "user_" + (size + 1);
    document.cookie = user + "_PictureUrl_=" + pictureUrl;
    document.cookie = user + "_FullName_=" + fullName;
    document.cookie = user + "_Email_=" + email;
    document.cookie = user + "_PhoneNumber_=" + phoneNumber;
    size++;
    saveSize()
    return size;
}

function getUsers() {
    var users = [];
    for (var i = 0; i <= coockies.length; i++) {
        let coockie = "";
        coockie = coockies[i];
        coockie += "";
        while (coockie.charAt(0) == ' ') {
            coockie = coockie.substring(1);
        }
        if (coockie.indexOf("user") == 0) {
            var userFragments = coockie.split('_');
            var indexOfUser = parseInt(userFragments[1]);
            //alert("index " + indexOfUser);
            switch (userFragments[2]) {
                case "PictureUrl":
                    users[indexOfUser] = [];
                    users[indexOfUser][0] = userFragments[3].substring(1)
                    break;
                case "FullName":
                    users[indexOfUser][1] = userFragments[3].substring(1);
                    break;
                case "Email":
                    users[indexOfUser][2] = userFragments[3].substring(1);
                    break;
                case "PhoneNumber":
                    users[indexOfUser][3] = userFragments[3].substring(1);
                    break;
                default:
                    break;
            }
        }
    }
    return users;
}

function loadUsersIntoTable() {
    //var table = document.getElementById("table");
    //var users = getUsers();

    //var row = table.insertRow(1);

    //var cell0 = row.insertCell(0);
    //var cell1 = row.insertCell(1);
    //var cell2 = row.insertCell(2);
    //var cell3 = row.insertCell(3);
    //var cell4 = row.insertCell(4);

    var table = document.getElementById("table");
    var users = getUsers();

    for (var i = 1; i < users.length; i++) {
        var row = table.insertRow(i);

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);



        cell0.innerHTML = "<p>" + i + "</p>";
        cell1.innerHTML = "<img src= '" + users[i][0] + "' width=100>";
        cell2.innerHTML = "<p>" + users[i][1] + "</p>";
        cell3.innerHTML = "<p>" + users[i][2] + "</p>";
        cell4.innerHTML = "<p>" + users[i][3] + "</p>";
    }
}

function getSize() {
    for (var i = 0; i <= coockies.length; i++) {
        let coockie = "";
        coockie = coockies[i];
        coockie += "";
        while (coockie.charAt(0) == ' ') {
            coockie = coockie.substring(1);
        }
        if (coockie.indexOf("size") == 0) {
            var keyValue = coockie.split('=');
            size = parseInt(keyValue[1]);
        }
    }
}

function saveSize() {
    document.cookie = "size=" + size;
}

