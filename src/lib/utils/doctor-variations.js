// Array of prestigious medical institutions
const institutions = [
  'Stanford',
  'Harvard',
  'Johns Hopkins',
  'Mayo Clinic',
  'Cleveland Clinic',
  'UCLA Medical',
  'Columbia Medical'
];

// Array of doctor names (first and last names separately for more combinations)
const firstNames = ['Harrison', 'Michael', 'William', 'Robert', 'James', 'David', 'Richard'];
const lastNames = ['Oakridge', 'Bennett', 'Mitchell', 'Richardson', 'Anderson', 'Thompson', 'Williams'];

// Array of medical specialties
const specialties = [
  'Neuroscientist',
  'Endocrinologist',
  'Research Director',
  'Medical Professor',
  'Clinical Researcher',
  'Chief of Medicine',
  'Medical Director'
];

// Generate random doctor details
export const generateDoctorDetails = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const institution = institutions[Math.floor(Math.random() * institutions.length)];
  const specialty = specialties[Math.floor(Math.random() * specialties.length)];
  
  // Generate random but realistic view count
  const views = Math.floor(Math.random() * (500000 - 250000) + 250000);
  
  // Generate random recent hours (between 2 and 24)
  const hours = Math.floor(Math.random() * 22) + 2;

  // Use direct image URL
  const imageUrl = 'https://drive.google.com/uc?export=view&id=1vwBpUpeSv38I3UHxI5LfYUsmSipfuOgI';

  return {
    name: `Dr. ${firstName} ${lastName}`,
    title: `${institution} ${specialty}`,
    published: `${hours} hours ago`,
    views: views.toLocaleString(),
    imageData: imageUrl
  };
}; 