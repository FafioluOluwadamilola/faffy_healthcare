export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
    specialty: "Cardiology",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    specialty: "Dermatology",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    specialty: "Orthopedics",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    specialty: "Pediatrics",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    specialty: "Neurology",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    specialty: "General Practice",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    specialty: "Gynecology",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    specialty: "ENT",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    specialty: "Psychiatry",
  },
];


export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
