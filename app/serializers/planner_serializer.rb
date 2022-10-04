class PlannerSerializer < ActiveModel::Serializer
  attributes :id, :notes, :faire_id, :integer, :user_id
end
