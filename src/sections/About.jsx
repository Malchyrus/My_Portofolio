import { Search, Handshake, Brain, Blocks } from "lucide-react";

const highlights = [
    {
        icon: Search,
        title: "Curiosity",
        description:
            "Actively exploring different technologies and fields to understand how things work.",
    },
    {
        icon: Brain,
        title: "Fundamentals",
        description:
            "Focusing on core computer science concepts as a foundation for any technology I learn.",
    },
    {
        icon: Blocks,
        title: "Learning by Doing",
        description: "Building small projects, experimenting, and learning from mistakes.",
    },
    {
        icon: Handshake,
        title: "Growth",
        description:
            "Being open to feedback, collaboration, and continuous self-improvement.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            A CompSci student learning
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                by trying, building, and iterating.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a Computer Science Undergraduate who is actively exploring different areas of computing
                                to discover where my interests and strengths truly lie. Rather than focusing on a single domain,
                                I enjoy trying new technologies and approaches to understand how different systems are built and how they work.
                            </p>
                            <p>
                                I have experience experimenting with various tools and environments.
                                From web technologies to game development using Godot,
                                and I value the learning process that comes from stepping outside my comfort zone. For me, computer science is not just about choosing a stack, but about understanding problems and finding the right tools to solve them.
                            </p>
                            <p>
                                As a student, I am still in the process of learning and growing.
                                I enjoy building small projects, breaking things, fixing them, and reflecting on what I can do better next time.
                                This mindset helps me continuously improve both my technical skills and my way of thinking.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My goal is to keep learning through hands-on projects,
                                explore different fields within computer science,
                                and gradually shape my path as a developer and problem solver"
                            </p>
                        </div>
                    </div>


                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
