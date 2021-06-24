// Edit DATA
//--->button > edit > start	
$(document).on('click', '.btn_edit', function(event) 
{
	event.preventDefault();
	var tbl_row = $(this).closest('tr');

	var row_id = tbl_row.attr('row_id');

	tbl_row.find('.btn_save').show();
	tbl_row.find('.btn_cancel').show();

	//hide edit button
	tbl_row.find('.btn_edit').hide(); 

	//make the whole row editable
	tbl_row.find('.row_data')
	.attr('contenteditable', 'true')
	.attr('edit_type', 'button')
	.addClass('bg-warning')
	.css('padding','3px')

	//--->add the original entry > start
	tbl_row.find('.row_data').each(function(index, val) 
	{  
		//this will help in case user decided to click on cancel button
		$(this).attr('original_entry', $(this).html());
	}); 		
	//--->add the original entry > end

});
//--->button > edit > end

//--->button > cancel > start	
$(document).on('click', '.btn_cancel', function(event) 
{
	event.preventDefault();

	var tbl_row = $(this).closest('tr');

	var row_id = tbl_row.attr('row_id');

	//hide save and cacel buttons
	tbl_row.find('.btn_save').hide();
	tbl_row.find('.btn_cancel').hide();

	//show edit button
	tbl_row.find('.btn_edit').show();

	//make the whole row editable
	tbl_row.find('.row_data')
	.attr('edit_type', 'click')	 
	.removeClass('bg-warning')
	.css('padding','') 

	tbl_row.find('.row_data').each(function(index, val) 
	{   
		$(this).html( $(this).attr('original_entry') ); 
	});  
});
//--->button > cancel > end


//--->save whole row entery > start	
$(document).on('click', '.btn_save', function(event) 
{
	event.preventDefault();
	var tbl_row = $(this).closest('tr');

	var row_id = tbl_row.attr('row_id');

	
	//hide save and cacel buttons
	tbl_row.find('.btn_save').hide();
	tbl_row.find('.btn_cancel').hide();

	//show edit button
	tbl_row.find('.btn_edit').show();


	//make the whole row editable
	tbl_row.find('.row_data')
	.attr('edit_type', 'click')	
	.removeClass('bg-warning')
	.css('padding','') 

	//--->get row data > start
	var arr = {}; 
	tbl_row.find('.row_data').each(function(index, val) 
	{   
		var col_name = $(this).attr('col_name');  
		var col_val  =  $(this).html();
		arr[col_name] = col_val;
	});
	//--->get row data > end

	//use the "arr"	object for your ajax call
	$.extend(arr, {row_id:row_id});

	//out put to show
	$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>')
	 

});
//--->save whole row entery > end

//--->save single field data > start
$(document).on('focusout', '.row_data', function(event) 
{
	event.preventDefault();

	if($(this).attr('edit_type') == 'button')
	{
		return false; 
	}

	var row_id = $(this).closest('tr').attr('row_id'); 
	
	var row_div = $(this)			
	.removeClass('bg-warning') //add bg css
	.css('padding','')

	var col_name = row_div.attr('col_name'); 
	var col_val = row_div.html(); 

	var arr = {};
	arr[col_name] = col_val;

	//use the "arr"	object for your ajax call
	$.extend(arr, {row_id:row_id});

	//out put to show
	$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>');
	
})	
//--->save single field data > end

// Get all Data
function SelectAllData() {
  firebase.database().ref('classes').on('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {

          // 07 AM 
          var monday07Status = CurrentRecord.val().monday.status;

          var tuesday07Status = CurrentRecord.val().tuesday.status;

          var wed07Status = CurrentRecord.val().wednesday.status;

          var thurs07Status = CurrentRecord.val().thursday.status;

          var fri07Status = CurrentRecord.val().friday.status;

          var sat07Status = CurrentRecord.val().saturday.status;

          var sun07Status = CurrentRecord.val().sunday.status;


          var capacityForTwo = 2;
          var membersClassOfTwo = 0;
          var claseOfTwo = 'Grupo de 2 / Individual';
          var statusClassOfTwo = "Clase Disponible";

          var capacityForFour = 4;
          var membersFour = 0;
          var claseOfFour = 'Grupo de 4 Inicial';
          var statusFour = "Clase Disponible";

          var capacityForSix = 6;
          var membersSix = 0;
          var claseOfSixBabies = '3-4 años';
          var claseOfSix810 = '8-10 años';
          var claseOfSix57 = '5-7 años';
          var claseOfSix1113 = '11-13 años';
          var statusSix = "Clase Disponible";

          var claseOfFourAdvanced = "Avanzado";
          var claseOfFourIntermediate = "Intermedio";

          UpdateDatabaseMonday(
            capacityForTwo, membersClassOfTwo, claseOfTwo, statusClassOfTwo,
            capacityForFour, membersFour, claseOfFour, statusFour,
            capacityForSix, membersSix, claseOfSixBabies, statusSix,
            claseOfSix810, claseOfSix57, claseOfSix1113, claseOfFourIntermediate, claseOfFourAdvanced);

          AddItemsToTable(
            // firstHourHour, firstHourStatus, secondHourHour,
            // secondHourStatus, thirdHourHour, thirdHourStatus,
            monday07Status,
            tuesday07Status,
            wed07Status,
            thurs07Status,
            fri07Status,
            sat07Status,
            sun07Status);
        }
      );
    });
}

