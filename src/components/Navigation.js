import React from "react";
import Link from "./NavigationLink";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import NavigationList from "@kiwicom/orbit-components/lib/NavigationList";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";

const Navigation = () => (
  <NavigationBar>
    <NavigationList type="inline">
      <ButtonLink>
        <Link to="/">Home</Link>
      </ButtonLink>
      <ButtonLink>
        <Link to="/form">Form</Link>
      </ButtonLink>
    </NavigationList>
  </NavigationBar>
);

export default Navigation;
