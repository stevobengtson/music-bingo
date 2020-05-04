class GameSerializer < ActiveModel::Serializer
  attributes :id, :key, :name, :category
  has_one :category
end
