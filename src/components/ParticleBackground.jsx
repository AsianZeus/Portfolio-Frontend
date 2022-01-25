import ParticlesConfig from "./config/particle-config.";
import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return <Particles params={ParticlesConfig} />;
}
