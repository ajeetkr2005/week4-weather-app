function saveLastCity(city){
    localStorage.setItem("lastCity", city);
}

function getLastCity(){
    return localStorage.getItem("lastCity");
}