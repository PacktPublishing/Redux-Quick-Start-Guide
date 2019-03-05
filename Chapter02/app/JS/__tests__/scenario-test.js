describe("General Test Scenario", () => {
  it("Matchers", () => {
    expect(24 + 20).toBe(44);
    expect({ one: 1, two: 3 }).toEqual({ one: 1, two: 3 });

    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        expect(i + j).not.toBe(0);
      }
    }
  });

  it("Truetiness", () => {
    const isActive = null;
    expect(isActive).toBeNull();
    expect(isActive).toBeDefined();
    expect(isActive).not.toBeUndefined();
    expect(isActive).not.toBeTruthy();
    expect(isActive).toBeFalsy();
  });

  it("zeros", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  it("Numbers", () => {
    const value = 100 + 200;
    expect(value).toBeGreaterThan(200);
    expect(value).toBeGreaterThanOrEqual(200);
    expect(value).toBeLessThan(500);
    expect(value).toBeLessThanOrEqual(300);
    expect(value).toBe(300);
    expect(value).toEqual(300);
  });

  it("Arrays", () => {
    const resources = [
      "Patients",
      "Practitioners",
      "Accountants",
      "Employer",
      "Appointments"
    ];

    expect(resources).toContain("Accountants");
  });

  it("Exceptions", () => {
    const t = () => {
      throw new TypeError();
    };
    expect(t).toThrow(TypeError);
  });
});
