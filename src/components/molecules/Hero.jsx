import { Button } from "../atoms/Button";
import Card from "../atoms/Card";

function Hero() {
  const total = 4 + 4;
  return (
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at,
      eaque nisi quibusdam optio ipsam tempore assumenda laudantium maiores
      quisquam id pariatur maxime vel officiis ad, illo beatae repellendus!
      Ipsa.
      <Button content={total} />
      <Card />
    </section>
  );
}

export default Hero;
