import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronRight,
  FileText,
  Lock,
  BarChart,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const faqItems = [
    {
      question: "What is EduTackr?",
      answer:
        "EduTackr is a platform designed to streamline and modernize the faculty appraisal process. It allows faculty members to log their professional activities and provides administrators with a centralized system to evaluate and manage appraisals effectively.",
    },
    {
      question: "How do I log my activities in EduTackr?",
      answer:
        "Faculty members can log in to the platform and access the 'Self-Appraisal Form.' You can then enter details about your research publications, event participation, seminars, projects, and lectures.",
    },
    {
      question: "How are my research publications updated?",
      answer:
        "EduTackr can automatically track and update your research publications, similar to Google Scholar. You can also manually add any publications not captured by the system.",
    },
    {
      question: "How do administrators access and manage appraisals?",
      answer:
        "Administrators can log in to the Admin Panel, where they can view, sort, and download detailed appraisal submissions. They can also access real-time updates and generate reports in PDF format.",
    },
    {
      question: "Can I view and update my previous entries?",
      answer:
        "Yes, you can access and update your previous entries through your dashboard. All logged activities are saved, and you can make modifications whenever needed.",
    },
    {
      question: "How secure is EduTackr?",
      answer:
        "EduTackr employs robust security measures, including encryption and access controls, to ensure that all data remains confidential and is only accessible to authorized personnel.",
    },
    {
      question: "How do I receive notifications from EduTackr?",
      answer:
        "EduTackr provides system notifications, such as reminders and alerts, that can be accessed through your dashboard. You can also choose to receive email notifications.",
    },
  ];

  return (
    <main className="container mx-auto px-10 py-12 min-h-screen">
      <section className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Revolutionize Faculty Self-Appraisal
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Empower your academic journey with "EduTackr" - the cutting-edge platform
          for comprehensive faculty performance tracking and career advancement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started Now <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section id="features" className="mb-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Powerful Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 text-purple-600 mr-2" />{" "}
                Comprehensive Logging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Effortlessly document research publications, events, seminars,
                projects, and lectures in a centralized system.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-6 w-6 text-purple-600 mr-2" /> Advanced
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enjoy peace of mind with robust encryption, secure
                authentication, and role-based access control.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="h-6 w-6 text-purple-600 mr-2" /> Dynamic
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Gain valuable insights with real-time performance metrics, trend
                analysis, and customizable reports.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-6 w-6 text-purple-600 mr-2" /> Career
                Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track your progress, set goals, and identify opportunities for
                professional growth and advancement.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-6 w-6 text-purple-600 mr-2" />{" "}
                Academic Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Seamlessly integrate with academic databases and citation
                systems for automatic publication tracking.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-6 w-6 text-purple-600 mr-2" /> Recognition
                System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Highlight achievements and contributions with a built-in
                recognition and reward system.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="benefits" className="mb-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Benefits for All
        </h3>
        <Tabs defaultValue="faculty" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faculty">Faculty Members</TabsTrigger>
            <TabsTrigger value="admin">Administrators</TabsTrigger>
          </TabsList>
          <TabsContent value="faculty">
            <Card>
              <CardHeader>
                <CardTitle>Empowering Faculty Excellence</CardTitle>
                <CardDescription>
                  Unlock your full potential with "EduTackr"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Streamlined activity logging saves time
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Comprehensive performance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Data-driven insights for career growth
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Simplified self-appraisal process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Recognition for academic achievements
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Optimizing Academic Management</CardTitle>
                <CardDescription>
                  Transform your institution with data-driven decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Centralized faculty performance data
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Efficient evaluation and appraisal processes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Comprehensive analytics for strategic planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Improved resource allocation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Enhanced transparency and accountability
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="testimonials" className="mb-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle> John Doe</CardTitle>
              <CardDescription>
                Associate Professor, Computer Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit rerum culpa rem inventore maxime, ab sint, doloribus
              dignissimos nulla explicabo est dolor dolores, deserunt omnis qui
              assumenda similique laudantium fugit?"
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Dr. Anonymous </CardTitle>
              <CardDescription>
                Associate Professor, School of Engineering
              </CardDescription>
            </CardHeader>
            <CardContent>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              placeat id ratione cumque maxime dolore reprehenderit quo labore
              harum, dolorum similique odit cupiditate? Soluta iusto sapiente
              rem reprehenderit nihil consequatur."
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="mb-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-gray-700"
              >
                <AccordionTrigger className="text-xl text-black">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xl text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="text-center mb-20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Ready to Transform Your Academic Career?
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of faculty members and institutions already benefiting
          from "EduTackr".
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started Now <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
