import * as actions from "../actionCreators";

describe("actions", () => {
  it("should create an action to add a doctor", () => {
    const newDoctorData = {
      name: "Dr. Yoshmi Mukhiya",
      email: "yoshmi@gmail.com",
      age: 22
    };

    const expectedAction = {
      type: "ADD_NEW_DOCTOR",
      newDoctorData
    };
    expect(actions.addNewDoctor(newDoctorData)).toEqual(expectedAction);
  });
});
