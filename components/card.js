import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";

const Card = ({ name, imgUrl, href }) => {
  return (
    <Link href={href}>
      <a className={styles.cardLink}>
        <div className={`${styles.container} glass`}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imgUrl}
              width={260}
              height={160}
              alt={name}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
