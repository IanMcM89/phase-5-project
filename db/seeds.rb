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

User.create(
  username: "user2",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user3",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user4",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user5",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user6",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user7",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user8",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user9",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user10",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user11",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user12",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user13",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user14",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user15",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user16",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user17",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user18",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user19",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "user20",
  password: "password",
  password_confirmation: "password"
)

# Friendship Seeds

Friendship.create(
  user_id: 1,
  friend_id: 2
)

Friendship.create(
  user_id: 1,
  friend_id: 3
)

Friendship.create(
  user_id: 1,
  friend_id: 4
)

Friendship.create(
  user_id: 1,
  friend_id: 5
)

# Friend Request Seeds

FriendRequest.create(
  user_id: 1,
  friend_id: 11
)

FriendRequest.create(
  user_id: 1,
  friend_id: 12
)

FriendRequest.create(
  user_id: 1,
  friend_id: 13
)

FriendRequest.create(
  user_id: 1,
  friend_id: 14
)