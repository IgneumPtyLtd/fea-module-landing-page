import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
    title: string;
    description: string;
    image: string;
}

const features: FeatureProps[] = [
    {
        title: "Worldwide Compliance",
        description:
            "Rapid fatigue assessment lets you explore more design alternatives and " +
            "optimize for cost-effectiveness without sacrificing analysis time.",
        image: image4,
    },
    {
        title: "Complete Lifecycle Envelope",
        description:
            "Combine machine configurations, load cases and fatigue cycles in a single analysis run. " +
            "Calculate the overall fatigue damage for the representative load and position distribution for a " +
            "truly representative damage assessment.",
        image: image3,
    },
    {
        title: "Work with Your Tools",
        description:
            "Integrates directly into your finite element environment. " +
            "Use the software you already know with enhanced fatigue capabilities.",
        image: image,
    },
];

export const Features = () => {
    return (
        <section
            id="features"
            className="container py-24 sm:py-32 space-y-8"
        >
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                Engineered for{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Compliance
                </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({title, description, image}: FeatureProps) => (
                    <Card key={title}>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>

                        <CardContent>{description}</CardContent>

                        <CardFooter>
                            <img
                                src={image}
                                alt="About feature"
                                className="w-[200px] lg:w-[300px] mx-auto"
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
