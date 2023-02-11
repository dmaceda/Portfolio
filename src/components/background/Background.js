import Particles from "react-tsparticles";
import ParticleConfig from "./particle-config";
import "./background.css";

export default function Background() {
  return (
    <div className="background">
      <Particles params={ParticleConfig} />
    </div>
  );
}
