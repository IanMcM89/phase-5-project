# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User Seeds

User.create(
  username: "ianmcm89",
  password: "password",
  password_confirmation: "password"
)

5.times do |i|
  User.create(
    username: "user#{i+=2}",
    password: "password",
    password_confirmation: "password"
  )
end

20.times do |i|
  password = (0...8).map { ('a'..'z').to_a[rand(26)] }.join
  User.create(
    username: "user#{i+=5}",
    password: password,
    password_confirmation: password
  )
end

# Friendship Seeds

4.times do |i|
  Friendship.create(
    user_id: 1,
    friend_id: i+=4
  )
end

# Friend Request Seeds

2.times do |i|
  FriendRequest.create(
    user_id: i+=2,
    friend_id: 1
  )
end

3.times do |i|
  FriendRequest.create(
    user_id: 1,
    friend_id: i+=8
  )
end

# Event Seeds

Event.create(
  id: 1,
  user_id: 1,
  title: "Day at the Aquarium",
  location: "Aquarium of the Pacific",
  address: "100 Aquarium Way, Long Beach, CA 90802, USA",
  date: "2022-09-12",
  time: "2000-01-01T10:00:00.000Z",
  description: "Who's up for a day at the Aquarium??\n\nWe'll go look at some fish and then do a picnic in the park afterwards!\n\nWhat to bring:\n\n-Snacks\n-Cooler\n-Picnic Supplies\n\n",
  lat: "33.7619735",
  lng: "-118.1969738"
)

Event.create(
  id: 2,
  user_id: 1,
  title: "Beach Day",
  location: "Huntington State Beach",
  address: "21601 E Pacific Coast Hwy, Huntington Beach, CA 92646, USA",
  date: "2022-09-13",
  time: "2000-01-01T09:00:00.000Z",
  description: "Let's have some fun in the sun!\n\nWhat to bring:\n\n-Snacks\n-Cooler\n-Sunscreen\n-Alcohol\n-Beach Towels\n-Umbrella",
  lat: "33.6380444",
  lng: "-117.9736122"
)

Event.create(
  id: 3,
  user_id: 1,
  title: "Trek to the Top",
  location: "Hollywood Sign",
  address: "Los Angeles, CA 90068, USA",
  date: "2022-09-14",
  time: "2000-01-01T08:30:00.000Z",
  description: "Hope you're ready for a hike!\n\nWe'll start at the base of the hill and hike all the way up to the Hollywood sign.\n\nWhat to bring:\n\n-Energy Bars\n-Water\n-Foul Weather Gear",
  lat: "34.1341151",
  lng: "-118.3215482"
)

Event.create(
  id: 4,
  user_id: 1,
  title: "Day at the Museum",
  location: "Natural History Museum of Los Angeles County",
  address: "900 W Exposition Blvd, Los Angeles, CA 90007, United States",
  date: "2022-09-17",
  time: "2000-01-01T09:00:00.000Z",
  description: "Who wants to explore the Natural History Museum with me this weekend??\n\nWhat to bring:\n\n-Yourselves\n-A sense of curiosity\n\n",
  lat: "34.0169567",
  lng: "-118.2887764"
)