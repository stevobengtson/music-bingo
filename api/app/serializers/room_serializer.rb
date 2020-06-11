class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name
  
  class RoomUserSerializer < ActiveModel::Serializer
    attributes :id
  end
  has_many :users, serializer: RoomUserSerializer
end
