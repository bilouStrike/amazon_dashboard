// Generate random integer based on min and max
export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create slug from text
export const slugify = (text) => {
  return text
    .toString()                    
    .toLowerCase()               
    .normalize('NFD') 
    .trim()               
    .replace(/\s+/g, '-') 
    .replace(/[^\w\-]+/g, '')     
    .replace(/\-\-+/g, '-'); 
}

// generate unique key
export const uniqueKey = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return  Math.random().toString(36).substr(2, 9);
};