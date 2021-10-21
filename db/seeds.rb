# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all

Event.create([name:'Bricolage', location:'162 5th Ave Brooklyn NY', time: '7-9', price: '$75', attendees:'0', date:'11/18/2021'])
Event.create([name:'Chela', location:'408 5th Ave, Brooklyn, NY 11215', time: '7-9', price: '$75', attendees:'0', date:'11/19/2021'])
Event.create([name:'Bar Crudo', location:'412 5th Ave, Brooklyn, NY 11215', time: '7-9', price: '$75', attendees:'0', date:'11/21/2021'])
puts "#{Event.count} events were created"