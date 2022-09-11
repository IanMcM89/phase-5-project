class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.string :title
      t.string :location
      t.date :date
      t.time :time
      t.string :address
      t.text :description
      t.decimal :lat, precision: 9, scale: 7
      t.decimal :lng, precision: 10, scale: 7

      t.timestamps
    end
  end
end