// //         <tr>
// //             <td>06:00-07:00</br>Today is monday</td>
// //             <td>06:00-07:00</br>Today is tuesday</td>
// //             <td>06:00-07:00</br>Today is wednesday</td>
// //             <td>06:00-07:00</br></td>
// //             <td>06:00-07:00</br></td>
// //             <td>06:00-07:00</br></td>
// //             <td>06:00-07:00</br></td>
// //         </tr>


// window.onload = SelectAllData;


// function UpdateDatabaseMonday(
//   capacityForTwo, membersClassOfTwo, claseOfTwo, statusClassOfTwo, claseOfTwo,
//   capacityForFour, membersClassOfFour, claseOfFour, statusClassOfFour,
//   capacityForSix, membersClassOfSix, claseOfSixBabies, statusClassOfSix,
//   claseOfSix810, claseOfSix57, claseOfSix1113, claseOfFourIntermediate, claseOfFourAdvanced) {
//   firebase.database().ref('classes/06AM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfTwo,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/07AM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfTwo,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/08AM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfTwo,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/09AM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfTwo,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/10AM/monday').set({
//     capacity: capacityForFour,
//     members: membersClassOfFour,
//     clase: claseOfFour,
//     status: statusClassOfFour,
//   });
//   firebase.database().ref('classes/11AM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfTwo,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/12PM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfTwo,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/13PM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfTwo,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/14PM/monday').set({
//     capacity: capacityForSix,
//     members: membersClassOfSix,
//     clase: claseOfSixBabies,
//     status: statusClassOfSix,
//   });
//   firebase.database().ref('classes/15PM/monday').set({
//     capacity: capacityForSix,
//     members: membersClassOfSix,
//     clase: claseOfSix810,
//     status: statusClassOfSix,
//   });
//   firebase.database().ref('classes/16PM/monday').set({
//     capacity: capacityForSix,
//     members: membersClassOfSix,
//     clase: claseOfSix57,
//     status: statusClassOfSix,
//   });
//   firebase.database().ref('classes/17PM/monday').set({
//     capacity: capacityForSix,
//     members: membersClassOfSix,
//     clase: claseOfSix1113,
//     status: statusClassOfSix,
//   });
//   // firebase.database().ref('classes/18PM/monday').set({
//   //   capacity: capacityForFour,
//   //   members: membersClassOfFour,
//   //   clase: claseOfFourAdvanced,
//   //   status: statusClassOfFour,
//   // });
//   firebase.database().ref('classes/19PM/monday').set({
//     capacity: capacityForFour,
//     members: membersClassOfFour,
//     clase: claseOfFour,
//     status: statusClassOfFour,
//   });
//   firebase.database().ref('classes/20PM/monday').set({
//     capacity: capacityForFour,
//     members: membersClassOfFour,
//     clase: claseOfFourIntermediate,
//     status: statusClassOfFour,
//   });
//   firebase.database().ref('classes/21PM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfFour,
//     status: statusClassOfTwo,
//   });
//   firebase.database().ref('classes/22PM/monday').set({
//     capacity: capacityForTwo,
//     members: membersClassOfTwo,
//     clase: claseOfFourIntermediate,
//     status: statusClassOfTwo,
//   });
// }

// // updateTables();
// var counterStart = 6;
// var counterEnd = 7;

function AddItemsToTable(
  // firstHourTime, firstHourStatusTag, secondHourTime,
  // secondHourStatusTag, thirdHourTime, thirdHourStatusTag,
  monday07StatusTag,
  tuesday07StatusTag,
  wed07StatusTag,
  thurs07StatusTag,
  fri07StatusTag,
  sat07StatusTag,
  sun07StatusTag) {
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  // var td5 = document.createElement('td');
  // var td6 = document.createElement('td');
  // var td7 = document.createElement('td');
  // td1.innerHTML = dateOfTheDay;
  // td1.innerHTML = firstHourTime + '</br>Today is monday' + firstHourStatusTag;
  // td2.innerHTML = secondHourTime + '</br>Today is monday' + secondHourStatusTag;
  // td3.innerHTML = thirdHourTime + '</br>Today is monday' + thirdHourStatusTag;
  td1.innerHTML = monday07StatusTag;
  td2.innerHTML = tuesday07StatusTag;
  td3.innerHTML = wed07StatusTag;
  td4.innerHTML = thurs07StatusTag;
  td5.innerHTML = fri07StatusTag;
  td6.innerHTML = sat07StatusTag;
  td7.innerHTML = sun07StatusTag;

  // + "</br>" + firstHourStatus;
  // td2.innerHTML = dateOfTheDay;
  // td2.innerHTML = firstHourTime;
  // td3.innerHTML = dateOfTheDay;
  // td3.innerHTML = firstHourTime;
  // + "</br>" + secondHourStatus;

  trow.innerHTML = `<th scope="row">` + counterStart++ + `:00 - ` + counterEnd++ + `:00</th>`
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  // trow.appendChild(td3); trow.appendChild(td4); trow.appendChild(td5); trow.appendChild(td6); trow.appendChild(td7);
  tbody.appendChild(trow);
}
