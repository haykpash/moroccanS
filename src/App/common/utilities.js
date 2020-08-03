export const emailCheck = (email) => {
    var patt = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return patt.test(String(email).toLowerCase());
}

export const nameCheck = (name) => {
    var patt = new RegExp(/^[a-zA-Z]+$/);
    return patt.test(String(name).toLowerCase());
}

export const addressCheck = (address) => {
    var patt = new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/  );
    return patt.test(String(address).toLowerCase());
}