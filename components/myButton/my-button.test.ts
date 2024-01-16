
import { beforeEach, afterEach, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import "./my-button";
 

const clean = (text:string) => text.replace(/<!--.*-->/,"")

describe("Button with increment", async () => {
    let elem:HTMLElement;
  beforeEach(() => {
    elem = document.createElement("my-button");
    elem.setAttribute("name", "World")
    document.body.appendChild(elem)
  });
  afterEach(() => {
    elem.remove()
  })
 
  it("should increment the count on each click", async () => {

    const litComponent = document.body.querySelector("my-button")
    if(litComponent === null) {
        return expect(false).toBeTruthy()
    }
    const litRoot = litComponent.shadowRoot;
    if(litRoot === null ) {
        return expect(false).toBeTruthy()
    }
    const button = litRoot.querySelector("button");
    const worldText = litRoot.querySelector("h1");

    if(button === null|| worldText === null) {
        return expect(false).toBeTruthy()
    }
    
    await userEvent.click(button);
    expect(clean(button.innerText).includes("2"))
    await userEvent.click(button);
    expect(clean(button.innerText).includes("3"))

  });

  it("should show name props", async () => {

    const litComponent = document.body.querySelector("my-button")
    if(litComponent === null) {
        return expect(false).toBeTruthy()
    }
    const litRoot = litComponent.shadowRoot;
    if(litRoot === null ) {
        return expect(false).toBeTruthy()
    }
    const button = litRoot.querySelector("button");
    const worldText = litRoot.querySelector("h1");
    if(button === null|| worldText === null) {
        return expect(false).toBeTruthy()
    }
 
    expect(litComponent.attributes.getNamedItem('name')?.value).toBe('World')
    
  });


});
