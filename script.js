
//Time variables using "moment.js"
let cDate = moment().format('Do');
let cMonth = moment().format('MMMM');
let cDay = moment().format('dddd');

//HTML elements Variables
let pDay = $('#currentDay');
let Hours = $('.description');

//All saveBtns
let saveBtn = $('.saveBtn');

//◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈-- Program starts here! --◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
$(document).ready(function () {
    //◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅◅▻-- Current Date Display --◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻
    $('#currentDay').text(cDay + ', ' + cMonth + ' ' + cDate);
    //Local time variables
    let currentDate = new Date();
    let cHour = currentDate.getHours();

    //◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻-- Color Blocks --◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻◅▻
    $( '.description' ).each(function( i ) {
        if ( i < cHour ) {
            $(Hours[i]).addClass('past');
        } 
        else if (i == cHour) {
            $(Hours[i]).addClass('present');
        }
        else {
            $(Hours[i]).addClass('future');
        }
    });
    //◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈-- Get Local Storage and Display on Screen --◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    $(Hours[0]).text(localStorage.getItem('12AM'));
    $(Hours[1]).text(localStorage.getItem('1AM'));
    $(Hours[2]).text(localStorage.getItem('2AM'));
    $(Hours[3]).text(localStorage.getItem('3AM'));
    $(Hours[4]).text(localStorage.getItem('4AM'));
    $(Hours[5]).text(localStorage.getItem('5AM'));
    $(Hours[6]).text(localStorage.getItem('6AM'));
    $(Hours[7]).text(localStorage.getItem('7AM'));
    $(Hours[8]).text(localStorage.getItem('8AM'));
    $(Hours[9]).text(localStorage.getItem('9AM'));
    $(Hours[10]).text(localStorage.getItem('10AM'));
    $(Hours[11]).text(localStorage.getItem('11AM'));
    $(Hours[12]).text(localStorage.getItem('12PM'));
    $(Hours[13]).text(localStorage.getItem('1PM'));
    $(Hours[14]).text(localStorage.getItem('2PM'));
    $(Hours[15]).text(localStorage.getItem('3PM'));
    $(Hours[16]).text(localStorage.getItem('4PM'));
    $(Hours[17]).text(localStorage.getItem('5PM'));
    $(Hours[18]).text(localStorage.getItem('6PM'));
    $(Hours[19]).text(localStorage.getItem('7PM'));
    $(Hours[20]).text(localStorage.getItem('8PM'));
    $(Hours[21]).text(localStorage.getItem('9PM'));
    $(Hours[22]).text(localStorage.getItem('10PM'));
    $(Hours[23]).text(localStorage.getItem('11PM'));

    //◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈-- Save Buttons events --◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    //12 AM
    $(saveBtn[0]).on("click", function(){
        if (localStorage.getItem('12AM') === null){
            localStorage.setItem('12AM', $(Hours[0]).text());
        }
        else {
           localStorage.removeItem('12AM');
           localStorage.setItem('12AM', $(Hours[0]).text());
        }
    })
    //1 AM
    $(saveBtn[1]).on("click", function(){
        if (localStorage.getItem('1AM') === null){
            localStorage.setItem('1AM', $(Hours[1]).text());
        }
        else {
           localStorage.removeItem('1AM');
           localStorage.setItem('1AM', $(Hours[1]).text());
        }
    })
    //2 AM
    $(saveBtn[2]).on("click", function(){
        if (localStorage.getItem('2AM') === null){
            localStorage.setItem('2AM', $(Hours[2]).text());
        }
        else {
            localStorage.removeItem('2AM');
            localStorage.setItem('2AM', $(Hours[2]).text());
        }
    })
    //3 AM
    $(saveBtn[3]).on("click", function(){
        if (localStorage.getItem('3AM') === null){
            localStorage.setItem('3AM', $(Hours[3]).text());
        }
        else {
            localStorage.removeItem('3AM');
            localStorage.setItem('3AM', $(Hours[3]).text());
        }
    })
    //4 AM
    $(saveBtn[4]).on("click", function(){
        if (localStorage.getItem('4AM') === null){
            localStorage.setItem('4AM', $(Hours[4]).text());
        }
        else {
            localStorage.removeItem('4AM');
            localStorage.setItem('4AM', $(Hours[4]).text());
        }
    })
    //5 AM
    $(saveBtn[5]).on("click", function(){
        if (localStorage.getItem('5AM') === null){
            localStorage.setItem('5AM', $(Hours[5]).text());
        }
        else {
            localStorage.removeItem('5AM');
            localStorage.setItem('5AM', $(Hours[5]).text());
        }
    })
    //6 AM
    $(saveBtn[6]).on("click", function(){
        if (localStorage.getItem('6AM') === null){
            localStorage.setItem('6AM', $(Hours[6]).text());
        }
        else {
            localStorage.removeItem('6AM');
            localStorage.setItem('6AM', $(Hours[6]).text());
        }
    })
    //7 AM
    $(saveBtn[7]).on("click", function(){
        if (localStorage.getItem('7AM') === null){
            localStorage.setItem('7AM', $(Hours[7]).text());
        }
        else {
            localStorage.removeItem('7AM');
            localStorage.setItem('7AM', $(Hours[7]).text());
        }
    })
    //8 AM
    $(saveBtn[8]).on("click", function(){
        if (localStorage.getItem('8AM') === null){
            localStorage.setItem('8AM', $(Hours[8]).text());
        }
        else {
            localStorage.removeItem('8AM');
            localStorage.setItem('8AM', $(Hours[8]).text());
        }
    })
    //9 AM
    $(saveBtn[9]).on("click", function(){
        if (localStorage.getItem('9AM') === null){
            localStorage.setItem('9AM', $(Hours[9]).text());
        }
        else {
            localStorage.removeItem('9AM');
            localStorage.setItem('9AM', $(Hours[9]).text());
        }
    })
    //10 AM
    $(saveBtn[10]).on("click", function(){
        if (localStorage.getItem('10AM') === null){
            localStorage.setItem('10AM', $(Hours[10]).text());
        }
        else {
            localStorage.removeItem('10AM');
            localStorage.setItem('10AM', $(Hours[10]).text());
        }
    })
    //11 AM
    $(saveBtn[11]).on("click", function(){
        if (localStorage.getItem('11AM') === null){
            localStorage.setItem('11AM', $(Hours[11]).text());
        }
        else {
            localStorage.removeItem('11AM');
            localStorage.setItem('11AM', $(Hours[11]).text());
        }
    })
    //12 PM
    $(saveBtn[12]).on("click", function(){
        if (localStorage.getItem('12PM') === null){
            localStorage.setItem('12PM', $(Hours[12]).text());
        }
        else {
            localStorage.removeItem('12PM');
            localStorage.setItem('12PM', $(Hours[12]).text());
        }
    })
    //1 PM
    $(saveBtn[13]).on("click", function(){
        if (localStorage.getItem('1PM') === null){
            localStorage.setItem('1PM', $(Hours[13]).text());
        }
        else {
            localStorage.removeItem('1PM');
            localStorage.setItem('1PM', $(Hours[13]).text());
        }
    })
    //2 PM
    $(saveBtn[14]).on("click", function(){
        if (localStorage.getItem('2PM') === null){
            localStorage.setItem('2PM', $(Hours[14]).text());
        }
        else {
            localStorage.removeItem('2PM');
            localStorage.setItem('2PM', $(Hours[14]).text());
        }
    })
    //3 PM
    $(saveBtn[15]).on("click", function(){
        if (localStorage.getItem('3PM') === null){
            localStorage.setItem('3PM', $(Hours[15]).text());
        }
        else {
            localStorage.removeItem('3PM');
            localStorage.setItem('3PM', $(Hours[15]).text());
        }
    })
    //4 PM
    $(saveBtn[16]).on("click", function(){
        if (localStorage.getItem('4PM') === null){
            localStorage.setItem('4PM', $(Hours[16]).text());
        }
        else {
            localStorage.removeItem('4PM');
            localStorage.setItem('4PM', $(Hours[16]).text());
        }
    })
    //5 PM
    $(saveBtn[17]).on("click", function(){
        if (localStorage.getItem('5PM') === null){
            localStorage.setItem('5PM', $(Hours[17]).text());
        }
        else {
            localStorage.removeItem('5PM');
            localStorage.setItem('5PM', $(Hours[17]).text());
        }
    })
    //6 PM
    $(saveBtn[18]).on("click", function(){
        if (localStorage.getItem('6PM') === null){
            localStorage.setItem('6PM', $(Hours[18]).text());
        }
        else {
            localStorage.removeItem('6PM');
            localStorage.setItem('6PM', $(Hours[18]).text());
        }
    })
    //7 PM
    $(saveBtn[19]).on("click", function(){
        if (localStorage.getItem('7PM') === null){
            localStorage.setItem('7PM', $(Hours[19]).text());
        }
        else {
            localStorage.removeItem('7PM');
            localStorage.setItem('7PM', $(Hours[19]).text());
        }
    })
    //8 PM
    $(saveBtn[20]).on("click", function(){
        if (localStorage.getItem('8PM') === null){
            localStorage.setItem('8PM', $(Hours[20]).text());
        }
        else {
            localStorage.removeItem('8PM');
            localStorage.setItem('8PM', $(Hours[20]).text());
        }
    })
    //9 PM
    $(saveBtn[21]).on("click", function(){
        if (localStorage.getItem('9PM') === null){
            localStorage.setItem('9PM', $(Hours[21]).text());
        }
        else {
            localStorage.removeItem('9PM');
            localStorage.setItem('9PM', $(Hours[21]).text());
        }
    })
    //10 PM
    $(saveBtn[22]).on("click", function(){
        if (localStorage.getItem('10PM') === null){
            localStorage.setItem('10PM', $(Hours[22]).text());
        }
        else {
            localStorage.removeItem('10PM');
            localStorage.setItem('10PM', $(Hours[22]).text());
        }
    })
    //11 PM
    $(saveBtn[23]).on("click", function(){
        if (localStorage.getItem('11PM') === null){
            localStorage.setItem('11PM', $(Hours[23]).text());
        }
        else {
            localStorage.removeItem('11PM');
            localStorage.setItem('11PM', $(Hours[23]).text());
        }
    })
})
//◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
//◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈-- END --◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
//◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

