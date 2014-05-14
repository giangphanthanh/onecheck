# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

save_interview_function = () ->
  $.ajax
    url: '/interview/save'
    beforeSend : (xhr) -> 
      xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
    type: 'POST'
    data: $('#interview_form').serialize()
    dataType: "json"
    success: (response) ->
       window.location = "/interview/show_result?id="+response.id+""
 $(document).on('click', '#submit_new_interview', save_interview_function)


update_interview_function = () ->
  $.ajax
    url: '/interview/update_interview'
    beforeSend : (xhr) -> 
      xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
    type: 'POST'
    data: $('#interview_form_update').serialize()
    dataType: "script"
    success: (response) ->
       	$('#interview_form_update').hide()
       	$('#edit_interview').show()
 $(document).on('click', '#submit_update_interview', update_interview_function)


edit_interview_function = () ->
  $.ajax
    url: '/interview/edit_interview_tow'
    beforeSend : (xhr) -> 
      xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
    type: 'POST'
    data: "id=" + $('#interview_id').val()
    dataType: "script"
    success: (response) ->

 $(document).on('click', '#edit_interview', edit_interview_function)


