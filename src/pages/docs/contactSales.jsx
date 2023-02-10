import React from "react";
import HubspotForm from "react-hubspot-form";
import Link from 'next/link'


export default function App() { 
  return (
    <div className="salesform">
    <div className="formtext">
      <p>Our sales team is always happy to answer any questions you might have. If you provide us with the total number of clinitians you have on staff, we can supply you with a quote to get us started. Looking to a demo? Use this calander link to <Link href="https://meetings.hubspot.com/ryan1574">schedule your demo</Link> today.</p>
    </div>
      <HubspotForm
        portalId="4753378"
        formId="c35e528c-5f90-4bd6-8c5a-fe4e6e6eeb1e"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div></div>}
      />
    </div>
  );
}
