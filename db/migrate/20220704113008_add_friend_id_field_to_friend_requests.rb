class AddFriendIdFieldToFriendRequests < ActiveRecord::Migration[6.1]
  def change
    add_reference :friend_requests, :friend, references: :users, foreign_key: {to_table: :users}
  end
end
