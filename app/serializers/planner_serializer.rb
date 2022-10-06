class PlannerSerializer < ActiveModel::Serializer
  attributes :id, :notes

  belongs_to :faire
  belongs_to :user
end
