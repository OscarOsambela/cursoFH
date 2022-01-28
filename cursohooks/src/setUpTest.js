//npm install --save-dev enzyme-to-json
//npm add -D enzyme-to-json
//npm add -D enzyme
//npm install --save-dev @wojtekmaj/enzyme-adapter-react-17

//configuration enzyme
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import "@testing-library/jest-dom";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
