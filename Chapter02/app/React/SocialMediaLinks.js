import React from "react";
import Link from "react-router-dom/Link";

const SocialMediaLinks = () => (
  <ul>
    <li>
      <Link to="https://www.facebook.com/jagapati">Facebook</Link>
    </li>
    <li>
      <Link to="https://github.com/sureshHARDIYA">GitHub</Link>
    </li>
    <li>
      <Link to="https://www.researchgate.net/profile/Suresh_Mukhiya2">
        ResearchGate
      </Link>
    </li>
    <li>
      <Link to="https://twitter.com/dr_code_skm">Twitter</Link>
    </li>
  </ul>
);

export default SocialMediaLinks;
