class GameSerializer < ActiveModel::Serializer
  attributes :id, :key, :category
  has_one :category
end
