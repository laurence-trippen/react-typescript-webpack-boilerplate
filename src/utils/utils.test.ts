import { formatBytes } from "./utils";

test('format bytes 2 KB', () => {
  expect(formatBytes(2048)).toBe("2 KB");
});
