import { Award, GraduationCap, Briefcase, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">About Me</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
Cybersecurity enthuasist with a background in<br></br> computer networking, cybersecurity and digital forensics.                <br></br>
                I also go by the name darpwn. 

              </p>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      {/* Profile Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Darpan Mahato</h2>
                <p className="text-xl text-muted-foreground">
                  <span className="text-primary font-semibold">Cybersecurity Enthusiast</span>
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I am a cybersecurity enthusiast with a passion for helping organizations strengthen their
                  security posture and protect their valuable digital assets. I have gathered extensive skills and experience by completing various labs and challenges, including those on Hack The Box, TryHackMe, and other platforms. My journey in cybersecurity has equipped me with a solid foundation in penetration testing, security architecture, and incident response.
                </p>
                <p className="text-muted-foreground">
                  My approach combines technical expertise with a deep understanding of business needs, allowing me to
                  develop security solutions that are both effective and practical. I believe that cybersecurity is not
                  just about implementing technical controls, but also about building a culture of security awareness
                  and resilience.
                </p>
                <p className="text-muted-foreground">
                  I am committed to continuous learning and staying up-to-date with the latest threats and trends in the
                  cybersecurity landscape. I enjoy sharing my knowledge through writing articles, giving talks, and
                  mentoring others in the field.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-background p-2">
                  <Image
                    src="/darpwn.jpg"
                    alt="Darpwn - Cybersecurity Enthusiast"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Credentials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Certifications & Education</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Professional qualifications and academic background that inform my expertise.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CyberOps Associate</CardTitle>
                <CardDescription>Cisco</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cyberops Associate certification, proves the expertise in essential cybersecurity skills, concepts, and technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SC-900</CardTitle>
                <CardDescription>Microsoft</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Security, Compliance, and Identity Fundamentals demonstrate a functional understanding of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>
IT Specialist - Python</CardTitle>
                <CardDescription>Certiport</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earners of this badge demonstrate that they can recognize, write, and debug Python code that will logically solve a problem.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AWS Academy Cloud Foundations</CardTitle>
                <CardDescription>AWS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earners of this badge have taken the AWS Academy Cloud Foundations course.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Expertise</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Specializations</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Core competencies and specialized knowledge areas in cybersecurity.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Penetration Testing</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Web Application Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Network Infrastructure Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Mobile Application Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Social Engineering Assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Red Team Operations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Security Architecture</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Zero Trust Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cloud Security Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Network Security Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Identity & Access Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Secure SDLC Implementation</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Incident Response</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Digital Forensics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Malware Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Threat Hunting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Incident Response Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Breach Containment & Recovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Career</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Experience</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                My journey through the cybersecurity industry.
              </p>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/40 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Cybersecurity Intern</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2025 - Present
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">Ausbiz Consulting</p>
                <p className="text-sm text-muted-foreground">
                  Assisting in vulnerability assessments and penetration testing. Supporting incident response efforts and
                  security monitoring. Collaborating with senior engineers on security architecture design and implementation.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Security Intern</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2023
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">Protozoa Host</p>
                <p className="text-sm text-muted-foreground">
                  Assisted in security audits and compliance checks. Supported the development of security policies and
                  procedures. Participated in incident response drills and security awareness training.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Cyberops Member</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2023
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">Islington College</p>
                <p className="text-sm text-muted-foreground">
                  Participated in cybersecurity competitions and capture the flag (CTF) events. Collaborated with peers on
                  security projects and research. Engaged in community outreach to promote cybersecurity awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
