class FaireSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :runtime, :times, :tix, :location, :average_attendance
end
