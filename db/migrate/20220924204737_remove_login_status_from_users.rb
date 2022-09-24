class RemoveLoginStatusFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :login_status, :boolean
  end
end
