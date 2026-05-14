const KEY = "superstay_properties";

export const getProperties = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProperty = (property) => {
  const data = getProperties();
  data.push(property);
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const removeProperty = (id) => {
  const data = getProperties().filter(item => item.id !== id);
  localStorage.setItem(KEY, JSON.stringify(data));
};