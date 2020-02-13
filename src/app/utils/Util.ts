export function toEpochMillis(time: String) {
    let data = time.split(':');
    let hours = +data[0], minutes = +data[1];
    let date = new Date();
    date.setHours(hours); 
    date.setMinutes(minutes);
    return date.getTime();
}

export function toSeconds(time: String) {
    let data = time.split(':');
    let hours = +data[0], minutes = +data[1];
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.getUTCHours()*60*60 + date.getUTCMinutes()*60;
}