export const validateName = (name) => {
  if (!name) return 'Name is required';
  if (/[^a-zA-Z\s]/.test(name)) return 'Name must only contain alphabet characters';
  return null;
};

export const validateMobile = (mobile) => {
  if (!mobile) return 'Mobile number is required';
  if (!/^\d+$/.test(mobile)) return 'Mobile number must be numeric';
  return null;
};

export const validateAge = (age) => {
  if (!age) return 'Age is required';
  if (!/^\d+$/.test(age)) return 'Age must be numeric';
  return null;
};

export const validateWeight = (weight) => {
  if (!weight) return 'Weight is required';
  if (!/^\d+(\.\d+)?$/.test(weight)) return 'Weight must be a valid number'; // allows decimal values
  return null;
};

export const validateBP = (pulse) => {
  if (!BP) return 'BP is required';
  if (!/^\d+$/.test(BP)) return 'BP must be numeric';
  return null;
};

export const validatePulse = (pulse) => {
  if (!pulse) return 'Pulse is required';
  if (!/^\d+$/.test(pulse)) return 'Pulse must be numeric';
  return null;
};

export const validateGender = (gender) => {
  if (!gender) return 'Gender is required';
  return null;
};

export const validateDiabetes = (diabetes) => {
  if (!diabetes) return 'Diabetes status is required';
  return null;
};

export const validateBp = (bp) => {
  if (!bp) return 'BP status is required';
  return null;
};
