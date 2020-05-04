class AddNameToGame < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :name, :string
  end
end
