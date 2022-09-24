# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# User Seeds

User.create(
  username: "ianmcm89",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "lmcmanus06",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "daleN33",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "JessWieleba93",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "kyleCastillo90",
  password: "password",
  password_confirmation: "password"
)

User.create(
  username: "klBik",
  password: "password",
  password_confirmation: "password"
)

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

# St. Petersburg, FL Seeds
# My Event Seeds

Event.create(
  user_id: 1,
  title: "Day at the Aquarium",
  location: "The Florida Aquarium",
  address: "701 Channelside Dr, Tampa, FL 33602, USA",
  rating: 4.5,
  date: "2022-10-01",
  time: "2000-01-01T10:00:00.000Z",
  description: "Sit amet volutpat consequat mauris nunc congue nisi vitae. Pretium viverra suspendisse potenti nullam ac. Amet facilisis magna etiam tempor. Tincidunt ornare massa eget egestas purus.",
  lat: 27.943972,
  lng: -82.4448747
)

Event.create(
  user_id: 1,
  title: "Kayaking at Weedon",
  location: "Weedon Island Preserve",
  address: "1800 Weedon Dr NE, St. Petersburg, FL 33702, USA",
  rating: 4.8,
  date: "2022-10-02",
  time: "2000-01-01T09:00:00.000Z",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.",
  lat: 27.8475889,
  lng: -82.608663
)

Event.create(
  user_id: 1,
  title: "Museum of Fine Arts",
  location: "Museum of Fine Arts",
  address: "255 Beach Dr NE, St. Petersburg, FL 33701, USA",
  rating: 4.7,
  date: "2022-10-05",
  time: "2000-01-01T10:00:00.000Z",
  description: "Habitant morbi tristique senectus et netus et malesuada. Ultrices sagittis orci a scelerisque purus semper eget duis at. Placerat duis ultricies lacus sed turpis. Nibh ipsum consequat nisl vel pretium lectus quam id leo.",
  lat: 27.774421,
  lng: -82.631884
)

Event.create(
  user_id: 1,
  title: "Dinner at Caddy's",
  location: "Caddy's Treasure Island",
  address: "9000 W Gulf Blvd, Treasure Island, FL 33706, USA",
  rating: 4.3,
  date: "2022-10-05",
  time: "2000-01-01T18:00:00.000Z",
  description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  lat: 27.7536654,
  lng: -82.764087
)

Event.create(
  user_id: 1,
  title: "Beach Day!",
  location: "North Beach At Fort DeSoto Park",
  address: "North Beach At Fort DeSoto Park, St. Petersburg, FL 33715, USA",
  rating: 4.8,
  date: "2022-10-08",
  time: "2000-01-01T11:30:00.000Z",
  description: "A pellentesque sit amet porttitor eget dolor morbi. Orci nulla pellentesque dignissim enim sit. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Urna et pharetra pharetra massa massa ultricies mi.",
  lat: 27.6378157,
  lng: -82.7399899
)

# Friend Event Seeds

Event.create(
  user_id: 2,
  title: "Shopping Day!",
  location: "Tyrone Mall",
  address: "2200 66th St N, St. Petersburg, FL 33710, USA",
  rating: 4.4,
  date: "2022-10-08",
  time: "2000-01-01T09:30:00.000Z",
  description: "Tincidunt lobortis feugiat vivamus at augue eget arcu. Lectus quam id leo in vitae. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
  lat: 27.7934602,
  lng: -82.7334314
)

Event.create(
  user_id: 2,
  title: "Let's Get Swole Bro!",
  location: "Planet Fitness",
  address: "11141 US Hwy 19 N, Clearwater, FL 33764, United States",
  rating: 4.4,
  date: "2022-10-05",
  time: "2000-01-01T19:00:00.000Z",
  description: "Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sed egestas egestas fringilla phasellus faucibus scelerisque. Est sit amet facilisis magna etiam.",
  lat: 27.8739439,
  lng: -82.707048
)

Event.create(
  user_id: 4,
  title: "Beach Day",
  location: "Madeira Beach Access",
  address: "14400 Gulf Blvd, Madeira Beach, FL 33708, USA",
  rating: 4.7,
  date: "2022-10-10",
  time: "2000-01-01T10:30:00.000Z",
  description: "Habitant morbi tristique senectus et netus et malesuada. Ultrices sagittis orci a scelerisque purus semper eget duis at. Placerat duis ultricies lacus sed turpis. Nibh ipsum consequat nisl vel pretium lectus quam id leo.",
  lat: 27.7976183,
  lng: -82.7977678
)

