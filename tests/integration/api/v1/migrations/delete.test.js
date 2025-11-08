describe("DELETE /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Trying DELETE method against the endpoint", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "DELETE",
      });
      expect(response.status).toBe(405);
      const responseBody = await response.json();
      expect(responseBody).toEqual({ error: 'Method "DELETE" not allowed' });
      expect(response.headers.get("Allow")).toBe("GET, POST");
    });
  });
});
