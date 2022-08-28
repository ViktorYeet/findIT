import Image from "next/image";

import { Service } from "../../data/service";

import styles from "./ServiceCard.module.scss";

export interface ServiceCardProps {
  service: Service;
}
function ServiceCard({ service }: ServiceCardProps) {
  let src;

  // Use the specified service icon if it exists, otherwise use the service's favicon.
  if (service.icon) {
    src = `images/${service.icon}.svg`;
  } else {
    src = `${service.url}/favicon.ico`;
  }

  return (
    <div className="card">
      <p className={styles.cardTitle}>
        <img
          src={src}
          className={`${styles.iconClass} marginTop marginLeft marginRight`}
          alt={`${service.title}'s icon`}
        />
        {service.title}
      </p>
      <p className="marginTop">{service.description}</p>
      <a className={styles.aClass} href={service.github_url}>
        GITHUB
      </a>
      <button
        className={styles.buttonClass}
        onClick={() => {
          window.open(service.url);
        }}>
        OPEN SERVICE
      </button>
    </div>
  );
}

export default ServiceCard;
