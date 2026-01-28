import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "Simple Ball Game",
        description:
            "A simple ball game using python",
        image: "/projects/ballgame.png",
        tags: ["Python", "pygame"],
        link: "#",
        github: "https://github.com/Malchyrus/SimplePythonBilliardBallGame",
    },
    {
        title: "WordIn",
        description:
            "An Indonesian Wordle game made with android studio",
        image: "/projects/Wordin.jpeg",
        tags: ["Android Studio", "Jetpack Compose", "Kotlin"],
        link: "#",
        github: "https://github.com/intannk/mocom_mobile",
    },
    {
        title: "TaxFlow",
        description:
            "A Simple Tax Management Web",
        image: "/projects/Home-TaxFlow.png",
        tags: ["Laravel", "React", "MySQL", "Tailwind"],
        link: "#",
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">

            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mx-auto max-w-3xl mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        My
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            Projects
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Some are work i made together with my friends
                    </p>
                </div>


                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => {
                        const isLastOdd = idx === projects.length - 1 && projects.length % 2 === 1;
                        return (
                            <div
                                key={idx}
                                className={`group glass rounded-2xl overflow-hidden animate-fade-in ${isLastOdd ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto' : ''}`}
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >

                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 
                                bg-gradient-to-t from-card via-card/50
                                to-transparent opacity-60"
                                    />

                                    {(project.link && project.link !== "#") || (project.github && project.github !== "#") ? (
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.link && project.link !== "#" && (
                                                <a
                                                    href={project.link}
                                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                                >
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.github && project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    ) : null}
                                </div>


                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};