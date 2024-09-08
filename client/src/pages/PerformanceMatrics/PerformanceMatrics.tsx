import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Award,
  Book,
  Users,
  Lightbulb,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const facultyData = {
  name: "Dr. John Doe ",
  department: "Computer Science",
  publications: 18,
  seminars: 7,
  projects: 5,
  teachingScore: 4.7,
  researchScore: 4.5,
  eventParticipation: 12,
  studentFeedback: 4.8,
  grantsFunded: 4,
  citationCount: 450,
  coursesDeveloped: 3,
  communityEngagement: 8,
  performanceHistory: [
    { year: 2019, teaching: 4.2, research: 4.0, overall: 4.1 },
    { year: 2020, teaching: 4.3, research: 4.2, overall: 4.25 },
    { year: 2021, teaching: 4.5, research: 4.3, overall: 4.4 },
    { year: 2022, teaching: 4.6, research: 4.4, overall: 4.5 },
    { year: 2023, teaching: 4.7, research: 4.5, overall: 4.6 },
  ],
  teachingDetails: [
    { course: "Introduction to Programming", rating: 4.8, students: 120 },
    { course: "Data Structures and Algorithms", rating: 4.7, students: 85 },
    { course: "Machine Learning", rating: 4.9, students: 60 },
  ],
  researchAreas: [
    { name: "Artificial Intelligence", percentage: 40 },
    { name: "Data Science", percentage: 30 },
    { name: "Computer Vision", percentage: 20 },
    { name: "Robotics", percentage: 10 },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PerformanceMetrics() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [benchmarkScore, setBenchmarkScore] = useState(4.0);

  const performanceData = [
    { name: "Teaching", score: facultyData.teachingScore },
    { name: "Research", score: facultyData.researchScore },
    { name: "Student Feedback", score: facultyData.studentFeedback },
  ];

  const activityData = [
    { name: "Publications", value: facultyData.publications },
    { name: "Seminars", value: facultyData.seminars },
    { name: "Projects", value: facultyData.projects },
    { name: "Events", value: facultyData.eventParticipation },
    { name: "Grants", value: facultyData.grantsFunded },
    { name: "Courses Developed", value: facultyData.coursesDeveloped },
    { name: "Community Engagement", value: facultyData.communityEngagement },
  ];

  const radarData = [
    { subject: "Teaching", A: facultyData.teachingScore, fullMark: 5 },
    { subject: "Research", A: facultyData.researchScore, fullMark: 5 },
    { subject: "Publications", A: facultyData.publications / 5, fullMark: 5 },
    {
      subject: "Student Feedback",
      A: facultyData.studentFeedback,
      fullMark: 5,
    },
    { subject: "Grants", A: facultyData.grantsFunded, fullMark: 5 },
    {
      subject: "Community",
      A: facultyData.communityEngagement / 2,
      fullMark: 5,
    },
  ];

  const getInsights = () => {
    const insights = [];
    if (facultyData.publications > 15) {
      insights.push(
        "Exceptional publication record. Consider for research leadership roles."
      );
    } else if (facultyData.publications < 10) {
      insights.push(
        "Publication count is below department average. May need support in research activities."
      );
    }
    if (facultyData.teachingScore > 4.5) {
      insights.push(
        "Outstanding teaching performance. Potential candidate for teaching excellence awards."
      );
    }
    if (facultyData.grantsFunded > 3) {
      insights.push(
        "Highly successful in securing grants. Potential for leading large-scale research initiatives."
      );
    }
    if (facultyData.communityEngagement < 5) {
      insights.push(
        "Community engagement could be improved. Consider increasing participation in outreach programs."
      );
    }
    if (facultyData.citationCount > 400) {
      insights.push(
        "High citation count indicates significant impact in the field. Explore opportunities for keynote speaking engagements."
      );
    }
    return insights;
  };

  const getPerformanceTrend = () => {
    const lastYear =
      facultyData.performanceHistory[facultyData.performanceHistory.length - 1];
    const previousYear =
      facultyData.performanceHistory[facultyData.performanceHistory.length - 2];
    const overallTrend = lastYear.overall - previousYear.overall;
    const teachingTrend = lastYear.teaching - previousYear.teaching;
    const researchTrend = lastYear.research - previousYear.research;

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Overall Trend:</span>
          <span
            className={`flex items-center ${
              overallTrend >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {overallTrend >= 0 ? (
              <TrendingUp className="mr-1 h-4 w-4" />
            ) : (
              <TrendingDown className="mr-1 h-4 w-4" />
            )}
            {Math.abs(overallTrend).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Teaching Trend:</span>
          <span
            className={`flex items-center ${
              teachingTrend >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {teachingTrend >= 0 ? (
              <TrendingUp className="mr-1 h-4 w-4" />
            ) : (
              <TrendingDown className="mr-1 h-4 w-4" />
            )}
            {Math.abs(teachingTrend).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Research Trend:</span>
          <span
            className={`flex items-center ${
              researchTrend >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {researchTrend >= 0 ? (
              <TrendingUp className="mr-1 h-4 w-4" />
            ) : (
              <TrendingDown className="mr-1 h-4 w-4" />
            )}
            {Math.abs(researchTrend).toFixed(2)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                Faculty Performance Analytics: {facultyData.name}
              </CardTitle>
              <CardDescription>
                Department: {facultyData.department}
              </CardDescription>
            </div>
            <Select
              value={selectedYear.toString()}
              onValueChange={(value) => setSelectedYear(parseInt(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {facultyData.performanceHistory.map((item) => (
                  <SelectItem key={item.year} value={item.year.toString()}>
                    {item.year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="teaching">Teaching</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 5]} />
                        <Radar
                          name={facultyData.name}
                          dataKey="A"
                          stroke="#8884d8"
                          fill="#8884d8"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Performance Trend</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={facultyData.performanceHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis domain={[3.5, 5]} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="teaching"
                        stroke="#8884d8"
                      />
                      <Line
                        type="monotone"
                        dataKey="research"
                        stroke="#82ca9d"
                      />
                      <Line
                        type="monotone"
                        dataKey="overall"
                        stroke="#ffc658"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Publications
                        </CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {facultyData.publications}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          +20% from last year
                        </p>
                        <Progress
                          className="mt-2"
                          value={facultyData.publications / 0.2}
                        />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Teaching Score
                        </CardTitle>
                        <Book className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {facultyData.teachingScore.toFixed(1)}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          +0.2 from last year
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.teachingScore / 5) * 100}
                        />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Grants Funded
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {facultyData.grantsFunded}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          +2 from last year
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.grantsFunded / 5) * 100}
                        />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Citation Count
                        </CardTitle>
                        <Lightbulb className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {facultyData.citationCount}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          +30% from last year
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.citationCount / 500) * 100}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Performance Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Performance Trend</AlertTitle>
                    <AlertDescription>{getPerformanceTrend()}</AlertDescription>
                  </Alert>
                  <ul className="mt-4 space-y-2">
                    {getInsights().map((insight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">•</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="research">
              <Card>
                <CardHeader>
                  <CardTitle>Research Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">Publications</h4>
                        <p className="text-2xl font-bold">
                          {facultyData.publications}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.publications / 20) * 100}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Citations</h4>
                        <p className="text-2xl font-bold">
                          {facultyData.citationCount}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.citationCount / 500) * 100}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Grants Funded</h4>
                        <p className="text-2xl font-bold">
                          {facultyData.grantsFunded}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.grantsFunded / 5) * 100}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Research Score</h4>
                        <p className="text-2xl font-bold">
                          {facultyData.researchScore.toFixed(1)}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.researchScore / 5) * 100}
                        />
                      </div>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Research Areas</CardTitle>
                      </CardHeader>
                      <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={facultyData.researchAreas}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="percentage"
                              label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                              }
                            >
                              {facultyData.researchAreas.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teaching">
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">Teaching Score</h4>
                        <p className="text-2xl font-bold">
                          {facultyData.teachingScore.toFixed(1)}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.teachingScore / 5) * 100}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Student Feedback</h4>
                        <p className="text-2xl font-bold">
                          {facultyData.studentFeedback.toFixed(1)}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.studentFeedback / 5) * 100}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">
                          Courses Developed
                        </h4>
                        <p className="text-2xl font-bold">
                          {facultyData.coursesDeveloped}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.coursesDeveloped / 5) * 100}
                        />
                      </div>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Ratings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Course</TableHead>
                              <TableHead>Rating</TableHead>
                              <TableHead>Students</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {facultyData.teachingDetails.map(
                              (course, index) => (
                                <TableRow key={index}>
                                  <TableCell>{course.course}</TableCell>
                                  <TableCell>
                                    {course.rating.toFixed(1)}
                                  </TableCell>
                                  <TableCell>{course.students}</TableCell>
                                </TableRow>
                              )
                            )}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="engagement">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">
                          Event Participation
                        </h4>
                        <p className="text-2xl font-bold">
                          {facultyData.eventParticipation}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.eventParticipation / 15) * 100}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">
                          Community Engagement
                        </h4>
                        <p className="text-2xl font-bold">
                          {facultyData.communityEngagement}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.communityEngagement / 10) * 100}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Seminars</h4>
                        <p className="text-2xl font-bold">
                          {facultyData.seminars}
                        </p>
                        <Progress
                          className="mt-2"
                          value={(facultyData.seminars / 10) * 100}
                        />
                      </div>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Engagement Benchmark</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="benchmark"
                              className="text-sm font-medium"
                            >
                              Set Benchmark Score: {benchmarkScore.toFixed(1)}
                            </label>
                            <Slider
                              id="benchmark"
                              min={1}
                              max={5}
                              step={0.1}
                              value={[benchmarkScore]}
                              onValueChange={(value) =>
                                setBenchmarkScore(value[0])
                              }
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <h4 className="mb-2 font-semibold">
                              Performance vs Benchmark
                            </h4>
                            <div className="space-y-2">
                              {performanceData.map((item) => (
                                <div
                                  key={item.name}
                                  className="flex items-center justify-between"
                                >
                                  <span>{item.name}</span>
                                  <span
                                    className={
                                      item.score >= benchmarkScore
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }
                                  >
                                    {item.score.toFixed(1)}
                                    {item.score >= benchmarkScore ? (
                                      <ChevronUp className="inline ml-1" />
                                    ) : (
                                      <ChevronDown className="inline ml-1" />
                                    )}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