Event.create(
  user_id: 4,
  title: "Beach Sunset",
  location: "Indian Rocks Beach",
  address: "Indian Rocks Beach, FL, USA",
  rating: 0,
  date: "2022-10-07",
  time: "2000-01-01T19:00:00.000Z",
  description: "A pellentesque sit amet porttitor eget dolor morbi. Orci nulla pellentesque dignissim enim sit. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Urna et pharetra pharetra massa massa ultricies mi.",
  lat: 27.8960019,
  lng: -82.846561
)

Event.create(
  user_id: 5,
  title: "Movie Night",
  location: "Regal Park Place",
  address: "7200 US Hwy 19 N, Pinellas Park, FL 33781, United States",
  rating: 4.4,
  date: "2022-10-06",
  time: "2000-01-01T18:45:00.000Z",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.",
  lat: 27.836803,
  lng: -82.686066
)

Event.create(
  user_id: 6,
  title: "Picnic on the Point",
  location: "Picnic Island Park",
  address: "7404 Picnic Island Blvd, Tampa, FL 33616, USA",
  rating: 4.6,
  date: "2022-10-03",
  time: "2000-01-01T14:00:00.000Z",
  description: "Habitant morbi tristique senectus et netus et malesuada. Ultrices sagittis orci a scelerisque purus semper eget duis at. Placerat duis ultricies lacus sed turpis. Nibh ipsum consequat nisl vel pretium lectus quam id leo.",
  lat: 27.8497537,
  lng: -82.5538409
)

Event.create(
  user_id: 7,
  title: "Tiki Lunch!",
  location: "Parthenon Waterfront Tiki Bar",
  address: "105 N Bayshore Dr, Safety Harbor, FL 34695, United States",
  rating: 4.4,
  date: "2022-10-01",
  time: "2000-01-01T11:30:00.000Z",
  description: "Gravida arcu ac tortor dignissim convallis aenean et tortor. Sodales ut etiam sit amet nisl. Elementum nisi quis eleifend quam adipiscing. A erat nam at lectus.",
  lat: 27.9903105,
  lng: -82.6873275
)

# # Los Angeles, CA Seeds
# # My Event Seeds

# Event.create(
#   user_id: 1,
#   title: "Day at the Aquarium",
#   location: "Aquarium of the Pacific",
#   address: "100 Aquarium Way, Long Beach, CA 90802, USA",
#   rating: 4.6,
#   date: "2022-09-12",
#   time: "2000-01-01T10:00:00.000Z",
#   description: "Sit amet volutpat consequat mauris nunc congue nisi vitae. Pretium viverra suspendisse potenti nullam ac. Amet facilisis magna etiam tempor. Tincidunt ornare massa eget egestas purus.",
#   lat: 33.7619735,
#   lng: -118.1969738
# )

# Event.create(
#   user_id: 1,
#   title: "Hollywood Sign Hike",
#   location: "Hollywood Sign",
#   address: "Los Angeles, CA 90068, USA",
#   rating: 4.6,
#   date: "2022-09-14",
#   time: "2000-01-01T08:30:00.000Z",
#   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.",
#   lat: 34.1341151,
#   lng: -118.3215482
# )

# Event.create(
#   user_id: 1,
#   title: "Museum Day",
#   location: "Natural History Museum of Los Angeles County",
#   address: "900 W Exposition Blvd, Los Angeles, CA 90007, United States",
#   rating: 4.8,
#   date: "2022-09-17",
#   time: "2000-01-01T09:00:00.000Z",
#   description: "Habitant morbi tristique senectus et netus et malesuada. Ultrices sagittis orci a scelerisque purus semper eget duis at. Placerat duis ultricies lacus sed turpis. Nibh ipsum consequat nisl vel pretium lectus quam id leo. ",
#   lat: 34.0169567,
#   lng: -118.2887764
# )

# Event.create(
#   user_id: 1,
#   title: "Dinner on The Queen",
#   location: "The Queen Mary",
#   address: "1126 Queens Hwy, Long Beach, CA 90802, USA",
#   rating: 4.3,
#   date: "2022-09-17",
#   time: "2000-01-01T18:00:00.000Z",
#   description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
#   lat: 33.7526356,
#   lng: -118.1903235
# )

