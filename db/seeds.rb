# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: "user1",
  password: "password1",
  password_confirmation: "password1"
)

User.create(
  username: "user2",
  password: "password2",
  password_confirmation: "password2"
)

User.create(
  username: "user3",
  password: "password3",
  password_confirmation: "password3"
)
User.create(
  username: "user4",
  password: "password4",
  password_confirmation: "password4"
)
User.create(
  username: "user5",
  password: "password5",
  password_confirmation: "password5"
)