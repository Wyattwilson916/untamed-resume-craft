
const EducationSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Education & Certifications</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-slate-800">Cisco CCNA Certification (In Progress)</h3>
          <p className="text-slate-600">Studying networking, access control, and security fundamentals – Expected 2025</p>
        </div>
        
        <div>
          <h3 className="font-medium text-slate-800">Fullstack Academy — Web Development Bootcamp</h3>
          <p className="text-slate-600">Completed Apr. 2022</p>
        </div>
        
        <div>
          <h3 className="font-medium text-slate-800">Florida State College at Jacksonville — Associate of Arts (AA)</h3>
          <p className="text-slate-600">Graduated Jan. 2022</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-slate-800">References</h3>
          <p className="text-slate-600">Available upon request.</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
