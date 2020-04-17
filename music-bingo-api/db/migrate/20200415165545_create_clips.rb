class CreateClips < ActiveRecord::Migration[6.0]
  def change
    create_table :clips do |t|
      t.string :name
      t.string :artist
      t.integer :start
      t.integer :length
      t.string :location

      t.timestamps
    end
  end
end
