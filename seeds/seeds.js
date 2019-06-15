exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          teacher: "Pete Jones",
          eventname: "Spoon Carving",
          category: "Craft",
          eventlocation: "1533 Pine Street, Oakland, CA",
          eventdate: "2020/04/20",
          eventtime: "09:45:00",
          eventdescription:
            "Beginners welcome! Join us for a wooden spoon carving class. Materials supplied."
        },
        {
          teacher: "Amanda Bynes",
          eventname: "Yoga",
          category: "Health and Wellness",
          eventlocation: "123 Berkeley Way, Berkeley, CA",
          eventdate: "2020/05/10",
          eventtime: "11:15:00",
          eventdescription:
            "We invite you to our weekly yoga session! Come on down and release all that tension."
        },
        {
          teacher: "Doyle Parker",
          eventname: "Woodworking",
          category: "Craft",
          eventlocation: "123 Someplace, Oakland, CA",
          eventdate: "2020/07/15",
          eventtime: "09:30:00",
          eventdescription:
            "Learn the tricks of the trade by making a simple wooden table. Materials and tools provided."
        },
        {
          teacher: "Gordon Ramsey",
          eventname: "Basics of Cooking",
          category: "Culinary",
          eventlocation: "540 Mission St, San Francisco, CA",
          eventdate: "2020/07/25",
          eventtime: "10:00:00",
          eventdescription:
            "Salt. Pepper. Vinegar. Oil. These are the ingredients chosen to create the perfect meal."
        },
        {
          teacher: "Diana Lovette",
          eventname: "Public Speaking Practice",
          category: "Social",
          eventlocation: "540 Mission St, San Francisco, CA",
          eventdate: "2020/07/25",
          eventtime: "10:00:00",
          eventdescription:
            "Are you someone that wants to throw up anytime they are up in front of people during a presentation? YOU DON'T HAVE TO BE! We'll teach you to not do that."
        },
        {
          teacher: "Andy Warhol",
          eventname: "Draw Some Soup Cans",
          category: "Art & Music",
          eventlocation: "540 Mission St, San Francisco, CA",
          eventdate: "2020/07/25",
          eventtime: "10:00:00",
          eventdescription:
            "Bring your own supplies."
        },
        {
          teacher: "Falisse",
          eventname: "Dance",
          category: "Movement",
          eventlocation: "540 Starfish St, Berkeley, CA",
          eventdate: "2020/07/25",
          eventtime: "11:00:00",
          eventdescription:
            "Like Zumba but better."
        }
      ]);
    })
}
