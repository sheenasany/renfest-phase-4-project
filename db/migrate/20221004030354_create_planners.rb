class CreatePlanners < ActiveRecord::Migration[7.0]
  def change
    create_table :planners do |t|
      t.string :notes
      t.integer :faire_id
      t.integer :user_id

      t.timestamps
    end
  end
end
