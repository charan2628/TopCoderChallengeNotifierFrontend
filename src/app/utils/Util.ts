export function toEpochMillis(time: String) {
    let data = time.split(':');
    let hours = +data[0], minutes = +data[1];
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.getTime();
}

export function timeToEpoch(time: number) {
    let minutes = time/60;
    let hours = minutes/60;
    let date = new Date();
    date.setUTCHours(hours);
    date.setUTCMinutes(minutes % 60);
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
