
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CoverLetterTool = () => {
  // Header data
  const [name] = useState("Wyatt Wilson");
  const [title] = useState("Technical Support Specialist");
  const [location, setLocation] = useState("Jacksonville, FL");
  const [email, setEmail] = useState("wyattwilson916@gmail.com");

  // Cover letter content
  const [greeting, setGreeting] = useState("Dear Mixpanel Support Team,");
  const [body, setBody] = useState(`I'm excited to apply for the Support Engineer position at Mixpanel. With a background in software development and hands on experience supporting users, I'm drawn to the chance to work where customer service, technical problem solving, and product analytics meet. Mixpanel's mission to make data accessible without SQL fits my interest in tools that let people answer their own questions.

At Fullstack Academy, I've worked with SQL, PostgreSQL, JavaScript, browser developer tools, Slack, and Thunder Client. That foundation in web tech and API interactions helps me troubleshoot from both the front end and back end. While working on BeTuned, a published mobile game, I got comfortable with mobile SDKs, used Google Analytics to track player behavior, and kept the team organized in Slack and Trello. I haven't used a formal ticketing platform like Zendesk, but I've fielded plenty of customer questions and know how to keep explanations clear and friendly.

I'm eager to join a team that values technical depth and user focused support. I'd love to dive into Mixpanel, learn the platform inside and out, and help your customers get the answers they need fast. Thank you for considering my application. I'd welcome the chance to talk more about how I can help.`);
  const [closing, setClosing] = useState("Sincerely,\nWyatt Wilson");

  const handlePrint = () => {
    window.print();
  };

  // Header component with editable fields
  const EditableHeader = () => (
    <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900">{name}</h1>
        <div className="flex items-center gap-2 mt-1">
          <h2 className="text-xl font-medium text-indigo-600">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end">
        <span className="text-slate-600">{location}</span>
        <span className="text-slate-600">{email}</span>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl px-4 py-8 mx-auto">
        <div className="mb-4 flex justify-start print:hidden">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Resume
            </Button>
          </Link>
        </div>

        {/* Editor Panel */}
        <Card className="p-6 shadow-md bg-white mb-8">
          <h1 className="text-2xl font-bold text-indigo-900 mb-6">Cover Letter Editor</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Your Location"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="greeting">Greeting</Label>
                <Input
                  id="greeting"
                  value={greeting}
                  onChange={(e) => setGreeting(e.target.value)}
                  placeholder="Dear Hiring Manager,"
                />
              </div>
              
              <div>
                <Label htmlFor="body">Body</Label>
                <Textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter your cover letter content here..."
                  className="min-h-[300px] resize-y"
                />
              </div>
              
              <div>
                <Label htmlFor="closing">Closing</Label>
                <Textarea
                  id="closing"
                  value={closing}
                  onChange={(e) => setClosing(e.target.value)}
                  placeholder="Sincerely,&#10;Your Name"
                  className="min-h-[80px]"
                />
              </div>
              
              <Button onClick={handlePrint} className="w-full">
                Export to PDF
              </Button>
            </div>
            
            {/* Live Preview */}
            <div className="lg:sticky lg:top-8">
              <Label className="text-sm font-medium text-slate-600 mb-2 block">Live Preview:</Label>
              <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm max-h-[600px] overflow-y-auto">
                <div className="transform scale-75 origin-top-left w-[133%]">
                  <div className="bg-white p-8">
                    <EditableHeader />
                    <Separator className="my-6" />
                    <div className="space-y-4">
                      <p className="text-slate-800 leading-relaxed">{greeting}</p>
                      <div className="space-y-4">
                        {body.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-slate-800 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <div className="pt-4">
                        {closing.split('\n').map((line, index) => (
                          <p key={index} className="text-slate-800">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Print Version (hidden on screen) */}
        <div className="print:block hidden">
          <Card className="p-8 shadow-md bg-white">
            <EditableHeader />
            <Separator className="my-6" />
            <div className="space-y-4">
              <p className="text-slate-800 leading-relaxed">{greeting}</p>
              <div className="space-y-4">
                {body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-800 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="pt-4">
                {closing.split('\n').map((line, index) => (
                  <p key={index} className="text-slate-800">{line}</p>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:block, .print\\:block * {
            visibility: visible;
          }
          .print\\:block {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          @page {
            margin: 0.5in;
            size: letter;
          }
        }
      `}</style>
    </div>
  );
};

export default CoverLetterTool;
