class ChangeGamesCategory < ActiveRecord::Migration[6.0]
  def change
      change_table :games do |t|
        t.belongs_to :category
      end
  end
end
