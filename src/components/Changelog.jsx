// App.jsx
import React from "react";
import "../Changelog.css";
import myImage from "../assets/wokoLogo.webp";

function App() {
  const gradientStyle = {
    backgroundImage: "linear-gradient(to top, #333, #ddd)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  };

  return (
    <div className="black-page">
      <h1
        className={`changelog-heading gradient-heading`}
        style={gradientStyle}
      >
        Changelog
      </h1>
      <p className="new-updates">New updates and improvements to Worko</p>

      <img src={myImage} alt="Logo" />

      <div className="update-main">
        <div className="dates">October 13, 2023</div>
        <h2>Worko Security Update</h2>
        <div className="update-content">
          <p>
            At Worko, your data's security is our top priority. In this security
            update, we've implemented several enhancements to ensure your
            information remains safe and confidential:
          </p>
          <ul>
            <li>
              <b>Two-Factor Authentication (2FA)</b>: We've added support for
              two-factor authentication, an extra layer of security to protect
              your Worko account. Enable 2FA in your account settings for added
              peace of mind.
            </li>
            <li>
              <b>Data Encryption</b>: Worko now uses advanced encryption
              protocols to secure your data, both in transit and at rest. Your
              information is shielded from unauthorized access.
            </li>
            <li>
              <b>Regular Security Audits</b>: We conduct regular security audits
              and vulnerability assessments to identify and address potential
              threats proactively.
            </li>
            <li>
              <b>User Access Controls</b>: Enhanced user access controls allow
              you to manage permissions and restrict access to sensitive
              information within your Worko workspace.
            </li>
          </ul>
          <p>
            Your trust is of utmost importance to us, and these security
            enhancements reflect our commitment to safeguarding your data.
          </p>
          <p>
            These detailed changelog posts provide users with insights into the
            latest updates, improvements, and security measures in Worko,
            enhancing their understanding and trust in the platform.
          </p>
        </div>
      </div>

      <img src={myImage} alt="Logo" />

      <div className="update-main">
        <div className="dates">October 13, 2023</div>
        <h2>Worko Premium Plan Enhancements</h2>
        <div className="update-content">
          <p>
            We're delighted to announce several enhancements to Worko Premium,
            providing even more value to our premium users:
          </p>
          <ul>
            <li>
              <b>Custom Task Templates</b>: Premium users can now create and
              save custom task templates, streamlining the task creation process
              for recurring tasks or project-specific templates.
            </li>
            <li>
              <b>Advanced Reporting</b>: Unlock advanced reporting features with
              Worko Premium. Generate detailed reports on task performance, team
              productivity, and more, all in one place.
            </li>
            <li>
              <b>Enhanced Integrations</b>: Premium users enjoy priority access
              to new integrations and updates, ensuring you stay at the
              forefront of task management technology.
            </li>
            <li>
              Premium Support: Our premium support team is ready to assist you
              around the clock. Get prompt assistance with any Worko-related
              queries or issues.
            </li>
            <li>
              <b>Task History</b>: Premium users can now access an extended task
              history, providing a comprehensive view of task changes and
              updates.
            </li>
          </ul>
          <p>
            Worko Premium is designed to elevate your task management
            experience, and these enhancements aim to make it an even more
            valuable investment.
          </p>
        </div>
      </div>

      <img src={myImage} alt="Logo" />

      <div className="update-main">
        <div className="dates">October 13, 2023</div>
        <h2>Worko Integrations Update</h2>
        <div className="update-content">
          <p>
            We're excited to kick off the new year with some fantastic updates
            to Worko's integrations:
          </p>
          <ul>
            <li>
              <b>Slack Integration</b>: Now you can seamlessly connect your
              Worko workspace with Slack. Receive task notifications and updates
              directly in your Slack channels, enhancing team communication.
            </li>
            <li>
              <b>Google Calendar Integration</b>: Streamline your scheduling
              with Worko's Google Calendar integration. Sync your tasks and
              deadlines with your Google Calendar for a comprehensive view of
              your day.
            </li>
            <li>
              <b>Trello Integration</b>: If you're a Trello user, you'll love
              our enhanced Trello integration. Easily import Trello boards into
              Worko and vice versa, making cross-platform task management a
              breeze.
            </li>
            <li>
              <b>Asana Integration</b>: Worko's Asana integration has been
              revamped for improved task syncing and collaboration between the
              two platforms.
            </li>
            <li>
              <b>Microsoft Teams Integration</b>: Connect Worko with Microsoft
              Teams to foster seamless task management within your Teams
              workspace. Share task updates, assignments, and deadlines without
              leaving Teams.
            </li>
          </ul>
          <p>
            These integration updates aim to make Worko even more versatile and
            adaptable to your workflow.
          </p>
        </div>
      </div>

      <img src={myImage} alt="Logo" />

      <div className="update-main">
        <div className="dates">October 13, 2023</div>
        <h2>Worko Analytics for In-depth Insights</h2>
        <div className="update-content">
          <p>
            We understand the importance of data-driven decisions in task
            management. That's why we're thrilled to introduce Worko Analytics:
          </p>
          <ul>
            <li>
              <b>Task Performance Metrics</b>: Gain insights into task
              completion rates, average task duration, and more. Use this data
              to identify bottlenecks and improve task efficiency.
            </li>
            <li>
              <b>Team Productivity Dashboard</b>: Monitor your team's
              productivity with a centralized dashboard. Track completed tasks,
              overdue tasks, and team members' performance.
            </li>
            <li>
              <b>Custom Reports</b>: Create custom reports to analyze task data
              based on your unique needs. Visualize your data with charts and
              graphs for a deeper understanding.
            </li>
            <li>
              <b>Export Data</b>: Need to share or analyze your data outside of
              Worko? You can now export task data to CSV files for further
              analysis or reporting.
            </li>
          </ul>
        </div>
      </div>

      <img src={myImage} alt="Logo" />

      <div className="update-main">
        <div className="dates">October 13, 2023</div>
        <h2>Real-time Collaboration in Worko</h2>
        <div className="update-content">
          <p>
            At Worko, we believe that collaboration is the key to success.
            That's why we're excited to introduce real-time collaboration
            features to enhance your team's productivity:
          </p>
          <ul>
            <li>
              <b>Live Task Updates</b>: When you and your team members work on
              the same task, changes are now reflected in real-time. No more
              confusion or overlapping efforts.x
            </li>
            <li>
              <b>Task Comments</b>: Leave comments on tasks to provide context,
              share ideas, or ask questions. Comments keep the conversation
              organized and help you communicate effectively.
            </li>
            <li>
              <b>Task Sharing</b>: Easily share tasks with team members, making
              it simple to delegate responsibilities and keep everyone aligned.
            </li>
            <li>
              <b>Notifications</b>: Stay informed with instant notifications
              about task updates, comments, and mentions. Never miss an
              important development again.
            </li>
          </ul>
          <p>
            These collaborative features are designed to streamline teamwork,
            boost transparency, and ultimately drive project success.
          </p>
        </div>
      </div>

      <img src={myImage} alt="Logo" />

      <div className="update-main">
        <div className="dates">October 13, 2023</div>
        <h2>Worko Version 2.0 Release</h2>
        <div className="update-content">
          <p>
            We are thrilled to announce the release of Worko version 2.0! This
            update represents a significant milestone in our journey to provide
            you with the best task management experience. Here's what you can
            expect:
          </p>
          <ul>
            <li>
              <b>Sleek New Design</b>: We've given Worko a fresh, modern look.
              The user interface is now more intuitive than ever, making task
              management a breeze.
            </li>
            <li>
              <b>Enhanced Mobile Experience</b>: With the new mobile-responsive
              design, Worko is fully optimized for smartphones and tablets. You
              can manage tasks and stay productive while on the move.
            </li>
            <li>
              <b>Task Dependencies</b>: You asked, and we delivered. Worko now
              supports task dependencies, allowing you to define the order in
              which tasks should be completed. This feature is a game-changer
              for project management and complex workflows.
            </li>
            <li>
              <b>Improved Performance</b>: We've fine-tuned Worko's performance
              to ensure lightning-fast task loading and smoother interactions,
              even when dealing with extensive task lists.
            </li>
            <li>
              <b>Worko Premium</b>: Along with this update, we're introducing
              Worko Premium. Upgrade to access advanced features like unlimited
              task history, priority support, and integrations with popular
              productivity tools.
            </li>
          </ul>
        </div>
      </div>

      {/* Uncomment the newsletter subscription container when ready */}
      {/* <div className="newsletter-box">
        <div className="subscribe-heading">Subscribe to Newsletter</div>
        <div className="exclusive-content">
          Get exclusive content and become a part of the Worko community.
        </div>
        <div className="email-input-container">
          <input
            type="email"
            placeholder="Enter Email address"
            className="email-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
