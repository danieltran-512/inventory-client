import ContentContainer from "@/components/ContentContainer";
import formatCurrency from "@/utils/formatCurrency";
import getOrder from "@/utils/queries/getOrder";

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function Confirmation(props: Props) {
  const { searchParams } = props;

  const partItems = searchParams["partItems"];

  const order = await getOrder({
    partItems: JSON.parse(partItems ? partItems.toString() : "[]"),
  });

  return (
    <ContentContainer>
      {typeof order === "string" ? (
        <p className="text-3xl">{order}</p>
      ) : (
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl pb-4">Your order</h1>

          {order.lineItems.map((h) => (
            <div key={h.part.id} className="flex flex-row justify-between">
              <p>{`${h.part.description} x ${h.part.quantity}`}</p>
              <p>{`${formatCurrency(h.cost)}`}</p>
            </div>
          ))}

          <div className="flex flex-row justify-between border-t-2 pt-8 text-2xl">
            <h3>Total</h3>
            <h3>{formatCurrency(order.totalCost)}</h3>
          </div>
        </div>
      )}
    </ContentContainer>
  );
}

export const dynamic = "force-dynamic";
