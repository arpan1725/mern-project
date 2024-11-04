// import { json } from "body-parser";

// const employees = [
//   {
//     "id": 1,
//     "email": "employee1@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "title": "Task 1",
//         "description": "Complete the sales report",
//         "date": "2024-10-20",
//         "category": "Sales",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "title": "Task 2",
//         "description": "Prepare the presentation for Q4",
//         "date": "2024-10-21",
//         "category": "Management",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "title": "Task 3",
//         "description": "Client follow-up",
//         "date": "2024-10-22",
//         "category": "Customer Support",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "email": "employee2@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "title": "Task 1",
//         "description": "Update the website design",
//         "date": "2024-10-18",
//         "category": "Design",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "title": "Task 2",
//         "description": "Fix bugs in the dashboard",
//         "date": "2024-10-19",
//         "category": "Development",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "email": "employee3@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "title": "Task 1",
//         "description": "Organize team meeting",
//         "date": "2024-10-17",
//         "category": "Management",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "title": "Task 2",
//         "description": "Set up email campaigns",
//         "date": "2024-10-18",
//         "category": "Marketing",
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true
//       },
//       {
//         "title": "Task 3",
//         "description": "Update social media accounts",
//         "date": "2024-10-20",
//         "category": "Social Media",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "email": "employee4@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "title": "Task 1",
//         "description": "Data analysis report",
//         "date": "2024-10-15",
//         "category": "Data Analysis",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "title": "Task 2",
//         "description": "Train new interns",
//         "date": "2024-10-18",
//         "category": "Training",
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "email": "employee5@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "title": "Task 1",
//         "description": "Prepare quarterly budget",
//         "date": "2024-10-14",
//         "category": "Finance",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "title": "Task 2",
//         "description": "Update financial projections",
//         "date": "2024-10-16",
//         "category": "Finance",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "title": "Task 3",
//         "description": "Meeting with CFO",
//         "date": "2024-10-19",
//         "category": "Management",
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false
//       }
//     ]
//   }
// ];
// const employees = [
//   {
//     id: 1,
//     firstName: "Rajesh",
//     email: "employee1@example.com",
//     password: "123",
//     "taskCounts":{
//       "active":2,
//       "newTask":1,
//       "completed":1,
//       "failed":0
      
//     },
//     tasks: [
//       {
//         title: "Task 1",
//         description: "Complete the sales report",
//         date: "2024-10-20",
//         category: "Sales",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       },
//       {
//         title: "Task 2",
//         description: "Prepare the presentation for Q4",
//         date: "2024-10-21",
//         category: "Management",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false
//       },
//       {
//         title: "Task 3",
//         description: "Client follow-up",
//         date: "2024-10-22",
//         category: "Customer Support",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       }
//     ],
//     taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 0 }
//   },
//   {
//     id: 2,
//     firstName: "Anjali",
//     email: "employee2@example.com",
//     password: "123",
//     tasks: [
//       {
//         title: "Task 1",
//         description: "Update the website design",
//         date: "2024-10-18",
//         category: "Design",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false
//       },
//       {
//         title: "Task 2",
//         description: "Fix bugs in the dashboard",
//         date: "2024-10-19",
//         category: "Development",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       }
//     ],
//     taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 }
//   },
//   {
//     id: 3,
//     firstName: "Vikram",
//     email: "employee3@example.com",
//     password: "123",
//     tasks: [
//       {
//         title: "Task 1",
//         description: "Organize team meeting",
//         date: "2024-10-17",
//         category: "Management",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false
//       },
//       {
//         title: "Task 2",
//         description: "Set up email campaigns",
//         date: "2024-10-18",
//         category: "Marketing",
//         active: false,
//         newTask: false,
//         completed: false,
//         failed: true
//       },
//       {
//         title: "Task 3",
//         description: "Update social media accounts",
//         date: "2024-10-20",
//         category: "Social Media",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       }
//     ],
//     taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 }
//   },
//   {
//     id: 4,
//     firstName: "Sita",
//     email: "employee4@example.com",
//     password: "123",
//     tasks: [
//       {
//         title: "Task 1",
//         description: "Data analysis report",
//         date: "2024-10-15",
//         category: "Data Analysis",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false
//       },
//       {
//         title: "Task 2",
//         description: "Train new interns",
//         date: "2024-10-18",
//         category: "Training",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false
//       }
//     ],
//     taskNumbers: { active: 1, newTask: 0, completed: 1, failed: 0 }
//   },
//   {
//     id: 5,
//     firstName: "Arjun",
//     email: "employee5@example.com",
//     password: "123",
//     tasks: [
//       {
//         title: "Task 1",
//         description: "Prepare quarterly budget",
//         date: "2024-10-14",
//         category: "Finance",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false
//       },
//       {
//         title: "Task 2",
//         description: "Update financial projections",
//         date: "2024-10-16",
//         category: "Finance",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       },
//       {
//         title: "Task 3",
//         description: "Meeting with CFO",
//         date: "2024-10-19",
//         category: "Management",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false
//       }
//     ],
//     taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 }
//   }
// ];
const employees = [
  {
    id: 1,
    firstName: "soumyodip",
    email: "soumyodip@me.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Complete the sales report",
        date: "2024-10-20",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "Prepare the presentation for Q4",
        date: "2024-10-21",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 3",
        description: "Client follow-up",
        date: "2024-10-22",
        category: "Customer Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Arpan",
    email: "arpan@me.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Update the website design",
        date: "2024-10-18",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Fix bugs in the dashboard",
        date: "2024-10-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "pushpaksha",
    email: "pushpaksha@me.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Task 1",
        description: "Organize team meeting",
        date: "2024-10-17",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Set up email campaigns",
        date: "2024-10-18",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Task 3",
        description: "Update social media accounts",
        date: "2024-10-20",
        category: "Social Media",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Maharshi",
    email: "maharshi@me.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Data analysis report",
        date: "2024-10-15",
        category: "Data Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Train new interns",
        date: "2024-10-18",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "md-asif",
    email: "mdasif@me.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Prepare quarterly budget",
        date: "2024-10-14",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Update financial projections",
        date: "2024-10-16",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 3",
        description: "Meeting with CFO",
        date: "2024-10-19",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

console.log(employees);



const admin = {
  "id": 1,
  // firstName: "Arpan",
  "email": "admin@me.com",
  "password": "123"
};

// Function to save employees and admin data to localStorage
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

// Function to retrieve and log the data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return{employees, admin}
};
