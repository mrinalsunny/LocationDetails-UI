import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ControllerTab from "./controllerTab";
import BrowserTab from "./browserTab";
import DatabaseTab from "./databaseTab";

const Navbar = () => {
  const [key, setKey] = useState("browser");
  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="browser" title="Browser">
        <br />
        <BrowserTab />
      </Tab>
      <Tab eventKey="controller" title="Controller">
        <br />
        <ControllerTab />
      </Tab>
      <Tab eventKey="database" title="Database">
        <br />
        <DatabaseTab />
      </Tab>
    </Tabs>
  );
};

export default Navbar;
