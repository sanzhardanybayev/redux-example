export const  companyCreated = (value) => {
  return {
    type: 'COMPANY_CREATED',
    payload: value
  };
};

export const  newClient = (value) => {
  return {
    type: "NEW_CLIENT",
    payload: value
  }
};

export const  removeClient = (value) => {
  return {
    type: "REMOVE_CLIENT",
    payload: value
  }
};
