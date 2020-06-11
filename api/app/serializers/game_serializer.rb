class GameSerializer < ActiveModel::Serializer
  attributes :id, :key, :name

  # remember to declare GameCategorySerializer class before you use it
  class GameCategorySerializer < ActiveModel::Serializer
    # explicitly tell here which attributes you need from 'categories'
    attributes :id, :name
  end
  has_one :category, serializer: GameCategorySerializer
end
