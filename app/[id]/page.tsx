import getBillion from "../constants";

interface IParams {
  params: { id: string };
}

interface PersonProfile {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: {
    exchange: string;
    ticker: string;
    companyName: string;
    numberOfShares: number;
    sharePrice: number;
    currencyCode: string;
    exchangeRate: number;
    interactive: boolean;
    currentPrice: number;
  }[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export default async function BillionsDetailPage({ params: { id } }: IParams) {
  const billion: PersonProfile = await getBillion(id);
  return (
    <main className="text-white my-16 mx-96">
      <div className="bg-gray-900 mb-5 flex flex-col rounded-md">
        <div className="my-14 mx-7">
          <img src={billion.squareImage} className="max-w-80 max-h-80" />
          <h1 className="mt-6 text-3xl font-semibold">{billion.name}</h1>
          <h1 className="mt-6 font-medium">
            Net worth : {Math.floor(billion.netWorth / 1000)} Billion
          </h1>
          <h1 className="mt-3 font-medium">Country : {billion.country}</h1>
          <h1 className="mt-3 font-medium">
            Industries : {billion.industries}
          </h1>
          <h1 className="mt-3 font-normal">{billion.bio}</h1>
        </div>
      </div>
      <div className="bg-gray-900 rounded-md flex">
        <div className="my-14 mx-7">
          <h1 className="mb-6 text-3xl font-semibold">Financial Assets</h1>
          <div className="grid grid-cols-4 place-items-center gap-5">
            {billion.financialAssets &&
              billion.financialAssets.map((asset, index) => (
                <div
                  key={index}
                  className="flex flex-col w-64 h-32 border rounded-md border-gray-500"
                >
                  <div className="m-3 font-medium">
                    <h1 className="mb-2">Ticker : {asset.ticker}</h1>
                    <h1 className="mb-2">
                      Shares : {asset.numberOfShares.toLocaleString()}
                    </h1>
                    {asset.currentPrice ? (
                      <h1>Excersice price: ${asset.currentPrice.toFixed(2)}</h1>
                    ) : null}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
