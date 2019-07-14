function formatTime(minutes) {
    return Math.floor(minutes / 1440) +
        ' day(s) ' + Math.floor(Math.abs(minutes / 1440 - Math.floor(minutes / 1440)) * 24) + ' hour(s) ' +
        minutes % 60 + ' minute(s).';
}
formatTime();