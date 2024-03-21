export function setCookie(key, value, expiry){
    if(typeof document !== 'undefined'){
        document.cookie = `${key} = ${value} ;${expiry}`
    }
}

export function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}
