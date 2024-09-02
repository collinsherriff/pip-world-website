import cn from "classnames";
import Label from "@/components/Label";
import CompletedTasks from "@/components/CompletedTasks";
import Bento from "./Bento";
import Bento13 from "./Bento13";
import Bento11 from "./Bento11";
import styles from "./Work.module.sass";

type WorkProps = {};

const Work = ({}: WorkProps) => (
    <div className={styles.work}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <Label title="START EARNING" />
                <h2 className={cn("h2", styles.title)}>
                    PiP Hedge Fund: A Telegram Airdrop
                </h2>
            </div>
            <div className={styles.body}>
                <div className={styles.boxes}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={styles.list}>
                    <Bento
                        title="PLAY"
                        content="Create, manage, and conquer your to-do lists with ease"
                        number={1}
                    >
                        <Bento13 />
                    </Bento>
                    <Bento
                        title="REFER"
                        content="Tap the '+' button and start adding items to your list"
                        number={2}
                    >
                        <Bento11 />
                    </Bento>
                    <Bento
                        title="EARN"
                        content="Manage, update, and complete tasks with ease"
                        number={3}
                    >
                        <CompletedTasks />
                    </Bento>
                </div>
            </div>
        </div>
    </div>
);

export default Work;
