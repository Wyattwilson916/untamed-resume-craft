
const CoverLetter = () => {
  return (
    <div className="space-y-6">
      <div className="text-right text-slate-600 mb-8">
        <div>Jacksonville, FL</div>
        <div>wyattwilson916@gmail.com</div>
        <div>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </div>

      <div className="mb-8">
        <div className="text-slate-800 font-medium">Hiring Manager</div>
        <div className="text-slate-600">Tillman Fiber</div>
        <div className="text-slate-600">New York, NY</div>
      </div>

      <div className="mb-6">
        <p className="text-slate-800 font-medium">Re: Network Support Technician Position</p>
      </div>

      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>Dear Hiring Manager,</p>

        <p>
          I am writing to express my strong interest in the Network Support Technician position at Tillman Fiber. 
          With hands-on experience in customer-facing technical troubleshooting, network problem-solving, and 
          independent project management, I am excited to contribute to your team as you build a premier 100% 
          fiber network infrastructure.
        </p>

        <p>
          In my role as Manager at Ross Turf & Ornamental Inc., I developed exceptional customer service skills 
          while managing day-to-day operations independently. I handled all inbound client calls, opened and 
          tracked service tickets to resolution, and resolved issues while maintaining strong customer relationships 
          through professional communication. This experience directly aligns with your requirements for handling 
          customer calls, managing support tickets, and providing responsive customer support.
        </p>

        <p>
          My technical expertise matches several key requirements for this position. I have experience diagnosing 
          home networking issues including routers, modems, and basic configurations, along with foundational 
          knowledge of networking concepts such as IP addressing, LAN, WAN, and VLANs. Currently, I am studying 
          for my Cisco CCNA certification to further strengthen my networking knowledge. I am proficient with 
          Microsoft desktop operating systems and Office Suite, and I have demonstrated ability to research 
          solutions independently using technical resources and documentation.
        </p>

        <p>
          As Lead Developer on BeTuned, I demonstrated my ability to monitor system health, troubleshoot complex 
          technical problems independently, and escalate issues appropriately. I built custom tracking systems 
          to manage performance metrics and maintained system reliability while collaborating with stakeholders. 
          This experience has prepared me to execute complex support tasks, work within ticketing systems, and 
          handle multiple priorities in a fast-paced environment.
        </p>

        <p>
          What particularly attracts me to Tillman Fiber is your commitment to building next-generation broadband 
          infrastructure and your collaborative environment with mentorship opportunities. I thrive in technical 
          support roles that combine problem-solving with customer interaction, and I am eager to contribute to 
          your growing team while developing my skills in fiber network technologies.
        </p>

        <p>
          I am comfortable working EST hours and am excited about the opportunity to grow within a company backed 
          by global digital infrastructure expertise. My combination of technical troubleshooting abilities, 
          customer service experience, and commitment to continuous learning through CCNA certification makes 
          me well-suited for this role.
        </p>

        <p>
          I would welcome the opportunity to discuss how my technical background and customer-focused approach 
          would contribute to Tillman Fiber's continued success. Thank you for considering my application, and 
          I look forward to hearing from you.
        </p>

        <p>Sincerely,</p>
        <p className="font-medium text-slate-800">Wyatt Wilson</p>
      </div>
    </div>
  );
};

export default CoverLetter;
