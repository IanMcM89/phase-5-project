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

3.times do |i|
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

5.times do |i|
  Friendship.create(
    user_id: 1,
    friend_id: i+=2
  )
end

# Friend Request Seeds

3.times do |i|
  FriendRequest.create(
    user_id: 1,
    friend_id: i+=7
  )
end