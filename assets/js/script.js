var todayIs = moment();
$('#currentDay').text(todayIs.format('dddd, MMMM Do'));
var textArea = $('textarea');
var saveBtn = $('saveBtn');
var currentHour = moment().format('H');
console.log(currentHour)

var nine = moment(9, 'H').isBefore();
var ten = moment(10, 'H').isBefore();
var eleven = moment(11, 'H').isBefore();
var twelve = moment(12, 'H').isBefore();
var one = moment(13, 'H').isBefore();
var two = moment(14, 'H').isBefore();
var three = moment(15, 'H').isBefore();
var four = moment(16, 'H').isBefore();
var five = moment(17, 'H').isBefore();

textArea.each(function(i){
    if (currentHour > i+9) {$(this).addClass('past')}
    if (currentHour == i+9) {$(this).addClass('present')}
    if (currentHour < i+9) {$(this).addClass('future')}
})

$(".present").click(function () {
    $(this).toggleClass("red");
 });




 

saveBtn.on('click',pushStorage)


function pushStorage() {
    $(this).parent().siblings('textarea').each(function(i){
        textArea[i] = $(this).val()
        localStorage.setItem(textArea)
    })
}

function init() {
allStorage();

function allStorage() {
    debugger;
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while (i--){
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
        
    }  
}

setInterval(displayTime, 1000);

