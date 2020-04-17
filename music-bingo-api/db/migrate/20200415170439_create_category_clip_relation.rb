class CreateCategoryClipRelation < ActiveRecord::Migration[6.0]
  def change
    create_table :categories_clips do |t|
      t.belongs_to :category
      t.belongs_to :clip
    end
  end
end
