import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";
import {MedalIcon, MapIcon, PlaneIcon, GiftIcon} from "../components/Icons";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <MedalIcon/>,
        title: "Load Solution Files",
        description:
            "Import one or more linear analysis results from your FE solver",
    },
    {
        icon: <MapIcon/>,
        title: "Configure Analysis Run",
        description:
            "Specify fatigue cycles per solution",
    },
    {
        icon: <PlaneIcon/>,
        title: "Run Fatigue Solver",
        description:
            "Execute multi-category analysis across your entire model in minutes",
    },
    {
        icon: <GiftIcon/>,
        title: "Review in Your FE Software",
        description:
            "Export results in native format for visualization and reporting",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                How It{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Works{" "}
                </span>
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Seamless integration with your FE workflow in four straightforward steps
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({icon, title, description}: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/50"
                    >
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
