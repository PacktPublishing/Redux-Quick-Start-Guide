import reducer from "../reducers";
import * as types from "../ActionTypes";

const newDoctorData = {
  name: "Dr. Yoshmi Mukhiya",
  email: "yoshmi@gmail.com",
  age: 22
};

describe("add doctor reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([
      {
        newDoctorData: {},
        completed: false
      }
    ]);
  });

  it("should handle ADD_NEW_DOCTOR", () => {
    expect(
      reducer([], {
        type: types.ADD_NEW_DOCTOR,
        newDoctorData
      })
    ).toEqual([
      {
        data: newDoctorData,
        completed: false
      }
    ]);
  });
});
