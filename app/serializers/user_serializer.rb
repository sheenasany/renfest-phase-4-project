class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :faires
  has_many :planners
end
