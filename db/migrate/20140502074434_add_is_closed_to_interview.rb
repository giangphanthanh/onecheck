class AddIsClosedToInterview < ActiveRecord::Migration
  def change
    add_column :interviews, :is_closed, :boolean, :default => false
  end
end
