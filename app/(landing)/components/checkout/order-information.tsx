import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="px-5 py-6 flex flex-col gap-4">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            id="full_name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="wa_number">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your full whatsapp number"
            id="wa_number"
          />
        </div>

        <div className="input-group">
          <label htmlFor="shipping_address">Shipping Address</label>
          <textarea
            id="shipping_address"
            placeholder="Type your shipping address"
            rows={7}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;