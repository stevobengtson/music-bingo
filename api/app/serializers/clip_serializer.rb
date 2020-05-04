class ClipSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :start, :length, :location
end
