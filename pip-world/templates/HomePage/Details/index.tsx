import cn from "classnames";
import Image from "@/components/Image";
import Item from "./Item";
import Illustration1 from "./Illustration1";
import Illustration2 from "./Illustration2";
import Illustration3 from "./Illustration3";
import styles from "./Details.module.sass";

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className={cn("section", styles.details)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <div className={styles.check}>
                    <Image
                        className={styles.image}
                        src="/images/details-check.svg"
                        width={368}
                        height={727}
                        alt=""
                    />
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                </div>
                <div className={cn("h2", styles.title)}>
                    The PiP World Ecosystem
                </div>
                <div className={styles.info}>Our Products</div>
            </div>
            <div className="">
                <Item
                    className={styles.item}
                    title="PiP Token"
                    content="Join waitlist (maybe infographic on how to purchase)"
                    icon="/images/plus.svg"
                    gradient="/images/gradient-1.png"
                >
                    <Illustration1 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="PiP Trader"
                    content="Step into the world of PiP Trader, a strategy and management simulator game that’s been meticulously crafted to challenge you to create and manage a financial empire within the ever-changing markets of the PiP World universe."
                    icon="/images/numbers.svg"
                    gradient="/images/gradient-2.png"
                >
                    <Illustration2 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="PiP Adacemy"
                    content="complements the immersive gameplay of PiP Trader with a robust educational platform that simplifies complex financial concepts. Utilizing AI-powered adaptive learning, PiP Academy delivers content in structured, easy-to-understand modules, with friendly PiP characters guiding users through interactive lessons that bring theory to life."
                    icon="/images/laptop.svg"
                    gradient="/images/gradient-3.png"
                >
                    <Illustration3 />
                </Item>
                <Item
                    className={styles.item}
                    classOvarlay={styles.overlay}
                    title="Stock Rise"
                    content="The premier stock simulator game on Roblox is now proudly part of the PiP World ecosystem. This hyper-realistic trading simulator allows over 7.1 million players to experience the excitement of stock and cryptocurrency trading in a fun, safe, and educational environment. With real-time prices and a focus on risk assessment and strategic decision-making, StockRise empowers players to grow their virtual wealth while developing critical financial skills."
                    icon="/images/laptop.svg"
                    gradient="/images/gradient-3.png"
                >
                    <Illustration3 />
                </Item>
            </div>
        </div>
    </div>
);

export default Details;
