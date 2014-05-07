 

save_interview_function = () ->
  
  $('.giang').serialize()

  $.ajax
    url: '/interview/save'
    beforeSend : (xhr) -> 
      xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
    type: 'POST'
    data: $('.giang').serialize()
    dataType: "json"
    success: (response) ->
       window.location = "/interview/show_result?id="+response.id+""
 $(document).on('click', '.thanh', save_interview_function)