import { scrollToId } from "@/app/service/scrollService";
import "@testing-library/jest-dom";

describe("scrollToId", () => {
  beforeEach(() => {
    // https://github.com/jsdom/jsdom/issues/1695
    window.HTMLElement.prototype.scrollIntoView = function () {};
  });

  it("scrolls to the correct element", () => {
    const element = document.createElement("div");
    element.id = "testId";
    document.body.appendChild(element);
    scrollToId("testId");
    expect(window.scrollY).toBe(element.offsetTop);
  });

});