# Event.create(
#   user_id: 1,
#   title: "Coastal Cliff Hike",
#   location: "Flat Rock Beach",
#   address: "Flat Rock Beach, California 90274, United States",
#   rating: 4.2,
#   date: "2022-09-24",
#   time: "2000-01-01T09:00:00.000Z",
#   description: "A pellentesque sit amet porttitor eget dolor morbi. Orci nulla pellentesque dignissim enim sit. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Urna et pharetra pharetra massa massa ultricies mi.",
#   lat: 33.7960505,
#   lng: -118.4076387
# )

# # Friend Event Seeds

# Event.create(
#   user_id: 2,
#   title: "Shopping Day",
#   location: "Los Cerritos Center",
#   address: "239 Los Cerritos Center, Cerritos, CA 90703, United States",
#   rating: 4.5,
#   date: "2022-09-24",
#   time: "2000-01-01T11:00:00.000Z",
#   description: "Tincidunt lobortis feugiat vivamus at augue eget arcu. Lectus quam id leo in vitae. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
#   lat: 33.8622442,
#   lng: -118.0939625
# )

# Event.create(
#   user_id: 2,
#   title: "Let's Get Swole Bro!",
#   location: "LA Fitness",
#   address: "1914 S Bundy Dr, Los Angeles, CA 90025, United States",
#   rating: 3.3,
#   date: "2022-09-23",
#   time: "2000-01-01T17:00:00.000Z",
#   description: "Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sed egestas egestas fringilla phasellus faucibus scelerisque. Est sit amet facilisis magna etiam.",
#   lat: 34.0348269,
#   lng: -118.4560567
# )

# Event.create(
#   user_id: 4,
#   title: "Beach Day",
#   location: "Huntington State Beach",
#   address: "21601 E Pacific Coast Hwy, Huntington Beach, CA 92646, USA",
#   rating: 4.2,
#   date: "2022-09-13",
#   time: "2000-01-01T09:00:00.000Z",
#   description: "Habitant morbi tristique senectus et netus et malesuada. Ultrices sagittis orci a scelerisque purus semper eget duis at. Placerat duis ultricies lacus sed turpis. Nibh ipsum consequat nisl vel pretium lectus quam id leo.",
#   lat: 33.6380444,
#   lng: -117.9736122
# )

# Event.create(
#   user_id: 5,
#   title: "Venice Beach Day",
#   location: "Venice Beach",
#   address: "Venice Beach, Los Angeles, CA, USA",
#   rating: 4.5,
#   date: "2022-09-13",
#   time: "2000-01-01T09:00:00.000Z",
#   description: "A pellentesque sit amet porttitor eget dolor morbi. Orci nulla pellentesque dignissim enim sit. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Urna et pharetra pharetra massa massa ultricies mi.",
#   lat: 33.9932584,
#   lng: -118.480598
# )

# Event.create(
#   user_id: 5,
#   title: "Movie Night",
#   location: "Regency Commerce",
#   address: "950 Goodrich Blvd, Commerce, CA 90022, United States",
#   rating: 4.5,
#   date: "2022-09-20",
#   time: "2000-01-01T19:00:00.000Z",
#   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.",
#   lat: 34.0183787,
#   lng: -118.1537692
# )

# Event.create(
#   user_id: 6,
#   title: "Picnic on the Point",
#   location: "Korean Friendship Bell",
#   address: "3601 S Gaffey St, San Pedro, CA 90731, USA",
#   rating: 0,
#   date: "2022-09-25",
#   time: "2000-01-01T10:00:00.000Z",
#   description: "Habitant morbi tristique senectus et netus et malesuada. Ultrices sagittis orci a scelerisque purus semper eget duis at. Placerat duis ultricies lacus sed turpis. Nibh ipsum consequat nisl vel pretium lectus quam id leo.",
#   lat: 33.7097361,
#   lng: -118.2938
# )

# Event.create(
#   user_id: 7,
#   title: "Mountain Hike",
#   location: "Mount San Antonio",
#   address: "Mt San Antonio, California 91759, USA",
#   rating: 0,
#   date: "2022-09-22",
#   time: "2000-01-01T09:00:00.000Z",
#   description: "Gravida arcu ac tortor dignissim convallis aenean et tortor. Sodales ut etiam sit amet nisl. Elementum nisi quis eleifend quam adipiscing. A erat nam at lectus.",
#   lat: 34.2888927,
#   lng: -117.6467218
# )