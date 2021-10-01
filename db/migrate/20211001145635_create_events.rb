class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.string :time
      t.string :price
      t.string :attendees

      t.timestamps
    end
  end
end
