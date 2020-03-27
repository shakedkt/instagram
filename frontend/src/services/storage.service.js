function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}


function store(key, val) {
    localStorage[key] = JSON.stringify(val);
}

export const storageService = {
    load,
    store

}