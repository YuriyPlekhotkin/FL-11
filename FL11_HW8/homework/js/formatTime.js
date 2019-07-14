function formatTime(minutes) {
    return Math.floor(minutes / 1440) +
        "day(s)" + Math.floor(minutes / 60) +
        "hour(s)" + minutes % 60 + "minute(s).";
}
formatTime();