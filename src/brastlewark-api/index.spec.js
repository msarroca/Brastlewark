import getApiInfo from ".";

describe("getApiInfo", () => {
  it("renders DetailPanel Component", () => {
    getApiInfo().then(population => {
      expect(population.name).toBe("string");
      expect(population.id).toBe("number");
      expect(population.thumbnail).toBe("number");
      expect(population.weight).toBe("number");
      expect(population.hair_color).toBe("string");
      expect(population.professions).arrayContaining();
      expect(population.friends).arrayContaining();
    });
  });
});
