puts "Clearing Seeds 😶‍🌫️"
User.destroy_all
Faire.destroy_all
Planner.destroy_all

puts "Creating User Seeds 🌱🥸"
u1 = User.create(username: "queenbrooke", password: "1234")
u2 = User.create(username: "qwahday", password: "quade")
u3 = User.create(username: "quinn", password: "4567")
u4 = User.create(username: "wendy", password: "7890")
u5 = User.create(username: "eli", password: "3456")
u6 = User.create(username: "jake", password: "1234")
u7 = User.create(username: "kristina", password: "4567")
u8 = User.create(username: "charlotte", password: "7890")

puts "Seeding Faires 🌱🧝🧙‍♂️👸"
f1 = Faire.create(name: "NM Renaissance Celtic Festival", logo: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/174041313_140911111370531_4729551698886299167_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=92k89YoTIbIAX84h9Tf&_nc_ht=scontent-mia3-2.xx&oh=00_AT_mqMtzh6KITYq0ZkVPkrisSXdKQ_Z69VVXzU1oLLdPlw&oe=6360FB1F", runtime: "March 24th - 26th, 2023", times: "Friday: 10am-4pm, Saturday: 10am-6pm, Sunday: 10am-5pm", tix: 25, location: "New Mexico", average_attendance: 8000)
f2 = Faire.create(name: "Carolina Renaissance Festival", logo: "https://images.squarespace-cdn.com/content/v1/5fd0f430d10d883954d0cb63/23b03252-b19f-4e70-bcd1-4616ed8a64a0/CRF29thLogo_Color_Horizontal_Preferred_PNG.png?format=1500w", runtime: "October 1 - November 20, 2022", times: "Saturday: 10am-5:30pm, Sunday: 10am-5:30pm", tix: 32, location: "Huntersville, NC", average_attendance: 200000)
f3 = Faire.create(name: "Seaside Highland Games", logo: "https://static.wixstatic.com/media/1905c7_ceab75c06ae546789b4021e04aa7bb8d~mv2.png/v1/fill/w_588,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogoBlue.png", runtime: "October 8 - October 9, 2022", times: "Saturday: 9am-5pm, Sunday: 9pm-5pm", tix: 20, location: "Ventura, CA", average_attendance: 15000)
f4 = Faire.create(name: "SunCoast Renaissance Festival", logo: "https://fairefinder.com/fairefinder/assets/uploads/events/3bcefacb31ae89a431687e87111f9620.png", runtime: "November 19 - December 11, 2022", times: "Saturday: 10am-6pm, Sunday: 10am-6pm", tix: 25, location: "Sarasota, Florida", average_attendance: 40000)
f5 = Faire.create(name: "Texas Viking Festival: Yuletide", logo: "http://www.texasvikingfestival.com/templates/rt_denali/custom/images/TVF%202022%20logo.png", runtime: "December 17 - December 18, 2022", times: "Saturday: 10am-6:30pm, Sunday: 10am-6:30pm", tix: 20, location: "Paige, Texas", average_attendance: 1500)

puts "Seeding Planners 🌱📝"
Planner.create(notes: "Might want to attend next year instead...", user_id: u1.id, faire_id: f1.id)
Planner.create(notes: "Loved this faire! Consider dressing up this year.", user_id: u4.id, faire_id: f5.id)
Planner.create(notes: "Gonna need to save some money for this one.", user_id: u3.id, faire_id: f2.id)
Planner.create(notes: "Why do I even bother going to these things?!", user_id: u2.id, faire_id: f3.id)
Planner.create(notes: "One word: Turkey legs.", user_id: u5.id, faire_id: f4.id)
Planner.create(notes: "This is a long note.", user_id: u6.id, faire_id: f3.id)
Planner.create(notes: "This is another long note.", user_id: u7.id, faire_id: f1.id)
Planner.create(notes: "Took my daughter. Mostly for her. I may have liked it too.", user_id: u8.id, faire_id: f2.id)

puts "Seeding Complete! 🪴✅"

