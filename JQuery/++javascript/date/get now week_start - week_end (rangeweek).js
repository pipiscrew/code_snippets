//http://stackoverflow.com/a/18884615
function rangeWeek (dateStr) {
    if (!dateStr) dateStr = new Date().getTime();
    var dt = new Date(dateStr);
    dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    dt = new Date(dt.getTime() - (dt.getDay() > 0 ? (dt.getDay() - 1) * 1000 * 60 * 60 * 24 : 6 * 1000 * 60 * 60 * 24));
    return { start: dt, end: new Date(dt.getTime() + 1000 * 60 * 60 * 24 * 7 - 1) };
}

console.log(rangeWeek());
console.log(rangeWeek('2013/9/1'));