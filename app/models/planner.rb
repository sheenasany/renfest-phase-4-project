class Planner < ApplicationRecord
    belongs_to :faire
    belongs_to :user

    validates :notes, length: { maximum: 200 }
end
