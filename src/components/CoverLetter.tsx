
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
        <div className="text-slate-600">Technical Support Department</div>
        <div className="text-slate-600">[Company Name]</div>
      </div>

      <div className="mb-6">
        <p className="text-slate-800 font-medium">Re: Technical Support Specialist Position</p>
      </div>

      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>Dear Hiring Manager,</p>

        <p>
          I am writing to express my strong interest in the Technical Support Specialist position at your company. 
          With hands-on experience in customer-facing technical troubleshooting, network problem-solving, and 
          independent project management, I am excited to bring my skills to support your clients' technical needs.
        </p>

        <p>
          In my role as Manager at Ross Turf & Ornamental Inc., I developed exceptional customer service skills 
          while managing day-to-day operations independently. I handled all inbound client calls, scheduled jobs, 
          and resolved service-related issues while maintaining strong customer relationships through personalized 
          support. This experience taught me the importance of clear communication and reliable follow-through in 
          client-facing roles.
        </p>

        <p>
          My technical expertise spans several key areas relevant to your position. I have experience diagnosing 
          home networking issues including routers, modems, and basic configurations, along with foundational 
          knowledge of networking concepts such as LAN, WAN, VLANs, and IP addressing. Currently, I am studying 
          for my Cisco CCNA certification to further strengthen my networking knowledge. Additionally, my work 
          as Lead Developer on BeTuned demonstrated my ability to independently troubleshoot complex technical 
          problems, build custom systems, and optimize performance for end-users.
        </p>

        <p>
          What sets me apart is my combination of technical problem-solving abilities and proven customer service 
          experience. I understand that technical support requires not only the ability to diagnose and resolve 
          issues but also the patience and communication skills to guide clients through solutions in a clear, 
          professional manner. My experience building internal tracking systems and managing client relationships 
          has prepared me to excel in a support environment where both technical competency and customer satisfaction 
          are paramount.
        </p>

        <p>
          I am particularly drawn to technical support because it combines my passion for solving technical 
          challenges with my enjoyment of helping others. I thrive in environments where I can use my analytical 
          skills to troubleshoot problems while building positive relationships with clients through responsive, 
          professional service.
        </p>

        <p>
          I would welcome the opportunity to discuss how my technical background, customer service experience, 
          and commitment to continuous learning would contribute to your support team's success. Thank you for 
          considering my application, and I look forward to hearing from you.
        </p>

        <p>Sincerely,</p>
        <p className="font-medium text-slate-800">Wyatt Wilson</p>
      </div>
    </div>
  );
};

export default CoverLetter;
