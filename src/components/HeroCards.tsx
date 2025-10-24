import {Badge} from "./ui/badge";
import {Button, buttonVariants} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import {Check, Linkedin} from "lucide-react";
import {LightBulbIcon} from "./Icons";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* Team */}
            <Card
                className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4E03AQEG5mr9vanJwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665413687936?e=1762992000&v=beta&t=Q9tj3kw_Tef-YjeodBfD3AtXDuEqNQAxxR7Xg53_fTk"
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">Attila Eser</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Principal Structural Engineer
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        This solver cut our analysis time from 8 hours to under 10 minutes.
                        We can now evaluation design decisions in near real-time.
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://at.linkedin.com/in/attila-eser-b6aa4a66/"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Linkedin icon</span>
                            <Linkedin size="20"/>
                        </a>
                    </div>
                </CardFooter>
            </Card>

            {/* Pricing */}
            <Card
                className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Subscription
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
                        >
                            Coming Soon
                        </Badge>
                    </CardTitle>

                    <CardDescription>
                        Our subscription plan is under development. Stay tuned for
                        updates!
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full">Register Interest</Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4"/>

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {["Secure online access", "Blazingly fast local execution", "Multiple subscription options"].map(
                            (benefit: string) => (
                                <span
                                    key={benefit}
                                    className="flex"
                                >
                  <Check className="text-green-500"/>{" "}
                                    <h3 className="ml-2">{benefit}</h3>
                </span>
                            )
                        )}
                    </div>
                </CardFooter>
            </Card>

            {/* Service */}
            <Card
                className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <LightBulbIcon/>
                    </div>
                    <div>
                        <CardTitle>In one analysis run</CardTitle>
                        <CardDescription className="text-md mt-2">
                            - Multiple configurations <br/>
                            - Multiple load combinations <br/>
                            - Variable cycle distributions <br />
                            - Multiple fatigue categories <br/>
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
