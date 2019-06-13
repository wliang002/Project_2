exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          teacher: 'Pete Jones',
          eventname: 'Spoon Carving',
          category: 'craft',
          eventlocation: '1533 Pine Street, Oakland, CA',
          eventdate: '2020/04/20',
          eventtime: '09:45:00',
          eventdescription:
            'Beginners welcome! Join us for a wooden spoon carving class. Materials supplied.'
        },
        {
          teacher: 'Amanda Bynes',
          eventname: 'Yoga',
          category: 'health and wellness',
          eventlocation: '123 Berkeley Way, Berkeley, CA',
          eventdate: '2020/05/10',
          eventtime: '11:15:00',
          eventdescription:
            'We invite you to our weekly yoga session! Come on down and release all that tension.'
        },
        {
          teacher: 'Doyle Parker',
          eventname: 'Woodworking',
          category: 'craft',
          eventlocation: '123 Someplace, Oakland, CA',
          eventdate: '2020/07/15',
          eventtime: '09:30:00',
          eventdescription: 'Learn the tricks of the trade by making a simple wooden table. Materials and tools provided.'
        },
        {
          teacher: 'Janet Wonderson',
          eventname: 'Urban Gardening',
          category: 'garden',
          eventlocation: '540 Mission St, San Francisco, CA',
          eventdate: '2020/07/25',
          eventtime: '10:00:00',
          eventdescription: 'Growing food in the city can be accomplished! Come find out how.'
        }
      ])
    })
}
