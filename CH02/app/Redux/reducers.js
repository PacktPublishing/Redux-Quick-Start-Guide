import { ADD_NEW_DOCTOR } from "./actionTypes";

const initialState = [
  {
    newDoctorData: {},
    completed: false
  }
];

export default function addDoctor(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_DOCTOR:
      return [
        {
          completed: false,
          data: action.newDoctorData
        },
        ...state
      ];

    default:
      return state;
  }
}
