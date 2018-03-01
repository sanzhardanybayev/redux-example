const clients = [
  {
    name: "Aray Travel Agency"
  },
  {
    name: "GrandPizza"
  }
];


export default function (state = clients, action) {
  switch (action.type) {
    case 'NEW_CLIENT':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE_CLIENT':
      return state.filter(client => client.name !== action.payload.name);
    default:
      return state;
  }
}
