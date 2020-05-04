class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :clips
  has_many :clips
end
