puts "Clearing Seeds 😶‍🌫️"
User.destroy

puts "Creating User Seeds 🌱🥸"
u1 = User.new(username: "queenbrooke", password: "1234").save 
u2 = User.new(username: "qwahday", password: "quade").save
u3 = User.new(username: "teacherspet", password: "4567").save

#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
