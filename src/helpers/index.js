export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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