import Billions from "@/components/billions";

async function getBillions() {
  const response = await fetch(`https://billions-api.nomadcoders.workers.dev/`);
  return response.json();
}

export default async function Home() {
  const billions = await getBillions();

  return (
    <div className="grid grid-cols-4 gap-4 my-16 mx-96">
      {billions.map((billion: any) => (
        <Billions
          key={billion.id}
          id={billion.id}
          name={billion.name}
          squareImage={billion.squareImage}
          netWorth={billion.netWorth}
          industries={billion.industries}
        />
      ))}
    </div>
  );
}
