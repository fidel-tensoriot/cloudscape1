import { Route, Routes } from "react-router-dom";
import {
  AppLayout,
  Container,
  SideNavigation,
  TopNavigation
} from "@cloudscape-design/components";
import { applyMode, applyDensity, Density, Mode } from '@cloudscape-design/global-styles';


import "./styles.css";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Table from "./pages/Tables";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      {/* Generates the main navigation bar */}
      {returnTopNav()}

      {/* This is the main layout component, provides a main container */}
      <AppLayout
        toolsHide={true}
        navigation={
          <SideNavigation
            header={{
              text: "AWS UI",
              href: "/"
            }}
            items={[
              {
                text: "Home",
                type: "link",
                href: "/"
              },
              {
                text: "Forms",
                type: "link",
                href: "/forms"
              },
              {
                text: "Tables",
                type: "link",
                href: "/tables"
              },
              {
                type: "divider"
              }
            ]}
          />
        }
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tables" element={<Table/>} />
            <Route path="/forms" element={<Forms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        }
      />
    </>
  );
}

// ----------- Top Navigation section
function returnTopNav() {
  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "Service",
        logo: {
          src:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSIwIDAgNDMgMzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiMyMzJmM2UiIHN0cm9rZT0iI2Q1ZGJkYiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzMCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8dGV4dCBmb250LWZhbWlseT0iQW1hem9uRW1iZXItUmVndWxhciwgQW1hem9uIEVtYmVyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkiIHk9IjE5Ij5Mb2dvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo=",
          alt: "Service"
        }
      }}
      utilities={[
        {
          type: "button",
          text: "Dark Mode",
          onClick: () => applyMode(Mode.Dark)
        },
        {
          type: "button",
          text: "Link",
          href: "https://example.com/",
          external: true,
          externalIconAriaLabel: " (opens in a new tab)"
        },
        {
          type: "button",
          iconName: "notification",
          title: "Notifications",
          ariaLabel: "Notifications (unread)",
          badge: true,
          disableUtilityCollapse: false
        },
        {
          type: "menu-dropdown",
          iconName: "settings",
          ariaLabel: "Settings",
          title: "Settings",
          items: [
            {
              id: "settings-org",
              text: "Organizational settings"
            },
            {
              id: "settings-project",
              text: "Project settings"
            }
          ]
        },
        {
          type: "menu-dropdown",
          text: "Customer Name",
          description: "email@example.com",
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "preferences", text: "Preferences" },
            { id: "security", text: "Security" },
            {
              id: "support-group",
              text: "Support",
              items: [
                {
                  id: "documentation",
                  text: "Documentation",
                  href: "#",
                  external: true,
                  externalIconAriaLabel: " (opens in new tab)"
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "#",
                  external: true,
                  externalIconAriaLabel: " (opens in new tab)"
                }
              ]
            },
            { id: "signout", text: "Sign out" },
            {id:"mode" , text:"Mode"}

          ]
        }
      ]}
      i18nStrings={{
        searchIconAriaLabel: "Search",
        searchDismissIconAriaLabel: "Close search",
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu"
      }}
    />
  );
}
