export type TeamMember = {
  id: string
  name: string
  role: string
  initials: string
  tags: string[]
  credential: string | null
  bio: string
  classIds: string[]
  groups: string[]
  photo: string | null
  video: string | null
}

// Set photo and video to uploaded asset paths when each person's media is available.
export const teamMembers: TeamMember[] = [
  {
    "id": "asa-bernstine",
    "name": "Asa Bernstine",
    "role": "Owner · Certified Personal Trainer",
    "initials": "AB",
    "tags": [
      "Personal training",
      "Leadership"
    ],
    "credential": "Certified Personal Trainer since 2013",
    "bio": "Asa leads Fitness Results with a simple commitment: help people feel heard, supported, and confident in their training. As an owner and certified personal trainer since 2013, he brings the gym's Safe, Effective, Efficient approach to personalized coaching and a welcoming, low-pressure experience.",
    "classIds": [],
    "groups": [
      "training",
      "care"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "kevin-guardado",
    "name": "Kevin Guardado",
    "role": "Certified Personal Trainer",
    "initials": "KG",
    "tags": [
      "Functional Patterns",
      "Personal training"
    ],
    "credential": "Certified Personal Trainer since 2013",
    "bio": "Kevin has been a certified personal trainer since 2013 and specializes in Functional Patterns. His work centers on helping clients understand their movement and develop a training approach that fits their individual needs, with clear guidance and personal attention.",
    "classIds": [],
    "groups": [
      "training"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "reyna-hulguin",
    "name": "Reyna Hulguin",
    "role": "Certified Personal Trainer · Group Class Instructor",
    "initials": "RH",
    "tags": [
      "Senior training",
      "Personal training",
      "Circuit Training"
    ],
    "credential": "Certified Personal Trainer",
    "bio": "Reyna specializes in senior training and personal training, bringing attentive coaching to clients at different stages of their fitness journey. She also leads Circuit Training, helping members build a routine with professional guidance and the encouragement of a group.",
    "classIds": [
      "circuit-training"
    ],
    "groups": [
      "training",
      "classes"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "gisel-juarez",
    "name": "Gisel Juarez",
    "role": "Certified Personal Trainer · Group Class Instructor",
    "initials": "GJ",
    "tags": [
      "Personal training",
      "Small group training",
      "Zumba",
      "Stretching & Mobility"
    ],
    "credential": "Certified Personal Trainer",
    "bio": "Gisel works with clients through personal training, small group training, and group classes. Whether she is leading Zumba or Stretching & Mobility, her role is to guide members through movement and help them find a way to train that feels engaging and supportive.",
    "classIds": [
      "zumba",
      "stretching-mobility"
    ],
    "groups": [
      "training",
      "classes"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "kamryn-long",
    "name": "Kamryn Long",
    "role": "Member Experience Coordinator · Step Instructor",
    "initials": "KL",
    "tags": [
      "Member experience",
      "Community",
      "Step"
    ],
    "credential": null,
    "bio": "Kamryn helps make Fitness Results feel like home. As Member Experience Coordinator, she brings care to the details that help members feel welcomed and connected. She also leads Step, adding another way for members to enjoy movement and community.",
    "classIds": [
      "step"
    ],
    "groups": [
      "classes",
      "care"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "jodi",
    "name": "Jodi",
    "role": "Group Class Instructor",
    "initials": "J",
    "tags": [
      "Yoga"
    ],
    "credential": null,
    "bio": "Jodi leads Yoga at Fitness Results, creating a dedicated space in the week for movement, breathing, and mindful practice. Talk with her about your experience and what you hope to get from class so you can feel comfortable getting started.",
    "classIds": [
      "yoga"
    ],
    "groups": [
      "classes"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "patti",
    "name": "Patti",
    "role": "Group Class Instructor",
    "initials": "P",
    "tags": [
      "Cardio Meditation"
    ],
    "credential": null,
    "bio": "Patti leads Cardio Meditation, bringing movement and mindful focus into the weekly class schedule. She is a point of connection for members who want to learn about the class and find a starting point that fits their needs.",
    "classIds": [
      "cardio-meditation"
    ],
    "groups": [
      "classes"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "annette",
    "name": "Annette",
    "role": "Group Class Instructor",
    "initials": "A",
    "tags": [
      "Sculpt & Tone",
      "Quickies",
      "Tab & Core"
    ],
    "credential": null,
    "bio": "Annette leads Sculpt & Tone, Quickies, and Tab & Core, giving members several ways to make group training part of their week. Connect with her to learn about each class, share your goals, and explore which session is the right fit for you.",
    "classIds": [
      "sculpt-tone",
      "quickies",
      "tab-core"
    ],
    "groups": [
      "classes"
    ],
    "photo": null,
    "video": null
  },
  {
    "id": "john-herr",
    "name": "John Herr",
    "role": "Custodial Manager",
    "initials": "JH",
    "tags": [
      "Facility care",
      "Equipment upkeep",
      "Member community"
    ],
    "credential": null,
    "bio": "John keeps Fitness Results sparkling clean and in tip-top shape. He helps make sure the equipment is maintained and working properly, and brings a friendly presence and a wealth of knowledge to the gym. His care behind the scenes helps everyone feel comfortable when they walk through the door.",
    "classIds": [],
    "groups": [
      "care"
    ],
    "photo": null,
    "video": null
  }
]
