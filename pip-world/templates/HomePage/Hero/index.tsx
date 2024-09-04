import cn from "classnames";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Images from "./Images";
import styles from "./Hero.module.sass";

type HeroProps = {};

const Hero = ({}: HeroProps) => (
    <div className={cn("section", styles.hero)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <h1 className={cn("h1", styles.title)}>
                    PiP World Ecosystem
                </h1>
                <div className={styles.info}>
                    We redefine the way people learn about financial markets by creating engaging, gamified experiences through Web3 innovation on the world’s largest platforms
                </div>
                <Button
                    className={styles.button}
                    title="JOIN OUR AIRDROP"
                    href="https://ui8-bento-elements.vercel.app/"
                />
                <div className={styles.version}>Text</div>
            </div>
            <div className={styles.foot}>
                <div className={styles.description}>
                    We've partnered with over <span>50,000</span> launchpads
                </div>
                <div className={styles.avatars}>
                    {[
                        "/images/avatar-6.png",
                        "/images/avatar-5.png",
                        "/images/avatar-4.png",
                        "/images/avatar-3.png",
                        "/images/avatar-2.png",
                        "/images/avatar-1.png",
                    ].map((avatar, index) => (
                        <div className={styles.avatar} key={index}>
                            <Image
                                className={styles.image}
                                src={avatar}
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* <Stars /> */}
    </div>
);

export default Hero;
