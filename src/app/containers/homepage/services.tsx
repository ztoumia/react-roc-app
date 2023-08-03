import { RowComponent } from "../../components/row";
import { Box } from "../../components/row/boxcomponent";
import PlusTen from "../../../assets/images/plus-ten-circle.svg";
import Design from "../../../assets/images/design.svg";
import Programming from "../../../assets/images/programming.svg";
import Performance from "../../../assets/images/performance.svg";
import Conseil from "../../../assets/images/conseil.svg";
import { useRef, useState } from "react";
  
  export function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const rowData: Box[] = [
      {
        icon: Design,
        title: "Architecture & Conception",
        description: "Conception de solutions robustes et création de plans d'architecture pour votre projet web.",
      },
      {
        icon: Programming,
        title: "Développement d'Applications Web",
        description: "Construction d'applications web puissantes en utilisant les dernières technologies et méthodologies.",
      },
      {
        icon: Conseil,
        title: "Conseil",
        description: "Conseils stratégiques pour guider vos projets web vers le succès.",
      },
      {
        icon: Performance,
        title: "Optimisation de la Performance",
        description: "Optimisation de la vitesse, de la sécurité et de la convivialité pour une expérience utilisateur optimale.",
      }
    ];
    return (
      <RowComponent title="Nos Services" rowData={rowData}/>
    );
  }
  