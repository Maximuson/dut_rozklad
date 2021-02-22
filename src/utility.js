export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const getSelectData = (select) => {
  const options = [...select.childNodes]
    .map((option) => {
      return {
        id: option.attrs && option.attrs.value,
        alias: option.innerText,
      };
    })
    .filter((option) => {
      return option.id;
    });
  return options;
};
