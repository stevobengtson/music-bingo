class UserSerializer < ActiveModel::Serializer
    attributes :id, :uid, :email, :name, :nickname, :image
end