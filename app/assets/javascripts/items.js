$(function(){ // make available on document ready
	 $("form").submit(function(){ // on larger app form should be further defined bec. overlap 
	 // when the submit for is submitted stop default action
	 event.preventDefault();
	 var action = $(this).attr('action'); // take the method and actions form the form generated fields
	 var method = $(this).attr('method');

	 var name = $(this).find('#item_name').val(); // rails auto names these fields with these id's :)
	 var priority = $(this).find('#item_priority').val();

	 $('#item_name').val(''); // to clear out the fields after submitting
	 $('#item_priority').val('');

	 var data = {
	 	name: name, 		// put data in hash for easy access 
	 	priority: priority
	 }
	 $.ajax({ 					// ajax request 
	 	method: method,
	 	url: action,
	 	data: data,
	 	dataType: 'script'
	 })
  });
});