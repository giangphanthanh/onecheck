$(".add_answer").live("click", function() {
  var class_answer =  $(this).prev('.list_answers')
  var question_id =parseInt( $(this).attr("question_number"));
  var answer_id =parseInt( $(this).attr("answer_max_number"));
  answer_id = answer_id + 1;
  $(this).attr("answer_max_number", answer_id);
  var html_new_answer = "<div class=\"answers\"><p>Answer No.<span class=\"no_answer\">"+ (answer_id) +"</span>: <a class=\"remove_answer\">Remove choice</a></p>"
  html_new_answer += "<input type=\"text\" value=\"\" name=\"interview[questions]["+question_id+"][answers][" + answer_id + "][id]\" style=\"display: none\" />"
  html_new_answer += "<input type=\"text\" placeholder=\"Choice content...\" name=\"interview[questions]["+question_id+"][answers][" + answer_id + "][content]\" />";
  html_new_answer += " <input type=\"checkbox\" name=\"interview[questions]["+question_id+"][answers][" + answer_id + "][is_correct]\"/> Is correct </div>";
  class_answer.append(html_new_answer);
  return false;
});
$("#add_question").live("click",function(){
  alert("thanh");
  var root_div = $(".div_question")
  var question_id = parseInt(root_div.attr("question_max_number"));
  question_id = question_id + 1;
  root_div.attr("question_max_number", question_id);
  var html_new_question = "<div class=\"question\"><p>No.<span class=\"no_number\">" + (question_id) +":</span> <a href=\"#\" class=\"remove_question\">remove question</a></p>"
  html_new_question += "<p>Question</p>"
  html_new_question +=  "<input type=\"text\" name=\"interview[questions][" + question_id + "][content]\" class=\"question_content\" question_id=\""+ question_id +"\" placeholder=\"question content...\"/>"
  html_new_question +=  "<p>Question type</p>"
  html_new_question += "<select name=\"interview[questions]["+ question_id +"][question_type]\" class=\"btn\">"
  html_new_question +=    "<option value=\"multil\">Multil Choice </option>"
  html_new_question +=    "<option value=\"exact\">Exact answer </option>"
  html_new_question +=   " <option value=\"open\">Open answer </option>"
  html_new_question +=  "</select>"
  html_new_question +=  "<p>Choice answers</p>"
  html_new_question +=  "<div class=\"list_answers\">"
  html_new_question +=    "<div class=\"answers\"><p>Answer No.<span class=\"no_answer\">1</span>: <a class=\"remove_answer\">Remove choice</a></p>"
  html_new_question +=    "<input type=\"text\" placeholder=\"Choice content...\" name=\"interview[questions]["+ question_id +"][answers][1][content]\" /> <input type=\"checkbox\" name=\"interview[questions]["+ question_id + "][answers][1][is_correct]\"/> Is correct"
  html_new_question +=  "</div></div>"
  html_new_question += " <a class=\"add_answer\" answer_max_number=\"1\" question_number=\""+ question_id +"\">Add answer</a>"
  html_new_question +=  "<br /><br /></div>";
  root_div.append(html_new_question);
  return false;
});
$(".remove_question").live("click",function(){
  var question_id = parseInt($(".div_question").attr("question_max_number"));
  question_id = question_id - 1;
  var question_remove = $(this).parent().parent();
  question_remove.remove();
  var number = 1 
  $(".question").each(function(){
  $(this).find(".no_number").text(number);
  number ++;
  });
  $(".div_question").attr("question_max_number", question_id);
  return false;
});
$(".remove_answer").live("click",function(){
  var class_add_answer = $(this).parent().parent().parent().parent().find(".add_answer");
  var number_answer = parseInt(class_add_answer.attr("answer_max_number"));
  var answer_remove = $(this).parent().parent();
  var answers = answer_remove.parent();
  number_answer = number_answer - 1;
 class_add_answer.attr("answer_max_number",number_answer);
  var number =1 ;
  answer_remove.remove();
  answers.find(".answers").each(function(){
  $(this).find(".no_answer").text(number);
  number ++;
  });
  return false;
});

$(".remove_question_on_edit").live("click",function(){
  var question_id = parseInt($("#div_list_question").attr("question_max_number"));
  question_id = question_id - 1;
  $("#div_list_question").attr("question_max_number", question_id);
  var question_remove = $(this).parent().parent();
  question_remove.remove();
  var number =1 
  $(".question").each(function(){
  $(this).find(".no_number").text(number);
  number ++;
  });
  return false;
});









