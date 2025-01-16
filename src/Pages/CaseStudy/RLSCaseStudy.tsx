import React from "react";
import { ReactComponent as AgentWebsite } from "./rls/agent-website.svg"
import { ReactComponent as MLSPropertyfinderDashboard } from "./rls/MLSPropertyfinder-dashboard.svg"

export const RLSCaseStudy = () => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1 1 auto" }}><h2 style={{ marginBottom: 0 }}>RLS2000.com</h2></div>
        <div><img src={`${process.env.PUBLIC_URL}/rls/rls.png`} alt="RLS2000.com" /></div>
      </div>
      <h4>2000 to 2016 M&A Elm Street Technology</h4>

      <div>RLS2000.com (RLS) was a company specializing in real estate listing services. The company offered various tools to support real estate professionals and their clients, including:</div>
      <ul>
        <li>Property Messenger</li>

        <li>Property Finder</li>

        <li>Estimates</li>

        <li>Property History</li>
      </ul>

      <h3 style={{ marginBottom: 0 }}>Flagship Product: MLSPropertyfinder.com</h3>


      <div style={{ display: "flex", alignItems: "end" }}>
        <div>RLS's flagship product, MLSPropertyfinder.com, was a Client Management System designed specifically for real estate agents. This platform enabled agents to:</div>
        <div><img src={`${process.env.PUBLIC_URL}/rls/mls.png`} alt="MLSPropertyfinder.com" /></div>
      </div>
      <ul>
        <li>Grant their clients (homeowners and potential homeowners) access to the open market of houses for sale.</li>

        <li>Manage and streamline client interactions and property searches effectively.</li>
      </ul>
      <h3>Market Coverage</h3>
      <div>
        RLS serviced 4 of the 6 Multiple Listing Services (MLS) within New England, establishing a significant footprint in the regional real estate market.</div>

      <h3>Company Overview</h3>
      <ul>
        <li>Industry: Real Estate</li>

        <li>Employees: 8 to 25</li>

        <li>Reported Revenues: $500,000 to $5 million</li>
      </ul>
      <h3>Technology Overview</h3>
      <div style={{ display: "flex" }}>
        <div>
          <MLSPropertyfinderDashboard height="300px" style={{ marginRight: '1.6rem' }} />
        </div>
        <div>

          <div>With over 2,000 clients, RLS2000.com leveraged robust technology solutions to provide real-time data access, seamless integration with MLS systems, and user-friendly interfaces. Their proprietary platforms were built to enhance efficiency for real estate professionals by:</div>
          <ul>
            <li>Automating listing updates and client notifications.</li>

            <li>Offering secure and scalable infrastructure to support thousands of users simultaneously.</li>

            <li>Providing mobile and desktop compatibility for ease of access.</li>
          </ul>
          <div>Additionally, RLS developed custom websites tailored to meet the branding and functional needs of individual real estate agents and agencies. These custom sites featured:</div>
          <ul>
            <li>Integration with MLS data for real-time property updates.</li>

            <li>Responsive design to ensure usability on all devices.</li>

            <li>Customizable templates and branding options to reflect the unique identity of each client.</li>
          </ul>
        </div>
      </div>
      <h3>Database Technology</h3>

      <div>RLS utilized Microsoft SQL Server (MSSQL) as its primary database system, leveraging Data Transformation Services (DTS) for efficient data migration and processing. This robust database infrastructure supported:</div>
      <ul>
        <li>Real-time synchronization of MLS data.</li>

        <li>Scalable storage for extensive property listings and client records.</li>

        <li>High-performance querying and reporting capabilities.</li>
      </ul>
      <h3>Website Technology</h3>
      <div style={{ display: "flex" }}>
        <div>
          <div>Initially, client websites were developed using classic ASP. Over time, RLS transitioned to .NET using the MVC model, which allowed for a templated design. This approach enabled:</div>
          <ul>
            <li>Consistent underlying code to display information across multiple sites.</li>

            <li>Client-specific customization within a unified framework.</li>
          </ul>
          <div>The front-end development utilized early libraries such as Angular, Ember, React, and jQuery to build dynamic, interactive user experiences. This combination of technologies ensured:</div>
          <ul>
            <li>Modern, responsive design for improved user engagement.</li>

            <li>Efficient development processes while maintaining high customization potential.</li>

          </ul>
          <div>The company's technology offerings ensured reliable performance and streamlined workflows, empowering agents to focus on client relationships and sales.</div>
        </div>
        <div>
          <AgentWebsite height="300px" />
        </div>
      </div>
      <h3>Conclusion</h3>

      <div>RLS2000.com played a pivotal role in modernizing real estate listing services in New England. By combining innovative technology with user-centric design, the company empowered real estate professionals to enhance client relationships, streamline operations, and navigate a competitive market. Although RLS2000.com's operational scale was modest, its impact on the industry demonstrated how targeted solutions and effective tools can create lasting value for both agents and their clients.</div>
    </div>
  );
};

