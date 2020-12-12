
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