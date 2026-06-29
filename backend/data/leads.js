const leads = [
  {
    "id": 1,
    "name": "Rahul Sharma",
    "phone": "9876543210",
    "email": "rahul@gmail.com",
    "service": "Website Development",
    "source": "Website",
    "campaign": "Homepage",
    "assignedTo": "John",
    "status": "New",
    "createdAt": "2026-06-28"
  },
  {
    "id": 2,
    "name": "Priya Singh",
    "phone": "9123456780",
    "email": "priya@gmail.com",
    "service": "SEO",
    "source": "Meta Ads",
    "campaign": "Summer Campaign",
    "assignedTo": "Amit",
    "status": "Contacted",
    "createdAt": "2026-06-29"
  },
  {
    "id": 3,
    "name": "Aman Verma",
    "phone": "9988776655",
    "email": "aman@gmail.com",
    "service": "Digital Marketing",
    "source": "Google Ads",
    "campaign": "Search Ads",
    "assignedTo": "Neha",
    "status": "Qualified",
    "createdAt": "2026-06-27"
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "phone": "9876501234",
    "email": "sneha@gmail.com",
    "service": "Mobile App",
    "source": "Website",
    "campaign": "Contact Form",
    "assignedTo": "Rohit",
    "status": "New",
    "createdAt": "2026-06-29"
  },
  {
    "id": 5,
    "name": "Vikas Kumar",
    "phone": "9012345678",
    "email": "vikas@gmail.com",
    "service": "ERP Software",
    "source": "Meta Ads",
    "campaign": "Lead Campaign",
    "assignedTo": "Anjali",
    "status": "Contacted",
    "createdAt": "2026-06-26"
  },
  {
    "id": 6,
    "name": "Pooja Mehta",
    "phone": "9090909090",
    "email": "pooja@gmail.com",
    "service": "CRM",
    "source": "Google Ads",
    "campaign": "Business CRM",
    "assignedTo": "John",
    "status": "Converted",
    "createdAt": "2026-06-25"
  },
  {
    "id": 8,
    "name": "Pooja Sharma",
    "email": "pooja.sharma@gmail.com",
    "phone": "9876543217",
    "source": "Website",
    "status": "Qualified",
    "city": "Ghaziabad",
    "assignedTo": "Neha",
    "createdAt": "2026-06-08"
  },
  {
    "id": 9,
    "name": "Deepak Mishra",
    "email": "deepak.mishra@gmail.com",
    "phone": "9876543218",
    "source": "Instagram",
    "status": "Converted",
    "city": "Delhi",
    "assignedTo": "Amit",
    "createdAt": "2026-06-09"
  },
  {
    "id": 10,
    "name": "Kavita Jain",
    "email": "kavita.jain@gmail.com",
    "phone": "9876543219",
    "source": "Google Ads",
    "status": "New",
    "city": "Noida",
    "assignedTo": "Neha",
    "createdAt": "2026-06-10"
  },
  {
    "id": 11,
    "name": "Arjun Patel",
    "email": "arjun.patel@gmail.com",
    "phone": "9876543220",
    "source": "Website",
    "status": "Contacted",
    "city": "Delhi",
    "assignedTo": "Amit",
    "createdAt": "2026-06-11"
  },
  {
    "id": 12,
    "name": "Nisha Kapoor",
    "email": "nisha.kapoor@gmail.com",
    "phone": "9876543221",
    "source": "Facebook",
    "status": "Qualified",
    "city": "Gurgaon",
    "assignedTo": "Riya",
    "createdAt": "2026-06-12"
  },
  {
    "id": 13,
    "name": "Saurabh Singh",
    "email": "saurabh.singh@gmail.com",
    "phone": "9876543222",
    "source": "Website",
    "status": "Converted",
    "city": "Delhi",
    "assignedTo": "Neha",
    "createdAt": "2026-06-13"
  },
  {
    "id": 14,
    "name": "Meera Joshi",
    "email": "meera.joshi@gmail.com",
    "phone": "9876543223",
    "source": "Instagram",
    "status": "Lost",
    "city": "Faridabad",
    "assignedTo": "Amit",
    "createdAt": "2026-06-14"
  },
  {
    "id": 15,
    "name": "Harsh Vardhan",
    "email": "harsh.vardhan@gmail.com",
    "phone": "9876543224",
    "source": "Google Ads",
    "status": "New",
    "city": "Noida",
    "assignedTo": "Riya",
    "createdAt": "2026-06-15"
  },
  {
    "id": 16,
    "name": "Simran Kaur",
    "email": "simran.kaur@gmail.com",
    "phone": "9876543225",
    "source": "Facebook",
    "status": "Contacted",
    "city": "Delhi",
    "assignedTo": "Neha",
    "createdAt": "2026-06-16"
  },
  {
    "id": 17,
    "name": "Rakesh Chauhan",
    "email": "rakesh.chauhan@gmail.com",
    "phone": "9876543226",
    "source": "Website",
    "status": "Qualified",
    "city": "Ghaziabad",
    "assignedTo": "Amit",
    "createdAt": "2026-06-17"
  },
  {
    "id": 18,
    "name": "Divya Arora",
    "email": "divya.arora@gmail.com",
    "phone": "9876543227",
    "source": "Instagram",
    "status": "Converted",
    "city": "Delhi",
    "assignedTo": "Riya",
    "createdAt": "2026-06-18"
  },
  {
    "id": 19,
    "name": "Manish Agarwal",
    "email": "manish.agarwal@gmail.com",
    "phone": "9876543228",
    "source": "Google Ads",
    "status": "Lost",
    "city": "Gurgaon",
    "assignedTo": "Neha",
    "createdAt": "2026-06-19"
  },
  {
    "id": 20,
    "name": "Ayesha Khan",
    "email": "ayesha.khan@gmail.com",
    "phone": "9876543229",
    "source": "Website",
    "status": "New",
    "city": "Delhi",
    "assignedTo": "Amit",
    "createdAt": "2026-06-20"
  }
];

module.exports = leads;
