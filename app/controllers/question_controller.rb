class QuestionController < ApplicationController

  def delete
    @question = Question.find(params[:question_id])
    @question.destroy()
  end
  def show_question_type
  	return "<p>noi dung</p>"
  end

end
