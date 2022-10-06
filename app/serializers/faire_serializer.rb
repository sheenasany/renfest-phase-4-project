class FaireSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :runtime, :times, :tix, :location, :average_attendance

  # def faire_notes
  #   byebug
  #   # object.planners.pluck(:notes)
  # end
end
