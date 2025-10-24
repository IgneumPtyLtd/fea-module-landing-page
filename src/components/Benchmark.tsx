import {Card} from "@/components/ui/card";
import benchmarkImage from "../assets/yandi-reclaimer-rect.png";

interface BenchmarkStatProps {
    value: string;
    label: string;
}

const benchmarkStats: BenchmarkStatProps[] = [
    {
        value: "800k",
        label: "Elements Analyzed",
    },
    {
        value: "6",
        label: "Machine Configurations",
    },
    {
        value: "100",
        label: "Load Combinations",
    },
    {
        value: "2",
        label: "Fatigue Categories",
    },
];

export const Benchmark = () => {
    return (
        <section className="container py-24 sm:py-32">
            <div className="grid lg:grid-cols-2 gap-8 place-items-center">
                {/* Left side - Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Unsurpassed{" "}
                            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                Performance
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Detailed, truly representative fatigue analysis in minutes, not days
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {benchmarkStats.map(({value, label}) => (
                            <Card key={label} className="p-6 flex items-center justify-center">
                                <div className="space-y-2 text-center">
                                    <div
                                        className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                        {value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {label}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div>
                        <Card key="dasd" className="p-6 flex items-center justify-center">
                            <div className="space-y-2 text-center">
                                <div
                                    className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    4 Minutes
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Analysis Duration
                                </div>
                            </div>
                        </Card>

                    </div>

                    <p className="text-muted-foreground">
                        Benchmark case: Multi-configuration fatigue analysis of bucket wheel
                        reclaimer structure with full lifecycle load envelope evaluation.
                    </p>
                </div>

                {/* Right side - Image */}
                <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                    <img
                        src={benchmarkImage}
                        alt="Complex reclaimer geometry finite element model"
                        className="relative z-10 w-full h-auto max-w-[600px] drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};