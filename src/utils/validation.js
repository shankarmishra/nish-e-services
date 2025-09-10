// Professional form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email),
    message: emailRegex.test(email) ? '' : 'Please enter a valid email address'
  };
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return {
    isValid: phoneRegex.test(phone.replace(/\D/g, '')),
    message: phoneRegex.test(phone.replace(/\D/g, '')) ? '' : 'Please enter a valid 10-digit phone number'
  };
};

export const validateRequired = (value, fieldName) => {
  return {
    isValid: value && value.trim().length > 0,
    message: value && value.trim().length > 0 ? '' : `${fieldName} is required`
  };
};

export const validateMinLength = (value, minLength, fieldName) => {
  return {
    isValid: value && value.length >= minLength,
    message: value && value.length >= minLength ? '' : `${fieldName} must be at least ${minLength} characters`
  };
};

export const validateSearchQuery = (query) => {
  const trimmedQuery = query.trim();
  return {
    isValid: trimmedQuery.length >= 2,
    message: trimmedQuery.length >= 2 ? '' : 'Search query must be at least 2 characters'
  };
};

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
};

export const validateForm = (formData, rules) => {
  const errors = {};
  let isValid = true;

  Object.keys(rules).forEach(field => {
    const value = formData[field];
    const fieldRules = rules[field];
    
    fieldRules.forEach(rule => {
      const validation = rule(value, field);
      if (!validation.isValid) {
        errors[field] = validation.message;
        isValid = false;
      }
    });
  });

  return {
    isValid,
    errors
  };
};
